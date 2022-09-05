import React from "react";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <div className="mb-8">
      <div className="flex flex-col items-center justify-between max-w-5xl mx-auto md:flex-row ">
        <h1 className="my-4 text-2xl font-bold text-center">
          <NextLink href="/">
            <a> FGO Noble Phantasm Damage Calculator</a>
          </NextLink>
        </h1>
        <ul className="flex flex-row gap-4">
          <li>
            <NextLink href="/">
              <a>Home</a>
            </NextLink>
          </li>
          <li>
            <NextLink href="/notes">
              <a>Notes</a>
            </NextLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
