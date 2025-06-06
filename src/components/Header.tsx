import { Moon, Sun } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

export function Header({ isDarkTheme, toggleTheme }: HeaderProps) {
  return (
    <div
      className={`flex items-center justify-between whitespace-nowrap border-b border-solid px-10 py-3 ${
        isDarkTheme
          ? "text-white border-b-[#283039]"
          : "text-black border-b-gray-300"
      }`}
    >
      <div className={`flex items-center gap-4 `}>
        <h2 className="text-lg font-bold leading-tight tracking-tight">
          Daksh&#39;s Portfolio
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link
            className={`${
              isDarkTheme ? "hover:text-gray-300" : "hover:text-gray-700"
            } text-sm font-medium leading-normal transition-colors`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`${
              isDarkTheme ? "hover:text-gray-300" : "hover:text-gray-700"
            } text-sm font-medium leading-normal transition-colors`}
            href="/experience"
          >
            Experience
          </Link>
          <Link
            className={`${
              isDarkTheme ? "hover:text-gray-300" : "hover:text-gray-700"
            } text-sm font-medium leading-normal transition-colors`}
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className={`${
              isDarkTheme ? "hover:text-gray-300" : "hover:text-gray-700"
            } text-sm font-medium leading-normal transition-colors`}
            href="/contact"
          >
            Contact
          </Link>
          <button onClick={toggleTheme}>
            {isDarkTheme ? <Moon /> : <Sun />}
          </button>
        </div>
      </div>
    </div>
  );
}
