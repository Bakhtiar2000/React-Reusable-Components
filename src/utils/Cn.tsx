import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge"; // used for conflicted className issues

const Cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export default Cn;
