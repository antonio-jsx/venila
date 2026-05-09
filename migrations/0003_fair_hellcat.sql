ALTER TABLE "tickets" ADD COLUMN "setmax" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "tickets" ADD COLUMN "max" integer DEFAULT 0 NOT NULL;