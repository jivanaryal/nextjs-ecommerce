"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { signIn } from "next-auth/react";

const FormSchema = z.object({
  email: z.string(),
  password: z.string(),
});

import { Input } from "@/components/ui/input";

type Props = {
  callbackUrl: string;
};

const LoginPage = (props: Props) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    await signIn("credentials", {
      redirect: true,
      email: data.email,
      password: data.password,
      callbackUrl: props.callbackUrl ?? "http://localhost:3000/customer/cart",
    });
    console.log(data);
  }

  return (
    <section className="container py-10 flex justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          action=""
          className="w-1/4 space-y-6 border-2 border-black p-4 rounded-xl"
        >
          <h2 className="text-center font-bold font-sans bg-blue-500 text-white rounded-md">
            SignIn Form
          </h2>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" variant={"default"}>
            Submit
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default LoginPage;
