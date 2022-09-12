import React from "react";
import NextLink from "next/link";

import { ThemeToggler } from "../ThemeToggler";

const Navbar = () => {
  return (
    <div className="mb-8">
      <div className="flex flex-col items-center justify-between max-w-5xl mx-auto md:flex-row ">
        <h1 className="my-4 text-2xl font-bold text-center">
          <NextLink href="/">
            <a className="transition duration-200 ease-in-out hover:text-blue-500">
              FGO Noble Phantasm Damage Calculator
            </a>
          </NextLink>
        </h1>
        <ul className="flex flex-row items-center gap-4">
          <li>
            <NextLink href="/info">
              <a className="transition duration-200 ease-in-out hover:text-blue-500">
                Info
              </a>
            </NextLink>
          </li>
          <li className="flex items-center ">
            <ThemeToggler />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
