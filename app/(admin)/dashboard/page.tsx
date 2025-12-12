import { auth, currentUser } from "@clerk/nextjs/server"
import OnboardingPage from "./_components/Onboarding"
import { redirect } from "next/navigation"
import { db } from "@/lib/db"
import { usersTable } from "@/lib/db/schema"
import { eq } from "drizzle-orm"
import { use } from "react"

export default async function Page() {
  const { userId } = await auth()

  if (!userId) {
    redirect('/login')
  }

  // Check if user exists in database
  let [user] = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.clerkId, userId))
    .limit(1)




  return (
    <main>
      {!user.completed_setup ? (
        <OnboardingPage />
      ) : (
        
      <h1>Hello World</h1>
      )}
    </main>
  )
}
