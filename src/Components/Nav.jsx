// import Logo from "../../Assets/Logo.png";

export default function Nav() {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 ">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
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
              className="h-36 w-52"
            />
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
              data-hs-collapse="/navbar-image-and-text-1"
              aria-controls="navbar-image-and-text-1"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-image-and-text-1"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <a
              className="font-medium text-blue-500 "
              href="/"
              aria-current="page"
            >
              Landing
            </a>
            <a
              className="font-medium text-gray-600 hover:text-gray-400 "
              href="/"
            >
              Account
            </a>
            <a
              className="font-medium text-gray-600 hover:text-gray-400 "
              href="/"
            >
              Work
            </a>
            <a
              className="font-medium text-gray-600 hover:text-gray-400 "
              href="/"
            >
              Blog
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
