import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  /* bg-primary-gradient */
  return <div className="h-full w-full max-w-7xl mx-auto">{children}</div>;
};

export default Container;
