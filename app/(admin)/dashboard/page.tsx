import { auth, currentUser } from "@clerk/nextjs/server";
import OnboardingPage from "./_components/Onboarding";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { usersTable } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { Sparkles, Clock } from "lucide-react";
import GmailConnectionCard from "@/components/gmailConnectionCard";

export default async function Page() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  // Get current user for first name
  const clerkUser = await currentUser();
  if (!clerkUser) redirect('/login')
  const firstName = clerkUser?.firstName || "there";

  // Check if user exists in database
  let [user] = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.clerkId, userId))
    .limit(1);
  const completedSetup = user?.completed_setup ?? false;
  // Get current time for greeting
  const currentHour = new Date().getHours();
  let greeting = "Good evening";
  if (currentHour < 12) greeting = "Good morning";
  else if (currentHour < 18) greeting = "Good afternoon";

  return (
    <main className="font-hanken flex min-h-screen w-full flex-col gap-8">
      {/* Enhanced Header */}
      <div className="relative w-full overflow-hidden rounded-2xl p-[1px] shadow-sm">
        <div className="bg-card border-border h-full w-full rounded-2xl border p-8 lg:p-10">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 -mt-32 -mr-32 h-64 w-64 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-24 -ml-24 h-48 w-48 rounded-full blur-3xl"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 animate-pulse text-neutral-500" />
              <span className="text-sm font-medium tracking-wider text-gray-600 uppercase dark:text-gray-400">
                {greeting}
              </span>
            </div>

            <h1 className="font-hanken text-4xl font-extrabold lg:text-5xl">
              Welcome back, {firstName}
            </h1>

            <p className="font-hanken mt-1 text-base text-gray-600 lg:text-lg dark:text-gray-400">
              {!completedSetup
                ? "Let's get you set up and ready to go! 🚀"
                : "Ready to continue your journey?"}
            </p>

            {/* Time Display */}
            <div className="mt-2 flex items-center gap-2">
              <Clock className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Onboarding Section */}
      {!completedSetup && (
        <div className="animate-fadeIn w-full">
          <OnboardingPage />
        </div>
      )}
      
    </main>
  );
}




