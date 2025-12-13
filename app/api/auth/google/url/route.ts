import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { getAuthUrl } from '@/lib/google-oauth'
import crypto from 'crypto'

export async function GET() {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Generate CSRF token for security
    const state = crypto.randomBytes(32).toString('hex')
    
    // Store state in a cookie for validation (expires in 10 minutes)
    const response = NextResponse.json({
      url: getAuthUrl(state)
    })
    
    response.cookies.set('oauth_state', state, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 600, // 10 minutes
    })
    
    return response
  } catch (error) {
    console.error('Error generating OAuth URL:', error)
    return NextResponse.json(
      { error: 'Failed to generate OAuth URL' },
      { status: 500 }
    )
  }
}