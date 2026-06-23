// NEW IN PRISMA 7: this file tells the Prisma CLI (the `npx prisma ...`
// commands you run in the terminal) which database to connect to.
// It's separate from how your actual running app connects (that's in
// src/lib/prisma.ts) — this file is only used by CLI commands like
// `migrate dev`, `db seed`, and `studio`.
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
  // CLI commands (migrations especially) need the DIRECT connection,
  // not the pooled one — same reasoning as before, just moved here.
  datasource: {
    url: env("DIRECT_URL"),
  },
});
