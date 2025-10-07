import { Bot, Menu, X } from "lucide-react";
import { NAVIGATION_LANDING_DATA } from "@/constants/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import HeroImage from "@/assets/hero_image.png";

function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <header className="flex items-center justify-between bg-white px-8 py-6 md:px-32">
        {/* Logo */}
        <motion.div
          className="flex items-center text-xl font-bold uppercase"
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
          <ul className="ml-3 hidden gap-8 md:flex">
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
            className="rounded-md p-2 transition-colors duration-200 hover:bg-slate-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative h-6 w-6">
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
        className={`absolute z-10 w-full overflow-hidden bg-white shadow-lg transition-all duration-300 ease-in-out md:hidden ${
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
                  className="block rounded-md px-2 py-2 transition-all duration-200 hover:bg-slate-50 hover:text-slate-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Hero Section */}
      <section className="grid min-h-[550px] grid-cols-1 px-8 md:grid-cols-2 md:px-32">
        {/* Call to action */}
        <motion.div className="flex flex-col justify-center md:py-0">
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-5xl font-bold">
              Lorem ipsum dolor sit{" "}
              <span className="text-blue-400">amet</span>{" "}
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            {/* Button section */}
            <div>
              <button className="rounded-md bg-blue-400 px-4 py-2 text-white transition-colors duration-200 hover:bg-blue-500">
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
        {/* Hero Image */}
        <div className="flex items-center justify-center">
          <img
            src={HeroImage}
            alt="Hero"
            className="w-[350px] drop-shadow md:w-[500px] xl:w-[600px]"
          />
        </div>
      </section>
      {/* Cards section */}
    </div>
  );
}

function LandingPage2() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="bg-background relative min-h-screen overflow-hidden">
      {/* Header */}
      <header className="border-border/40 bg-background/80 sticky top-0 z-10 border-b backdrop-blur-sm">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Brand */}
            <div className="flex items-center gap-2">
              <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-lg">
                <Bot className="text-primary-foreground h-5 w-5" />
              </div>
              <span className="text-foreground text-xl font-semibold">
                ALE<span className="text-primary">IA</span>
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden items-center gap-8 md:flex">
              {NAVIGATION_LANDING_DATA.map((item) => (
                <a
                  key={item.id}
                  className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
                  href={item.url}
                >
                  {item.title}
                </a>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="text-sm font-medium">
                Login
              </Button>
              <Button size="sm" className="text-sm font-medium">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                className="rounded-md p-2 transition-colors duration-200 hover:bg-slate-100"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <div className="relative h-6 w-6">
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
          </div>
        </nav>
      </header>
      {/* Mobile Menu */}
      <div
        className={`absolute z-10 w-full overflow-hidden bg-white shadow-lg transition-all duration-300 ease-in-out md:hidden ${
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
                  className="text-muted-foreground hover:text-foreground block rounded-md px-2 py-2 text-sm font-medium transition-all duration-200"
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

export default LandingPage2;
