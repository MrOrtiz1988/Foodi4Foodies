
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "places" (
	"id" SERIAL PRIMARY KEY,
	"place_id" VARCHAR(1000),
	"name" VARCHAR(80),
	"image" VARCHAR(1000),
	"address" VARCHAR(250),
	"rating" DECIMAL,
	"phone" VARCHAR(80),
	"url" VARCHAR(1000),
	"is_favorite" BOOLEAN DEFAULT false,
	"user_id" INT REFERENCES "user" NOT NULL
);