import { cleanEnv, str, url } from "envalid";

export const env = cleanEnv(process.env, {
  PORT: str(),
  POSTGRES_USER: str(),
  POSTGRES_PASSWORD: str(),
  DATABASE_URL: url({ example: "postgresql://" }),
})
