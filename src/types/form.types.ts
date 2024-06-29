import { ReactNode } from "react";
import {
  FieldErrors,
  FieldValues,
  SubmitHandler,
  UseFormRegister,
} from "react-hook-form";

export type TForm = {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  double?: boolean;
};

export type TFormSection = {
  children?: ReactNode;
};

export type TFormElementContext = {
  double: boolean;
};

export type TFormInput = {
  label: string;
  register: ReturnType<UseFormRegister<FieldValues>>;
  errors: FieldErrors;
  type: string;
};
