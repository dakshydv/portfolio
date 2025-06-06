import { Github, Linkedin, Mail, Moon, Sun, Twitter } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

export function Header({ isDarkTheme, toggleTheme }: HeaderProps) {
  return (
    <div
      className={`flex items-center justify-between whitespace-nowrap border-b border-solid px-4 sm:px-10 py-5 ${
        isDarkTheme
          ? "text-white border-b-[#283039]"
          : "text-black border-b-gray-300"
      }`}
    >
      <div
        className={`flex items-center gap-4 w-full sm:w-auto px-3`}
      >
        <h2 className="text-lg font-bold leading-tight tracking-tight">
          Daksh&#39;s Portfolio
        </h2>
      </div>
      <div className="flex sm:hidden">
        <button onClick={toggleTheme}>
          {isDarkTheme ? <Moon /> : <Sun />}
        </button>
      </div>
      <div className="hidden sm:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link
            className={`${
              isDarkTheme ? "hover:text-gray-300" : "hover:text-gray-700"
            } text-sm font-medium leading-normal transition-colors`}
            href="https://github.com/dakshydv"
            target="_blank"
          >
            <Github />
          </Link>
          <Link
            className={`${
              isDarkTheme ? "hover:text-gray-300" : "hover:text-gray-700"
            } text-sm font-medium leading-normal transition-colors`}
            href="https://www.linkedin.com/in/daksh-dev/"
            target="_blank"
          >
            <Linkedin />
          </Link>
          <Link
            className={`${
              isDarkTheme ? "hover:text-gray-300" : "hover:text-gray-700"
            } text-sm font-medium leading-normal transition-colors`}
            href="https://x.com/dakshydv_"
            target="_blank"
          >
            <Twitter />
          </Link>
          <Link
            className={`${
              isDarkTheme ? "hover:text-gray-300" : "hover:text-gray-700"
            } text-sm font-medium leading-normal transition-colors`}
            href="mailto:dakshyadav.dev@gmail.com"
            target="_blank"
          >
            <Mail />
          </Link>
          <button onClick={toggleTheme}>
            {isDarkTheme ? <Moon /> : <Sun />}
          </button>
        </div>
      </div>
    </div>
  );
}
