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

import { signIn } from "next-auth/react";

import { Input } from "@/components/ui/input";
import {
  signInFormField,
  signInFormSchema,
  TsignInFormSchema,
} from "@/models/sign-in.model";

type Props = {
  callbackUrl: string;
};

const LoginPage = (props: Props) => {
  const form = useForm<TsignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: TsignInFormSchema) {
    console.log(values);
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
                      placeholder={formfield.placeholder}
                      required={formfield.required}
                      name={formfield.name}
                    />
                  </FormControl>
                  <FormDescription>{formfield.description}</FormDescription>
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
