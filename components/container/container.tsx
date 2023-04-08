import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

const Container = ({ children }: Props) => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2">
      {children}
    </div>
  );
};

export default Container;
