import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const ThemeToggler = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  //Check if component is mounted to prevent server mismatach
  if (!mounted)
    return (
      <button
        aria-label="theme-toggler"
        type="button"
        onClick={handleToggleTheme}
        className="flex items-center w-[36px] h-[36px] p-2 border rounded hover:bg-zinc-200 dark:hover:bg-zinc-800 transition ease-in-out duration-200"
      ></button>
    );

  return (
    <button
      aria-label="theme-toggler"
      type="button"
      onClick={handleToggleTheme}
      className="flex items-center p-2 transition duration-200 ease-in-out border rounded border-zinc-600 hover:bg-zinc-900 hover:text-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-zinc-900"
    >
      {resolvedTheme === "dark" ? (
        <SunIcon height={18} width={18} />
      ) : (
        <MoonIcon height={18} width={18} />
      )}
    </button>
  );
};

export default ThemeToggler;
