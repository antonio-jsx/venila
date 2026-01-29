ALTER TABLE "events" ALTER COLUMN "address" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "events" ADD COLUMN "startTime" time NOT NULL;--> statement-breakpoint
ALTER TABLE "events" ADD COLUMN "endTime" time NOT NULL;--> statement-breakpoint
ALTER TABLE "events" ADD COLUMN "tickets" jsonb;