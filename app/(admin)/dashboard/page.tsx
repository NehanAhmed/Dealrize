import { auth, currentUser } from "@clerk/nextjs/server"
import OnboardingPage from "./_components/Onboarding"
import { redirect } from "next/navigation"
import { db } from "@/lib/db"
import { usersTable } from "@/lib/db/schema"
import { eq } from "drizzle-orm"
import { Sparkles, Clock } from "lucide-react"

export default async function Page() {
  const { userId } = await auth()

  if (!userId) {
    redirect('/login')
  }

  // Get current user for first name
  const clerkUser = await currentUser()
  const firstName = clerkUser?.firstName || "there"

  // Check if user exists in database
  let [user] = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.clerkId, userId))
    .limit(1)

  // Get current time for greeting
  const currentHour = new Date().getHours()
  let greeting = "Good evening"
  if (currentHour < 12) greeting = "Good morning"
  else if (currentHour < 18) greeting = "Good afternoon"

  return (
    <main className="w-full min-h-screen flex flex-col gap-8 font-hanken">
      {/* Enhanced Header */}
      <div className="relative w-full rounded-2xl overflow-hidden p-[1px] shadow-sm">
        <div className="w-full h-full rounded-2xl bg-card border border-border p-8 lg:p-10">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64  rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48  rounded-full blur-3xl -ml-24 -mb-24"></div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-neutral-500 animate-pulse" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                {greeting}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-extrabold font-hanken ">
              Welcome back, {firstName}
            </h1>
            
            <p className="text-gray-600 dark:text-gray-400 text-base lg:text-lg font-hanken mt-1">
              {!user.completed_setup 
                ? "Let's get you set up and ready to go! 🚀" 
                : "Ready to continue your journey?"}
            </p>

            {/* Time Display */}
            <div className="flex items-center gap-2 mt-2">
              <Clock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Onboarding Section */}
      {!user.completed_setup && (
        <div className="w-full animate-fadeIn">
          <OnboardingPage />
        </div>
      )}
    </main>
  )
}