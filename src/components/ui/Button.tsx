import Cn from "../../utils/Cn";

const Button = ({ className, variant, outline }) => {
  return (
    <button
      className={Cn(
        "bg-red-500 px-3 py-2 rounded-md",
        {
          "border border-purple-500 bg-opacity-10 hover:bg-purple-500 hover:text-white duration-300":
            outline,
        },
        className
      )}
    >
      Click
    </button>
  );
};

export default Button;

/*
`bg-red-500 px-3 py-2 rounded-md ${className} ${
    variant === "outline"
      ? "border border-purple-500 bg-opacity-10 hover:bg-purple-500 hover:text-white duration-300"
      : ""
  }`
*/
