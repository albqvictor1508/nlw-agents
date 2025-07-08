import postgres from "postgres";
import { env } from "../src/common/env";

const client = postgres(env.DATABASE_URL);
