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
import {} from "@/models/sign-in.model";
import { signIn } from "next-auth/react";
import {
  SignUpFormDefaultValues,
  signUpFormField,
  signUpFormSchema,
  TsignUpFormSchema,
} from "@/models/sign-up.models";
import Image from "next/image";

type Props = {
  callbackUrl: string;
};

const SignupPage = (props: Props) => {
  const form = useForm<TsignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: SignUpFormDefaultValues,
  });

  async function onSubmit(values: TsignUpFormSchema) {
    console.log(values);
  }

  return (
    <main className="mt-10 h-screen">
      <section className=" bg-gray-100 text-black outline-none rounded-md w-10/12 mx-auto  grid grid-cols-2 gap-10  ">
        <Image
          src={
            "https://images.unsplash.com/photo-1556741533-411cf82e4e2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="jivan"
          width={0}
          height={0}
          sizes={"100vw"}
          className="w-full h-full object-cover  rounded-md"
        />
        <div className="p-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {signUpFormField.map((formfield) => (
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
                          type={formfield.type}
                        />
                      </FormControl>
                      <FormDescription>{formfield.description}</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
              ))}
              <Button type="submit">Signup</Button>
            </form>
          </Form>
        </div>
      </section>
    </main>
  );
};

export default SignupPage;
