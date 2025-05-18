import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { env } from "@/env";
import { Resend } from "resend";
import { customSession, magicLink } from "better-auth/plugins";
import { db } from "../db";
import { schema, type UserRole } from "../db/schema";

const resend = new Resend(env.AUTH_RESEND_KEY);

export const auth = betterAuth({
  plugins: [
    magicLink({
      sendMagicLink: async ({ email, url }) => {
        await resend.emails.send({
          from: `Support <${env.EMAIL_FROM}>`,
          to: email,
          subject: "Sign in",
          react: `click here to sign in ${url}`,
        });
      },
    }),
    customSession(async ({ user, session }) => {
      const roles: UserRole[] = ["user"];
      return {
        user: {
          ...user,
          roles,
        },
        session,
      };
    }),
  ],
  socialProviders: {
    google: {
      clientId: env.AUTH_GOOGLE_ID,
      clientSecret: env.AUTH_GOOGLE_SECRET,
    },
  },
  emailAndPassword: {
    enabled: true,
  },

  database: drizzleAdapter(db, {
    provider: "pg",
    schema: schema,
  }),
});
