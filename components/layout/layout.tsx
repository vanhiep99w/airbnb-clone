import { Nunito } from "next/font/google";
import { PropsWithChildren, ReactElement } from "react";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone"
};

const font = Nunito({
  subsets: ["latin"]
});

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className={font.className}>
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
