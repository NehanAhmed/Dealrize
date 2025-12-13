import { google } from 'googleapis'

const isDev = process.env.NODE_ENV === 'development'

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
const REDIRECT_URI = isDev 
  ? process.env.GOOGLE_REDIRECT_URI_DEV 
  : process.env.GOOGLE_REDIRECT_URI_PROD

if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !REDIRECT_URI) {
  throw new Error('Missing Google OAuth environment variables')
}

// Gmail scopes needed for read-only access
const SCOPES = [
  'openid',
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/gmail.readonly',
]

/**
 * Creates OAuth2 client instance
 */
export function createOAuth2Client() {
  return new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    REDIRECT_URI
  )
}

/**
 * Generates authorization URL for Google OAuth
 * @param state - CSRF protection state parameter
 * @returns Authorization URL
 */
export function getAuthUrl(state?: string): string {
  const oauth2Client = createOAuth2Client()
  
  return oauth2Client.generateAuthUrl({
    access_type: 'offline', // Required to get refresh token
    prompt: 'consent', // Force consent screen to ensure refresh token
    scope: SCOPES,
    state: state || '', // CSRF protection
    include_granted_scopes: true,
  })
}

/**
 * Exchanges authorization code for tokens
 * @param code - Authorization code from OAuth callback
 * @returns Token response
 */
export async function getTokensFromCode(code: string) {
  const oauth2Client = createOAuth2Client()
  
  try {
    const { tokens } = await oauth2Client.getToken(code)
    return tokens
  } catch (error) {
    console.error('Error exchanging code for tokens:', error)
    throw new Error('Failed to exchange authorization code')
  }
}

/**
 * Gets user info from Google
 * @param accessToken - Valid access token
 * @returns User profile information
 */
export async function getUserInfo(accessToken: string) {
  const oauth2Client = createOAuth2Client()
  oauth2Client.setCredentials({ access_token: accessToken })
  
  try {
    const oauth2 = google.oauth2({ version: 'v2', auth: oauth2Client })
    const { data } = await oauth2.userinfo.get()
    
    return {
      id: data.id || '',
      email: data.email || '',
      name: data.name || '',
      picture: data.picture || '',
      verified_email: data.verified_email || false,
    }
  } catch (error) {
    console.error('Error getting user info:', error)
    throw new Error('Failed to get user information')
  }
}

/**
 * Refreshes access token using refresh token
 * @param refreshToken - Valid refresh token
 * @returns New access token and expiry
 */
export async function refreshAccessToken(refreshToken: string) {
  const oauth2Client = createOAuth2Client()
  oauth2Client.setCredentials({ refresh_token: refreshToken })
  
  try {
    const { credentials } = await oauth2Client.refreshAccessToken()
    
    return {
      access_token: credentials.access_token!,
      expiry_date: credentials.expiry_date!,
    }
  } catch (error) {
    console.error('Error refreshing access token:', error)
    throw new Error('Failed to refresh access token')
  }
}

/**
 * Validates that a token has required scopes
 * @param token - Access token to validate
 * @returns Token info including scopes
 */
export async function validateToken(token: string) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${token}`
    )
    
    if (!response.ok) {
      throw new Error('Token validation failed')
    }
    
    const data = await response.json()
    
    return {
      valid: true,
      scopes: data.scope.split(' '),
      expires_in: data.expires_in,
      email: data.email,
    }
  } catch (error) {
    console.error('Token validation error:', error)
    return { valid: false }
  }
}

/**
 * Revokes access to prevent further API calls
 * @param token - Access or refresh token to revoke
 */
export async function revokeToken(token: string) {
  try {
    await fetch(`https://oauth2.googleapis.com/revoke?token=${token}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    return true
  } catch (error) {
    console.error('Token revocation error:', error)
    return false
  }
}