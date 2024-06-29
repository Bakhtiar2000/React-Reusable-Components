import { z } from "zod";

export const SignUpValidation = z.object({
  name: z.string().nonempty("Name is required").min(3, "Too Short"),
  email: z.string().nonempty("Email is required").email("Invalid Email Format"),
  password: z.string().nonempty("Password is required").min(8, "Too Short"),
});

export type TNormalForm = z.infer<typeof SignUpValidation>;
