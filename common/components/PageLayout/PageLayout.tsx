import Head from "next/head";
import React from "react";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

type ComponentProps = {
  children: JSX.Element;
  title: string;
};

const PageLayout = ({ children, title }: ComponentProps) => {
  const pageTitle = title + " - FGO NP Damage Calculator";
  return (
    <div className="flex flex-col h-full max-w-5xl px-4 mx-auto">
      <Head>
        <title>{pageTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
