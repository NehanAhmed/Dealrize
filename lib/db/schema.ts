import {
  boolean,
  integer,
  jsonb,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const planType = pgEnum("plan_type", ["free", "pro"]);
export const platformEnum = pgEnum('platform', ['gmail', 'youtube']);

export const usersTable = pgTable("users_table", {
  id: serial("id").primaryKey(),
  // ADD THIS: The immutable ID from Clerk
  clerkId: text("clerk_id").notNull().unique(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  plan_type: planType(),
  completed_setup: boolean().default(false).notNull(),




  // Good practice to have timestamps
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").$onUpdate(() => new Date()),
});

export const connectedAccountsTable = pgTable('connected_accounts_table', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),

  platform: platformEnum('platform').notNull(),
  accountEmail: text('account_email').notNull(),
  accountId: text('account_id').notNull(), // Google account ID (sub claim)

  // OAuth tokens (encrypted)
  accessToken: text('access_token').notNull(),
  refreshToken: text('refresh_token'),
  tokenExpiresAt: timestamp('token_expires_at'),

  // Scope tracking
  scopes: jsonb('scopes').$type<string[]>(), // Array of granted scopes

  // Status
  isActive: boolean('is_active').default(true).notNull(),
  lastSyncAt: timestamp('last_sync_at'),

  // Metadata
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').$onUpdate(() => new Date()),
});
export type InsertConnectedAccount = typeof connectedAccountsTable.$inferInsert;
export type SelectConnectedAccount = typeof connectedAccountsTable.$inferSelect;

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;
