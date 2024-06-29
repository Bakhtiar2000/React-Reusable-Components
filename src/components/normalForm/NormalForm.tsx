import { FieldValues, FormProvider, useForm } from "react-hook-form";
import Cn from "../../utils/Cn";
import Button from "../ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpValidation, TNormalForm } from "./Validation";

const NormalForm = () => {
  const methods = useForm<TNormalForm>({
    // defaultValues: { name: "Fahim", email: "fahim@gmail.com" },
    resolver: zodResolver(SignUpValidation), // For validation
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods; // methods of useForm, combined in a variable to use inside the FormProvider
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  const double = true;
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={Cn("mt-10 max-w-lg mx-auto p-5 border border-red-500", {
          "max-w-5xl": double,
          "max-w-md": !double,
        })}
      >
        <div
          className={Cn("grid grid-cols-1 justify-items-center gap-5", {
            "md:grid-cols-2": double,
          })}
        >
          <div className="w-full max-w-md">
            <label className="block" htmlFor="name">
              Name
            </label>
            <input type="text" id="name" {...register("name")} />
            {errors?.name && (
              <span className="text-xs text-red-500">
                {errors?.name?.message}
              </span>
            )}
          </div>

          <div className="w-full max-w-md">
            <label className="block" htmlFor="email">
              Email
            </label>
            <input type="text" id="email" {...register("email")} />
            {errors?.email && (
              <span className="text-xs text-red-500">
                {errors?.email?.message}
              </span>
            )}
          </div>

          <div className="w-full max-w-md">
            <label className="block" htmlFor="password">
              Password
            </label>
            <input type="password" id="password" {...register("password")} />
            {errors?.password && (
              <span className="text-xs text-red-500">
                {errors?.password?.message}
              </span>
            )}
          </div>

          {/* <div className="w-full max-w-md">
          <label className="block" htmlFor="select">
            Select
          </label>
          <select {...register("select")} id="select">
            <option value="1">one</option>
            <option value="2">two</option>
            <option value="3">three</option>
            <option value="4">four</option>
          </select>
        </div>

        <div className="w-full max-w-md">
          <label className="block" htmlFor="textarea">
            Textarea
          </label>
          <textarea {...register("textarea")} id="textarea"></textarea>
        </div>

        <div className="w-full max-w-md">
          <label className="block" htmlFor="check">
            Check
          </label>
          <input {...register("check")} type="checkbox" id="check" />
        </div> */}
        </div>

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
      </form>
    </FormProvider>
  );
};

export default NormalForm;
