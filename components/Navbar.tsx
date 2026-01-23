"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import GlassSurface from "./GlassSurface";
import innovate from "../assets/logo/innovate_logo.png";

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
    { name: "Venue", to: "page3" },
    { name: "Schedule", to: "page4" },
    { name: "Contact", to: "page6" },
  ];

  return (
    <header className="fixed w-full z-50 transition-all duration-300">
      <GlassSurface
        width="100%"
        height="auto"
        borderRadius={0}
        brightness={92}
        opacity={0.35}
        blur={18}
        saturation={1.2}
        className={`transition-all duration-300 ${scrolled ? 'border-b border-white/20' : ''}`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundBlendMode: 'overlay'
        }}
      >
        <nav className="mx-auto flex w-full items-center justify-between px-6 pt-6 pb-4 lg:px-12">
          {/* Logo - Left Side */}
          <div className="flex">
            <Link
              to="page0"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="cursor-pointer"
            >
              <img
                src={innovate.src}
                alt="Innovate 2.0"
                className="h-12 md:h-14 w-auto brightness-0"
              />
            </Link>
          </div>

          {/* Center Navigation Items */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-3 absolute left-1/2 transform -translate-x-1/2">
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
                  className={`relative px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${activeSection === item.to
                    ? "bg-red-600 text-white shadow-md"
                    : "text-red-700 hover:bg-red-50 hover:text-red-600"
                    }`}
                >
                  {item.name}
                </button>
              </Link>
            ))}
          </div>

          {/* Problem Statement Button - Right Side */}
          <div className="hidden lg:flex">
            <button
              onClick={() => window.open("/problems")}
              className="btn-primary px-6 py-2.5"
            >
              Problem Statements →
            </button>
          </div>



          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-md p-2 text-red-600 hover:bg-red-50 transition-colors"
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </GlassSurface>

      {/* Mobile Menu Dialog */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" />
        <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm">
          <GlassSurface
            width="100%"
            height="100%"
            borderRadius={0}
            brightness={98}
            opacity={0.95}
            blur={16}
            saturation={1.1}
            className="shadow-xl border-l border-white/30"
          >
            <DialogPanel className="w-full h-full px-6 py-6">
              {/* Mobile Header */}
              <div className="flex items-center justify-between">
                <img
                  src={innovate.src}
                  alt="Innovate 2.0"
                  className="h-8 w-auto brightness-0"
                />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-md p-2 text-red-600 hover:bg-red-50 transition-colors"
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
                      <button className="block w-full text-left px-4 py-3 text-base font-medium text-red-700 hover:bg-red-50 rounded-lg transition-colors">
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
                      className="btn-primary block w-full text-center"
                    >
                      Problem Statements →
                    </button>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </GlassSurface>
        </div>
      </Dialog>
    </header>
  );
};
