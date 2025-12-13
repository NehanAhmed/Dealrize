import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { usersTable, connectedAccountsTable } from '@/lib/db/schema'
import { eq, and } from 'drizzle-orm'

export async function GET() {
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

    // Check Gmail connection
    const [gmailConnection] = await db
      .select({
        id: connectedAccountsTable.id,
        accountEmail: connectedAccountsTable.accountEmail,
        isActive: connectedAccountsTable.isActive,
        createdAt: connectedAccountsTable.createdAt,
        lastSyncAt: connectedAccountsTable.lastSyncAt,
      })
      .from(connectedAccountsTable)
      .where(
        and(
          eq(connectedAccountsTable.userId, user.id),
          eq(connectedAccountsTable.platform, 'gmail'),
          eq(connectedAccountsTable.isActive, true)
        )
      )
      .limit(1)

    return NextResponse.json({
      connected: !!gmailConnection,
      account: gmailConnection || null,
    })
  } catch (error) {
    console.error('Error checking connection status:', error)
    return NextResponse.json(
      { error: 'Failed to check connection status' },
      { status: 500 }
    )
  }
}