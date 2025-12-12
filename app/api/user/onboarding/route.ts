import { db } from "@/lib/db";
import { usersTable } from "@/lib/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        const { isAuthenticated, userId} = await auth()
        if (!isAuthenticated) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
        }

        const [user] = await db
            .select()
            .from(usersTable)
            .where(eq(usersTable.clerkId, userId)) // Fixed: Use clerkId instead of id
            .limit(1) // Good practice: add limit

        if (!user) {
            return NextResponse.json({ message: 'No User Found', data: null }, { status: 404 })
        }

        return NextResponse.json({ message: 'Successfully user Found', data: user }, { status: 200 })
    } catch (error) {
        console.error('GET /api/user error:', error) // Add logging
        return NextResponse.json({
            message: 'Something Error Occured',
            data: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 500 })
    }
}

export async function POST(req: NextRequest) {
    try {
        const { isAuthenticated, userId} = await auth()
        if (!isAuthenticated) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
        }

        const { completed_setup_state } = await req.json()

        // Validate input
        if (typeof completed_setup_state !== 'boolean') {
            return NextResponse.json({
                message: 'Invalid input: completed_setup_state must be boolean'
            }, { status: 400 })
        }

        const [updatedUser] = await db
            .update(usersTable)
            .set({
                completed_setup: completed_setup_state, // Fixed: Use camelCase
                updatedAt: new Date() // Update timestamp
            })
            .where(eq(usersTable.clerkId, userId)) // Fixed: Use clerkId
            .returning() // Return updated row

        if (!updatedUser) {
            return NextResponse.json({
                message: 'User not found or update failed',
                data: null
            }, { status: 404 })
        }

        return NextResponse.json({
            message: 'Success',
            data: updatedUser
        }, { status: 200 })
    } catch (error) {
        console.error('POST /api/user error:', error) // Add logging
        return NextResponse.json({
            message: 'Something Error Occured',
            data: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 500 })
    }
}