"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import GlassSurface from "./GlassSurface";
import Image from "next/image";
import innovate from "../assets/logo/innovate_logo.png";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("page0");
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Use existing nav items logic
  const navItems = [
    { name: "Home", to: "page0", type: "scroll" },
    { name: "About", to: "about", type: "scroll" },
    { name: "Rules", to: "/rules", type: "route" },
    { name: "FAQ", to: "page6", type: "scroll" },
    { name: "Schedule", to: "page4", type: "scroll" },
    { name: "Contact", to: "page3", type: "scroll" },
  ];

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 transition-all duration-300">
        <GlassSurface
          className="shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/20"
          borderRadius={50}
          style={{
            background: "rgba(255, 255, 255, 0.1)", // Much more transparent
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <div className="px-6 sm:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <div className="flex-shrink-0">
                {isHomePage ? (
                  <Link
                    to="page0"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className="cursor-pointer select-none flex items-center"
                  >
                    <Image
                      src={innovate}
                      alt="Innovate 2.0"
                      className="h-8 md:h-10 w-auto brightness-0"
                    />
                  </Link>
                ) : (
                  <a href="/" className="cursor-pointer select-none flex items-center">
                    <Image
                      src={innovate}
                      alt="Innovate 2.0"
                      className="h-8 md:h-10 w-auto brightness-0"
                    />
                  </a>
                )}
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:block">
                <div className="ml-auto flex items-center space-x-2">
                  {isHomePage ? (
                    <>
                      {navItems.map((item) => {
                        if (item.type === "route") {
                          return (
                            <a
                              key={item.name}
                              href={item.to}
                              className="text-text-secondary hover:text-primary px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
                            >
                              {item.name}
                            </a>
                          );
                        } else {
                          return (
                            <Link
                              key={item.to}
                              to={item.to}
                              spy={true}
                              smooth={true}
                              offset={-80}
                              duration={500}
                              activeClass="text-primary font-bold bg-white/50"
                              className="cursor-pointer text-text-secondary hover:text-primary px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
                            >
                              {item.name}
                            </Link>
                          );
                        }
                      })}
                      <button
                        onClick={() => window.open("/problems", "_self")}
                        className="ml-4 bg-primary hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md"
                      >
                        Register
                      </button>
                    </>
                  ) : (
                    <a
                      href="/"
                      className="flex items-center gap-2 text-primary hover:text-red-700 font-bold transition-colors"
                    >
                      <span>←</span> Back to Home
                    </a>
                  )}
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-primary focus:outline-none"
                >
                  <Bars3Icon className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </GlassSurface>
      </nav>

      {/* Mobile Menu Dialog (keeping existing implementation but styled) */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" />
        <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm">
          <GlassSurface
            className="h-full border-l border-white/30"
            borderRadius={0}
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(16px)"
            }}
          >
            <DialogPanel className="w-full h-full px-6 py-6">
              <div className="flex items-center justify-between">
                <Image
                  src={innovate}
                  alt="Innovate 2.0"
                  className="h-8 w-auto brightness-0"
                />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-md p-2 text-text-secondary hover:text-primary transition-colors"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-8 flow-root">
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.type === 'route' ? item.to : `/#${item.to}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-text-primary hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                  <button
                    onClick={() => {
                      window.open("/problems", "_self");
                      setMobileMenuOpen(false);
                    }}
                    className="mt-4 w-full bg-primary text-white font-bold py-3 rounded-xl shadow-md"
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </DialogPanel>
          </GlassSurface>
        </div>
      </Dialog>
    </>
  );
};
