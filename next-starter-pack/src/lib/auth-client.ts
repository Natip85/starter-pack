import { createAuthClient } from "better-auth/react";
import {
  customSessionClient,
  magicLinkClient,
} from "better-auth/client/plugins";
import type { auth } from "@/server/auth/auth";
export const authClient = createAuthClient({
  baseURL: process.env.BASE_URL,
  plugins: [magicLinkClient(), customSessionClient<typeof auth>()],
});
