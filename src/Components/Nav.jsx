import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  // Variants for Framer Motion animation
  const navVariants = {
    hidden: { opacity: 0, scale: 0.95, y: "-100%" },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  };

  const underlineVariants = {
    hidden: { width: 0 },
    visible: { width: "100%", transition: { duration: 0.3 } },
  };

  return (
    <header className="relative z-50 flex flex-wrap w-full text-sm bg-white sm:justify-start sm:flex-nowrap">
      <nav
        className="max-w-[75rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <a
            className="inline-flex items-center text-xl font-semibold gap-x-2 "
            href="/"
          >
            <img
              src="/Assets/Logo.svg"
              alt="Hassan's Logo"
              className="w-64 h-40 max-md:w-32 max-md:h-32"
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
              className={`burger cursor-pointer space-y-2.5 xl:hidden lg:hidden mr-5
        `}
            >
              <motion.span
                animate={{
                  rotateZ: isNavExpanded ? 45 : 0,
                  y: isNavExpanded ? 12 : 0,
                }}
                className=" block h-0.5 w-8 bg-[#121212]"
              ></motion.span>

              <motion.span
                animate={{ width: isNavExpanded ? 0 : 32 }}
                className=" block h-0.5 w-6 bg-[#121212]"
              ></motion.span>
              <motion.span
                animate={{
                  rotateZ: isNavExpanded ? -45 : 0,
                  y: isNavExpanded ? -12 : 0,
                  width: isNavExpanded ? 32 : 32,
                }}
                className=" block h-0.5 w-4 bg-[#121212]"
              ></motion.span>
            </motion.div>
          </button>
        </div>

        {/* Navigation Links for large screens */}
        <div className="relative hidden sm:flex">
          {["HOME", "EXPERIENCE", "PROJECTS", "CONTACT"].map((item) => (
            <a
              key={item}
              className="relative mx-3 font-medium text-gray-800 transition-all duration-200 delay-50 hover:text-black hover:font-bold"
              href={`/${item.toLowerCase()}`}
              onMouseEnter={() => setActiveLink(item)}
              onMouseLeave={() => setActiveLink("")}
              onClick={() => setActiveLink(item)}
            >
              {item}
              <motion.span
                className="absolute -bottom-2 left-0 items-center bg-black h-0.5"
                variants={underlineVariants}
                initial="hidden"
                animate={activeLink === item ? "visible" : "hidden"}
              />
            </a>
          ))}
        </div>

        {/* Navigation Links for small screens */}
        <AnimatePresence>
          {isNavExpanded && (
            <motion.div
              variants={navVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed left-0 z-40 flex flex-col items-center justify-center w-full gap-6 text-xl font-bold text-center shadow-md pb-7"
            >
              <a className="my-2 font-medium text-blue-700" href="/">
                HOME
              </a>
              <a
                className="my-2 font-medium text-gray-700 hover:text-blue-700"
                href="/"
              >
                SERVICES
              </a>
              <a
                className="my-2 font-medium text-gray-700 hover:text-blue-700"
                href="/"
              >
                PROJECTS
              </a>
              <a
                className="my-2 font-medium text-gray-700 hover:text-blue-700"
                href="/"
              >
                CONTACT
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
