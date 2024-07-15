import { Awaitable, NextAuthOptions, RequestInternal, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      // id:'1',
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "Enter your email",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const user = [
          {
            id: "1",
            email: "jivan@gmail.com",
            password: "123456",
          },
        ];

        const foundUser = user.find(
          (user) => user.email === credentials?.email
        );

        if (!foundUser) return null;

        const isPasswordMatch = foundUser.password === credentials?.password;

        if (!isPasswordMatch) return null;

        return foundUser;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};
