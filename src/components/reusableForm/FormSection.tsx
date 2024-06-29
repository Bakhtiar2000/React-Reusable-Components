import { useContext } from "react";
import Cn from "../../utils/Cn";
import { FormElementContext } from "./Form";
import { TFormElementContext, TFormSection } from "../../types";

export const FormSection = ({ children }: TFormSection) => {
  const { double } = useContext(FormElementContext) as TFormElementContext;
  return (
    <div
      className={Cn("grid grid-cols-1 justify-items-center gap-5", {
        "md:grid-cols-2": double,
      })}
    >
      {children}
    </div>
  );
};
