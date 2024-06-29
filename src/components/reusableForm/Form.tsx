import { createContext } from "react";
import Cn from "../../utils/Cn";
import { TForm } from "../../types";

export const FormElementContext = createContext<{ double: boolean } | null>(
  null
);
export const Form = ({ children, onSubmit, double = false }: TForm) => {
  // Default double is false
  return (
    <FormElementContext.Provider value={{ double }}>
      <form
        className={Cn("mt-10 max-w-lg mx-auto p-5 border border-red-500", {
          "max-w-5xl": double,
          "max-w-md": !double,
        })}
        onSubmit={onSubmit}
      >
        {children}
      </form>
    </FormElementContext.Provider>
  );
};
