import { useContext } from "react";
import Cn from "../../utils/Cn";
import Button from "../ui/Button";
import { FormElementContext } from "./Form";
import { TFormElementContext } from "../../types";

export const FormSubmit = () => {
  const { double } = useContext(FormElementContext) as TFormElementContext;
  return (
    <div
      className={Cn("grid grid-cols-1 justify-items-center gap-5 my-8", {
        "md:grid-cols-2 col-start-2": double,
      })}
    >
      <div className="w-full max-w-md col-start-1 md:col-start-2 flex justify-end">
        <Button className="w-full md:w-fit" type="submit">
          Submit
        </Button>
      </div>
    </div>
  );
};
