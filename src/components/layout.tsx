import Footer from "@/components/footer";
import React from "react";
import { CybriaNavBanner } from "./CybriaChain";
import { Navbar } from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

// const PurpleToBlackGradient =
//   "text-transparent bg-clip-text bg-gradient-to-b from-[#5C1D70] to-[#2F073C]";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div id="mylayout" className="w-full h-full">
      <Navbar />
      <CybriaNavBanner />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
