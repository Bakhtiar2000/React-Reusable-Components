import { useContext } from "react";
import Cn from "../../utils/Cn";
import { FormElementContext } from "./Form";

export const FormSection = ({ children }) => {
  const { double } = useContext(FormElementContext);
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
