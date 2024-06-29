import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export type TRef = HTMLButtonElement;
export type TVariant = "solid" | "ghost" | "outline";
export type TButtonOptions = {
  variant?: TVariant;
};
export type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TButtonOptions;
