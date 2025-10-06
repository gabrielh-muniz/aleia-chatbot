import { Bot, Menu, X } from "lucide-react";
import { NAVIGATION_LANDING_DATA } from "@/constants/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-screen h-screen bg-slate-400">
      <header className="flex justify-between items-center py-6 px-8 md:px-32 bg-white">
        {/* Logo */}
        <motion.div
          className="text-xl font-bold uppercase flex items-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <Bot className="mr-2" />
          <span>
            ALE<span className="text-blue-400">IA</span>
          </span>
        </motion.div>
        {/* Navigation Menu */}
        <motion.nav
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <ul className="hidden md:flex gap-8 ml-3">
            {NAVIGATION_LANDING_DATA.map((item) => (
              <li key={item.id}>
                <a
                  href={item.url}
                  className="text-gray-600 hover:text-blue-400"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
        {/* Mobile Menu button */}
        <div className="md:hidden">
          <button
            className="p-2 hover:bg-slate-100 rounded-md transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`absolute inset-0 transition-all duration-200 ${
                  isMobileMenuOpen
                    ? "rotate-180 opacity-0"
                    : "rotate-0 opacity-100"
                }`}
              />
              <X
                className={`absolute inset-0 transition-all duration-200 ${
                  isMobileMenuOpen
                    ? "rotate-0 opacity-100"
                    : "rotate-180 opacity-0"
                }`}
              />
            </div>
          </button>
        </div>
      </header>
      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-8 py-4">
          <ul className="flex flex-col gap-4">
            {NAVIGATION_LANDING_DATA.map((nav, index) => (
              <li
                key={nav.id}
                className={`transform transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen
                    ? `${index * 100}ms`
                    : "0ms",
                }}
              >
                <a
                  href={nav.url}
                  className="block py-2 px-2 hover:text-slate-400 hover:bg-slate-50 rounded-md transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default LandingPage;
