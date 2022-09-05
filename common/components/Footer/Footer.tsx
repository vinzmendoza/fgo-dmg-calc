import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-1 pb-8 mt-24 md:gap-0">
      <p className="text-center">
        Made by{" "}
        <a
          href="https://github.com/vinzmendoza"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          Vinz
        </a>{" "}
        <span className="text-neutral-600">&#40;Vinz#0775&#x29;</span>
      </p>
      <p className="text-center">
        Data sourced from{" "}
        <a
          href="https://apps.atlasacademy.io/db/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          Atlas Academy
        </a>
      </p>
      <p className="text-center">
        Damage calculations courtesy of{" "}
        <a
          href="https://www.npmjs.com/package/fgo-calc"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          fgo-calc
        </a>
      </p>
      <p className="text-center">
        Work inspired by{" "}
        <a
          href="https://maketakunai.github.io/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          maketakunai
        </a>
        &nbsp;&amp;&nbsp;
        <a
          href="https://keinoda.github.io/fgocalc/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          keinoda
        </a>
      </p>
    </div>
  );
};

export default Footer;
