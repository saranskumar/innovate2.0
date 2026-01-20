"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("page0");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "page0" },
    { name: "About", to: "page1" },
    { name: "Schedule", to: "page4" },
    { name: "Contact", to: "page5" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-paper/98 backdrop-blur-sm shadow-[0_2px_8px_rgba(0,0,0,0.06)] border-b border-sketch/5"
        : "bg-paper/80"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo - Handwritten Style */}
        <div className="flex">
          <Link
            to="page0"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="cursor-pointer group"
          >
            <h1 className="text-2xl md:text-3xl font-handwritten font-bold text-sketch tracking-tight relative">
              Innovate
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-highlight-yellow/40 transition-all duration-300 group-hover:w-full -rotate-1"></span>
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-1 pt-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              activeClass="nav-active"
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onSetActive={() => setActiveSection(item.to)}
              className="cursor-pointer"
            >
              <button
                className={`nav-item-hover relative px-4 py-2 text-sm font-medium transition-all duration-200 ${activeSection === item.to ? "nav-item-active text-sketch" : "text-text-primary"
                  }`}
              >
                {item.name}
              </button>
            </Link>
          ))}
        </div>

        {/* CTA Button - Sticky Note Style */}
        <div className="hidden lg:flex pt-1">
          <button
            onClick={() => window.open("/problems")}
            className="relative group"
          >
            <span className="relative inline-block px-5 py-2.5 text-sm font-semibold text-sketch bg-highlight-yellow border-2 border-sketch/20 rounded-md rotate-1 transition-all duration-200 group-hover:rotate-0 group-hover:shadow-[2px_2px_0_rgba(26,26,26,0.2)] group-active:shadow-none group-active:translate-x-[1px] group-active:translate-y-[1px]">
              Problem Statements →
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-text-primary hover:bg-paper-dark transition-colors"
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dialog */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-sketch/40 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-paper px-6 py-6 shadow-xl border-l border-sketch/10">
          {/* Mobile Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-handwritten font-bold text-sketch">
              Innovate
            </h2>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-2 text-text-primary hover:bg-paper-dark transition-colors"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="mt-8 flow-root">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setMobileMenuOpen(false)}
                  className="cursor-pointer"
                >
                  <button className="block w-full text-left px-4 py-3 text-base font-medium text-text-primary hover:bg-highlight-yellow/20 rounded-lg transition-colors">
                    {item.name}
                  </button>
                </Link>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4">
                <button
                  onClick={() => {
                    window.open("/problems");
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full px-4 py-3 text-center text-base font-semibold text-sketch bg-highlight-yellow border-2 border-sketch/20 rounded-lg hover:shadow-md transition-all"
                >
                  Problem Statements →
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
