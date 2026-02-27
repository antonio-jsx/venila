CREATE TABLE "mercadopago" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "mercadopago_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"public-key" text NOT NULL,
	"access-token" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "mercadopago_public-key_unique" UNIQUE("public-key"),
	CONSTRAINT "mercadopago_access-token_unique" UNIQUE("access-token")
);
