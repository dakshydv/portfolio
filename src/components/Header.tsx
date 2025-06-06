export function Header() {
  return (
    <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#283039] px-10 py-3">
      <div className="flex items-center gap-4 text-white">
        <h2 className="text-lg font-bold leading-tight tracking-tight">
          Daksh's Portfolio
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <a
            className="text-white text-sm font-medium leading-normal hover:text-gray-300 transition-colors"
            href="/"
          >
            Home
          </a>
          <a
            className="text-white text-sm font-medium leading-normal hover:text-gray-300 transition-colors"
            href="/experience"
          >
            Experience
          </a>
          <a
            className="text-white text-sm font-medium leading-normal hover:text-gray-300 transition-colors"
            href="/projects"
          >
            Projects
          </a>
          <a
            className="text-white text-sm font-medium leading-normal hover:text-gray-300 transition-colors"
            href="/contact"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
