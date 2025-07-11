import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js"
import { schema } from "./schema/index.ts"
import { env } from "../common/env.ts";

const pg = postgres(env.DATABASE_URL);

export const db = drizzle(pg, {
  schema,
  casing: "snake_case"
});

