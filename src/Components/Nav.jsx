import { useState } from "react";

export default function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4">
      <nav
        className="max-w-[75rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <a
            className="inline-flex items-center gap-x-2 text-xl font-semibold "
            href="/"
          >
            <img
              src="/Assets/Logo.svg"
              alt="Hassan's Logo"
              className="h-40 w-64"
            />
          </a>
          <button
            type="button"
            className="sm:hidden"
            aria-label="Toggle navigation"
            onClick={() => setIsNavExpanded(!isNavExpanded)}
          >
            {/* Hamburger Icon */}
            <div className="flex flex-col space-y-1">
              <span className="block w-8 h-0.5 bg-gray-700"></span>
              <span className="block w-8 h-0.5 bg-gray-700"></span>
              <span className="block w-8 h-0.5 bg-gray-700"></span>
            </div>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isNavExpanded ? "block" : "hidden"
          } md:block overflow-hidden z-50 transition-all duration-300`}
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <a
              className="font-medium text-blue-700"
              href="/"
              aria-current="page"
            >
              HOME
            </a>
            <a
              className="font-medium text-gray-700 hover:text-blue-700"
              href="/"
            >
              SERVICES
            </a>
            <a
              className="font-medium text-gray-700 hover:text-blue-700"
              href="/"
            >
              PROJECTS
            </a>
            <a
              className="font-medium text-gray-700 hover:text-blue-700"
              href="/"
            >
              CONTACT
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
