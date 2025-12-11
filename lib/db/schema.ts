import { integer, pgEnum, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const planType = pgEnum('mood', ['free', 'pro']);

export const usersTable = pgTable('users_table', {
    id: serial('id').primaryKey(),
    // ADD THIS: The immutable ID from Clerk
    clerkId: text('clerk_id').notNull().unique(), 
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    plan_type: planType(),
    // Good practice to have timestamps
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').$onUpdate(() => new Date()),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;