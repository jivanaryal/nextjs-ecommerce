import { EInputType, TFormField } from "@/types/form-field";
import { z } from "zod";
export const signInFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Please enter a password" }),
});

export type TsignInFormSchema = z.infer<typeof signInFormSchema>; //form field ma

export const SignInFormDefaultValues: Partial<TsignInFormSchema> = {
  email: "",
  password: "",
};

export const signInFormField: TFormField<TsignInFormSchema>[] = [
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
];
