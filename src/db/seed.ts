import { reset, seed } from "drizzle-seed";
import { db } from "./client";
import { schema } from "./schema";

await reset(db, { schema });
await seed(db, { schema });
