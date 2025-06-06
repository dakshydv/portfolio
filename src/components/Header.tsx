import Link from "next/link";

export function Header() {
  return (
    <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#283039] px-10 py-3">
      <div className="flex items-center gap-4 text-white">
        <h2 className="text-lg font-bold leading-tight tracking-tight">
          Daksh&#39;s Portfolio
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link
            className="text-white text-sm font-medium leading-normal hover:text-gray-300 transition-colors"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-white text-sm font-medium leading-normal hover:text-gray-300 transition-colors"
            href="/experience"
          >
            Experience
          </Link>
          <Link
            className="text-white text-sm font-medium leading-normal hover:text-gray-300 transition-colors"
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className="text-white text-sm font-medium leading-normal hover:text-gray-300 transition-colors"
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
