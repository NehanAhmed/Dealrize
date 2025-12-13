// lib/error-messages.ts
export const OAUTH_ERROR_MESSAGES = {
  // OAuth flow errors
  'oauth_access_denied': 'You cancelled the Gmail connection',
  'oauth_server_error': 'Google experienced an error',
  'no_code': 'Authorization code missing',
  'invalid_state': 'Security check failed. Please try again',
  'no_refresh_token': 'Connection incomplete. Please disconnect and try again',
  
  // API errors
  'email_not_verified': 'Please verify your Gmail account',
  'user_not_found': 'User account not found',
  'auth_failed': 'Gmail connection failed',
  'connection_exists': 'Gmail already connected',
  
  // Generic
  'unknown': 'Something went wrong. Please try again',
} as const

export function getErrorMessage(error: string): string {
  return OAUTH_ERROR_MESSAGES[error as keyof typeof OAUTH_ERROR_MESSAGES] || OAUTH_ERROR_MESSAGES.unknown
}