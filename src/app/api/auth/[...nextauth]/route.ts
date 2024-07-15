import NextAuth from "next-auth";
import { authOption } from "./auth-option";

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
