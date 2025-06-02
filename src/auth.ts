import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { usersTable} from "@/db/schema"
import {db} from "@/db/index"

export const { handlers, auth } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: usersTable,
  }),
  providers: [GitHub],
})