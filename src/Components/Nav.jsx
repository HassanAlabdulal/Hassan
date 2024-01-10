export default function Nav() {
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
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
              data-hs-collapse="/navbar-image-and-text-1"
              aria-controls="navbar-image-and-text-1"
              aria-label="Toggle navigation"
            ></button>
          </div>
        </div>
        <div
          id="navbar-image-and-text-1"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
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
              className="font-medium text-gray-700 hover:text-blue-700 "
              href="/"
            >
              PROJECTS
            </a>
            <a
              className="font-medium text-gray-700 hover:text-blue-700 "
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
