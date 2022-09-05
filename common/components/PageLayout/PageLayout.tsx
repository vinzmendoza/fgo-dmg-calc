import React from "react";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

type ComponentProps = {
  children: JSX.Element;
};

const PageLayout = ({ children }: ComponentProps) => {
  return (
    <div className="flex flex-col h-full max-w-5xl px-4 mx-auto">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
