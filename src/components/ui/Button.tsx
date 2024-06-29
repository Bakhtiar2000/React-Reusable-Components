import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import Cn from "../../utils/Cn";

type TRef = HTMLButtonElement;
type TVariant = "solid" | "ghost" | "outline";
type TButtonOptions = {
  variant?: TVariant;
};
type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TButtonOptions;

const Button = forwardRef<TRef, TButton>(
  ({ className, variant = "solid", children, ...rest }, ref) => {
    // Default variant is solid
    const getVariant = (variant: TVariant) => {
      switch (variant) {
        case "outline":
          return "btn-outline";
        case "ghost":
          return "btn-ghost";
        default:
          return "btn-solid";
      }
    };
    return (
      <button
        {...rest}
        ref={ref}
        className={Cn(getVariant(variant as TVariant), className)}
      >
        {children}
      </button>
    );
  }
);

export default Button;

/*
`bg-red-500 px-3 py-2 rounded-md ${className} ${
    variant === "outline"
      ? "border border-purple-500 bg-opacity-10 hover:bg-purple-500 hover:text-white duration-300"
      : ""
  }`
*/
