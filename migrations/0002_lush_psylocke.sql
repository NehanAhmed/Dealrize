CREATE TABLE "connected_accounts_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"platform" "platform" NOT NULL,
	"account_email" text NOT NULL,
	"account_id" text NOT NULL,
	"access_token" text NOT NULL,
	"refresh_token" text,
	"token_expires_at" timestamp,
	"scopes" jsonb,
	"is_active" boolean DEFAULT true NOT NULL,
	"last_sync_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp
);
--> statement-breakpoint
ALTER TABLE "connected_accounts_table" ADD CONSTRAINT "connected_accounts_table_user_id_users_table_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users_table"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "users_table" DROP COLUMN "platform";--> statement-breakpoint
ALTER TABLE "users_table" DROP COLUMN "account_email";--> statement-breakpoint
ALTER TABLE "users_table" DROP COLUMN "account_id";--> statement-breakpoint
ALTER TABLE "users_table" DROP COLUMN "access_token";--> statement-breakpoint
ALTER TABLE "users_table" DROP COLUMN "refresh_token";--> statement-breakpoint
ALTER TABLE "users_table" DROP COLUMN "token_expires_at";--> statement-breakpoint
ALTER TABLE "users_table" DROP COLUMN "scopes";--> statement-breakpoint
ALTER TABLE "users_table" DROP COLUMN "is_active";--> statement-breakpoint
ALTER TABLE "users_table" DROP COLUMN "last_sync_at";