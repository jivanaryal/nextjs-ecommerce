import { EInputType, TFormField } from "@/types/form-field";
import { z } from "zod";
export const signUpFormSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: "Username must be at least 3 characters" }),
    email: z.string().email({ message: "enter the valid email address" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "password does not match",
  });

export type TsignUpFormSchema = z.infer<typeof signUpFormSchema>; //form field ma

export const SignUpFormDefaultValues: Partial<TsignUpFormSchema> = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const signUpFormField: TFormField<TsignUpFormSchema>[] = [
  {
    label: "User Name",
    name: "username",
    placeholder: "Eg. jivan",
    type: EInputType.TEXT,
    required: true,
    description: "this is the email field",
  },
  {
    label: "Email",
    name: "email",
    placeholder: "Eg. jhondoe@gmail.com",
    type: EInputType.EMAIL,
    required: true,
    description: "this is the email field",
  },

  {
    label: "Password",
    name: "password",
    placeholder: "****",
    type: EInputType.PASSWORD,
    required: true,
    description: "this is the password field",
  },
  {
    label: "Confirm Password",
    name: "confirmPassword",
    placeholder: "****",
    type: EInputType.PASSWORD,
    required: true,
    description: "this is the confirm-password field",
  },
];
