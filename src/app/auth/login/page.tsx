"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// import { signIn } from "next-auth/react";

import { Input } from "@/components/ui/input";
import {
  SignInFormDefaultValues,
  signInFormField,
  signInFormSchema,
  TsignInFormSchema,
} from "@/models/sign-in.model";
import { signIn } from "next-auth/react";

type Props = {
  callbackUrl: string;
};

const LoginPage = (props: Props) => {
  const form = useForm<TsignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: SignInFormDefaultValues,
  });

  async function onSubmit(values: TsignInFormSchema) {
    await signIn("credentials", {
      redirect: true,
      email: values.email,
      password: values.password,
      callbackUrl: props.callbackUrl ?? "http://localhost:3000/customer/cart",
    });
  }

  return (
    <section className="container py-10 flex justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {signInFormField.map((formfield) => (
            <FormField
              key={formfield.name}
              control={form.control}
              name={formfield.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{formfield.label}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={formfield.placeholder}
                      required={formfield.required}
                      name={formfield.name}
                    />
                  </FormControl>
                  <FormDescription>{formfield.description}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          ))}
          <Button type="submit">Login</Button>
        </form>
      </Form>
    </section>
  );
};

export default LoginPage;
