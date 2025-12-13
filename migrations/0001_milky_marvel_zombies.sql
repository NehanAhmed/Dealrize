CREATE TYPE "public"."platform" AS ENUM('gmail', 'youtube');--> statement-breakpoint
ALTER TYPE "public"."mood" RENAME TO "plan_type";--> statement-breakpoint
ALTER TABLE "users_table" ADD COLUMN "clerk_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "users_table" ADD COLUMN "completed_setup" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "users_table" ADD COLUMN "platform" "platform" NOT NULL;--> statement-breakpoint
ALTER TABLE "users_table" ADD COLUMN "account_email" text NOT NULL;--> statement-breakpoint
ALTER TABLE "users_table" ADD COLUMN "account_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "users_table" ADD COLUMN "access_token" text NOT NULL;--> statement-breakpoint
ALTER TABLE "users_table" ADD COLUMN "refresh_token" text;--> statement-breakpoint
ALTER TABLE "users_table" ADD COLUMN "token_expires_at" timestamp;--> statement-breakpoint
ALTER TABLE "users_table" ADD COLUMN "scopes" jsonb;--> statement-breakpoint
ALTER TABLE "users_table" ADD COLUMN "is_active" boolean DEFAULT true NOT NULL;--> statement-breakpoint
ALTER TABLE "users_table" ADD COLUMN "last_sync_at" timestamp;--> statement-breakpoint
ALTER TABLE "users_table" ADD COLUMN "created_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "users_table" ADD COLUMN "updated_at" timestamp;--> statement-breakpoint
ALTER TABLE "users_table" ADD CONSTRAINT "users_table_clerk_id_unique" UNIQUE("clerk_id");