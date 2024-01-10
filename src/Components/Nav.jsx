import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  // Variants for Framer Motion animation
  const navVariants = {
    hidden: { opacity: 0, scale: 0.95, display: "none" },
    visible: {
      opacity: 1,
      scale: 1,
      display: "block",
      transition: { duration: 0.2 },
    },
  };

  const navMotion = {
    visible: {
      opacity: 1,

      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4">
      <nav
        className="max-w-[75rem] w-full mx-auto px-4 max-md:mr-6 sm:flex sm:items-center sm:justify-between"
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
              className="h-40 w-64 max-md:w-32 max-md:h-32"
            />
          </a>
          <button
            type="button"
            className="sm:hidden"
            aria-label="Toggle navigation"
            onClick={() => setIsNavExpanded(!isNavExpanded)}
          >
            {/* Hamburger Icon */}
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 25 }}
              transition={{ delay: 0.35 }}
              onClick={() => setIsNavExpanded((prevToggle) => !prevToggle)}
              className={`burger  cursor-pointer space-y-1.5 xl:hidden lg:hidden
        `}
            >
              <motion.span
                animate={{
                  rotateZ: isNavExpanded ? 45 : 0,
                  y: isNavExpanded ? 8 : 0,
                }}
                className="line-1 block h-0.5 w-8 bg-[#121212]"
              ></motion.span>

              <motion.span
                animate={{ width: isNavExpanded ? 0 : 24 }}
                className="line-2 block h-0.5 w-6 bg-[#121212]"
              ></motion.span>
              <motion.span
                animate={{
                  rotateZ: isNavExpanded ? -45 : 0,
                  y: isNavExpanded ? -8 : 0,
                  width: isNavExpanded ? 32 : 24,
                }}
                className="line-3 block h-0.5 w-4 bg-[#121212]"
              ></motion.span>
            </motion.div>
          </button>
        </div>

        {/* Navigation Links */}
        <AnimatePresence>
          {isNavExpanded && (
            <motion.div
              variants={navMotion}
              animate="visible"
              initial="hidden"
              className="fixed left-0 z-40 flex flex-col items-center justify-center w-full gap-24 text-2xl font-bold text-center"
            >
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -55 }}
                transition={{ delay: 0.25 }}
                className="flex flex-col items-center shadow-md w-full pb-7"
              >
                <a className="font-medium text-blue-700 my-2" href="/">
                  HOME
                </a>
                <a
                  className="font-medium text-gray-700 my-2 hover:text-blue-700"
                  href="/"
                >
                  SERVICES
                </a>
                <a
                  className="font-medium text-gray-700 my-2 hover:text-blue-700"
                  href="/"
                >
                  PROJECTS
                </a>
                <a
                  className="font-medium text-gray-700 my-2 hover:text-blue-700"
                  href="/"
                >
                  CONTACT
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
