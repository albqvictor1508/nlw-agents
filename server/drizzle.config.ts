import { defineConfig } from "drizzle-kit";
import { env } from "./src/common/env";

export default defineConfig({
  schema: "./src/db/schema/**.ts",
  out: "./src/db/migrations",
  dialect: "postgresql",
  casing: "snake_case",
  dbCredentials: {
    url: env.DATABASE_URL
  }
})
