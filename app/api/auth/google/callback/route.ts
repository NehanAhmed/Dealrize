import { auth } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'
import { getTokensFromCode, getUserInfo } from '@/lib/google-oauth'
import { db } from '@/lib/db'
import { usersTable, connectedAccountsTable } from '@/lib/db/schema'
import { eq, and } from 'drizzle-orm'
import { encrypt } from '@/lib/encryption'

export async function GET(req: NextRequest) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.redirect(
        new URL('/login?error=unauthorized', req.url)
      )
    }

    // Get query parameters
    const searchParams = req.nextUrl.searchParams
    const code = searchParams.get('code')
    const state = searchParams.get('state')
    const error = searchParams.get('error')

    // Handle OAuth errors
    if (error) {
      console.error('OAuth error:', error)
      return NextResponse.redirect(
        new URL(`/dashboard?error=oauth_${error}`, req.url)
      )
    }

    // Validate required parameters
    if (!code) {
      return NextResponse.redirect(
        new URL('/dashboard?error=no_code', req.url)
      )
    }

    // CSRF Protection: Validate state parameter
    const savedState = req.cookies.get('oauth_state')?.value
    
    if (!savedState || savedState !== state) {
      console.error('State mismatch:', { savedState, receivedState: state })
      return NextResponse.redirect(
        new URL('/dashboard?error=invalid_state', req.url)
      )
    }

    // Exchange code for tokens
    const tokens = await getTokensFromCode(code)

    if (!tokens.access_token) {
      throw new Error('No access token received')
    }

    if (!tokens.refresh_token) {
      // This happens if user already connected before
      return NextResponse.redirect(
        new URL('/dashboard?error=no_refresh_token', req.url)
      )
    }

    // Get user info from Google
    const userInfo = await getUserInfo(tokens.access_token)

    if (!userInfo.verified_email) {
      return NextResponse.redirect(
        new URL('/dashboard?error=email_not_verified', req.url)
      )
    }

    // Get user's database ID
    const [user] = await db
      .select({ id: usersTable.id })
      .from(usersTable)
      .where(eq(usersTable.clerkId, userId))
      .limit(1)

    if (!user) {
      return NextResponse.redirect(
        new URL('/dashboard?error=user_not_found', req.url)
      )
    }

    // Check if account already connected
    const [existingAccount] = await db
      .select()
      .from(connectedAccountsTable)
      .where(
        and(
          eq(connectedAccountsTable.userId, user.id),
          eq(connectedAccountsTable.platform, 'gmail')
        )
      )
      .limit(1)

    const expiresAt = tokens.expiry_date 
      ? new Date(tokens.expiry_date)
      : new Date(Date.now() + 3600 * 1000) // 1 hour default

    const scopes = tokens.scope?.split(' ') || []

    if (existingAccount) {
      // Update existing connection
      await db
        .update(connectedAccountsTable)
        .set({
          accessToken: encrypt(tokens.access_token),
          refreshToken: tokens.refresh_token ? encrypt(tokens.refresh_token) : existingAccount.refreshToken,
          tokenExpiresAt: expiresAt,
          scopes: scopes,
          isActive: true,
          updatedAt: new Date(),
        })
        .where(eq(connectedAccountsTable.id, existingAccount.id))
    } else {
      // Create new connection
      await db.insert(connectedAccountsTable).values({
        userId: user.id,
        platform: 'gmail',
        accountEmail: userInfo.email,
        accountId: userInfo.id,
        accessToken: encrypt(tokens.access_token),
        refreshToken: encrypt(tokens.refresh_token),
        tokenExpiresAt: expiresAt,
        scopes: scopes,
        isActive: true,
      })
    }

    // Clear OAuth state cookie
    const response = NextResponse.redirect(
      new URL('/dashboard?connected=gmail', req.url)
    )
    
    response.cookies.delete('oauth_state')
    
    return response
  } catch (error) {
    console.error('Google OAuth callback error:', error)
    return NextResponse.redirect(
      new URL('/dashboard?error=auth_failed', req.url)
    )
  }
}