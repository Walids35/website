"use client";
import { useDarkMode } from "@/hooks/useDarkMode";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  const buttonStyle = "hover:text-white duration-300 transition-all";
  const [theme, toggleTheme] = useDarkMode() as [string, () => void];

  return (
    <div className="w-full text-gray-400 sticky top-0 z-50 bg-background/75 py-8 backdrop-blur-sm">
      <div className="flex items-center justify-between">
      <div className="flex gap-4 sm:gap-8">
        <Link className={buttonStyle} href={"/"}>
          home
        </Link>
        <Link className={buttonStyle} href={"/projects"}>
          projects
        </Link>
        <Link className={buttonStyle} href={"/blog"}>
          blog
        </Link>
        <Link className={buttonStyle} href={"/contact"}>
          contact
        </Link>
      </div>
      <div>
        {theme === "dark" ? (
          <Sun onClick={toggleTheme} className="text-yellow-500 hover:cursor-pointer opacity-50" size={18} />
        ) : (
          <Moon onClick={toggleTheme} size={24} className="text-blue-400 hover:cursor-pointer opacity-50" />
        )}
      </div>
      </div>
    </div>
  );
};

export default NavBar;
