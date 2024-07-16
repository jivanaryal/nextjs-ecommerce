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
import Image from "next/image";

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
    <main className="mt-10 h-[80vh]">
      <section className=" bg-gray-100 text-black outline-none rounded-md w-10/12 mx-auto items-center  grid grid-cols-2 gap-10  ">
        <Image
          src={
            "https://plus.unsplash.com/premium_photo-1681487814165-018814e29155?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="jivan"
          width={0}
          height={0}
          sizes={"100vw"}
          className="w-full h-full object-cover  rounded-md"
        />
        <div className="">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
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
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
