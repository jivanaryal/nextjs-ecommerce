import { Metadata } from "next";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Sign Up | with my app",
  description: "this is the title ofor sign in ",
};

const SignupLayout = async ({ children }: Props) => {
  return <main>{children}</main>;
};

export default SignupLayout;
