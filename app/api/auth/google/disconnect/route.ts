import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { usersTable, connectedAccountsTable } from '@/lib/db/schema'
import { eq, and } from 'drizzle-orm'
import { decrypt } from '@/lib/encryption'
import { revokeToken } from '@/lib/google-oauth'

export async function POST() {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Get user's database ID
    const [user] = await db
      .select({ id: usersTable.id })
      .from(usersTable)
      .where(eq(usersTable.clerkId, userId))
      .limit(1)

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    // Get connection to revoke token
    const [connection] = await db
      .select()
      .from(connectedAccountsTable)
      .where(
        and(
          eq(connectedAccountsTable.userId, user.id),
          eq(connectedAccountsTable.platform, 'gmail')
        )
      )
      .limit(1)

    if (!connection) {
      return NextResponse.json(
        { error: 'No connection found' },
        { status: 404 }
      )
    }

    // Revoke token with Google
    try {
      const accessToken = decrypt(connection.accessToken)
      await revokeToken(accessToken)
    } catch (error) {
      console.error('Failed to revoke token:', error)
      // Continue anyway to delete from database
    }

    // Delete connection from database
    await db
      .delete(connectedAccountsTable)
      .where(eq(connectedAccountsTable.id, connection.id))

    return NextResponse.json({
      success: true,
      message: 'Gmail disconnected successfully',
    })
  } catch (error) {
    console.error('Error disconnecting Gmail:', error)
    return NextResponse.json(
      { error: 'Failed to disconnect Gmail' },
      { status: 500 }
    )
  }
}