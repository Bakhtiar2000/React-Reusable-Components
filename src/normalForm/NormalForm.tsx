import { useForm } from "react-hook-form";
import Cn from "../utils/Cn";
import Button from "../components/ui/Button";

const NormalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const double = true;
  return (
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
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
          />
          {errors?.name && (
            <span className="text-xs text-red-500">Name is Required</span>
          )}
        </div>

        <div className="w-full max-w-md">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input type="text" id="email" {...register("email")} />
        </div>

        <div className="w-full max-w-md">
          <label className="block" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", { minLength: 8 })}
          />
          {errors?.password && (
            <span className="text-xs text-red-500">Password is Required</span>
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
  );
};

export default NormalForm;
