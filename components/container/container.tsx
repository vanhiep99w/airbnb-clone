import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

const Container = ({ children }: Props) => {
  return (
    <div className="mx-auto max-w-[2520px] sm:px-2 md:px-10 xl:px-20">
      {children}
    </div>
  );
};

export default Container;
