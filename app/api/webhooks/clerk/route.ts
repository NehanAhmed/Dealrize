import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { db } from "@/lib/db"; // Adjusted to your file structure
import { usersTable } from "@/lib/db/schema"; // Adjusted to your file structure
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  // 1. Get the secret from environment variables
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env",
    );
  }

  // 2. Get the headers
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // 3. Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // 4. Create a new Svix instance with your secret
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // 5. Verify the payload
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  // 6. Handle the event
  const eventType = evt.type;

  // A. USER CREATED
  if (eventType === "user.created") {
    const { id, email_addresses, first_name, last_name } = evt.data;

    if (!id || !email_addresses) {
      return new Response("Error occurred -- missing data", { status: 400 });
    }

    const userEmail = email_addresses[0]?.email_address;
    const userName = `${first_name || ""} ${last_name || ""}`.trim();

    try {
      // We use your 'usersTable' from schema.ts
      await db.insert(usersTable).values({
        clerkId: id,
        email: userEmail,
        name: userName || "Anonymous", // Fallback if name is missing
        plan_type: "free",
        
        // plan_type will default to null/database default since we aren't setting it here
      });

      console.log(`User created in DB: ${id}`);
    } catch (error) {
      // If user already exists (e.g. retry), we might want to update instead or ignore
      console.error("Error creating user in DB:", error);
      return new Response("Error creating user", { status: 500 });
    }
  }

  // B. USER UPDATED
  if (eventType === "user.updated") {
    const { id, email_addresses, first_name, last_name } = evt.data;

    if (!id) {
      return new Response("Error occurred -- missing data", { status: 400 });
    }

    const userEmail = email_addresses[0]?.email_address;
    const userName = `${first_name || ""} ${last_name || ""}`.trim();

    try {
      await db
        .update(usersTable)
        .set({
          email: userEmail,
          name: userName,
        })
        .where(eq(usersTable.clerkId, id)); // Targeting the clerkId column

      console.log(`User updated in DB: ${id}`);
    } catch (error) {
      console.error("Error updating user in DB:", error);
      return new Response("Error updating user", { status: 500 });
    }
  }

  // C. USER DELETED
  if (eventType === "user.deleted") {
    const { id } = evt.data;

    if (!id) {
      return new Response("Error occurred -- missing data", { status: 400 });
    }

    try {
      await db.delete(usersTable).where(eq(usersTable.clerkId, id));
      console.log(`User deleted from DB: ${id}`);
    } catch (error) {
      console.error("Error deleting user from DB:", error);
      return new Response("Error deleting user", { status: 500 });
    }
  }

  return new Response("Webhook received", { status: 200 });
}
