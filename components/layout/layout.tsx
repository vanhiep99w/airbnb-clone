import { Nunito } from "next/font/google";
import { PropsWithChildren } from "react";
import Navbar from "@/components/navbar";
import { RegisterModal } from "@/components/modals";
import { ToasterProvider } from "../../providers";

const font = Nunito({
  subsets: ["latin"]
});

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className={font.className}>
      <ToasterProvider />
      <RegisterModal />
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
