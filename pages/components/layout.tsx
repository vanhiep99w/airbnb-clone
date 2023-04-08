import { Nunito } from "next/font/google";
import { PropsWithChildren, ReactElement } from "react";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone"
};

const font = Nunito({
  subsets: ["latin"]
});

const Layout = ({ children }: PropsWithChildren) => {
  return <main className={font.className}>{children}</main>;
};

export default Layout;
