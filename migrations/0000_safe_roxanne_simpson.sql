CREATE TYPE "public"."mood" AS ENUM('free', 'pro');--> statement-breakpoint
CREATE TABLE "users_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"plan_type" "mood",
	CONSTRAINT "users_table_email_unique" UNIQUE("email")
);
