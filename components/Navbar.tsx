"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import Image from "next/image";
import innovate from "../assets/logo/innovate_logo.svg";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Filter for Dark Brick Red (#8a191d)
  const redFilter = "brightness(0) saturate(100%) invert(13%) sepia(94%) saturate(4565%) hue-rotate(348deg) brightness(75%) contrast(98%)";

  const navItems = [
    { name: "Home", to: "home", type: "scroll" },
    { name: "About", to: "about", type: "scroll" },
    { name: "Rules", to: "/rules", type: "route" },
    { name: "FAQ", to: "faq", type: "scroll" },
    { name: "Schedule", to: "schedule", type: "scroll" },
    { name: "Contact", to: "contact", type: "scroll" },
  ];

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50">
        <div className="rounded-[50px] border border-white/20 bg-white/5 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
          <div className="px-6 sm:px-8">
            <div className="flex h-20 items-center justify-between">
              {/* Logo */}
              <div className="flex-shrink-0">
                {isHomePage ? (
                  <Link
                    to="home"
                    smooth
                    duration={500}
                    className="cursor-pointer flex items-center"
                  >
                    <Image
                      src={innovate}
                      alt="Innovate 2.0"
                      className="h-8 md:h-10 w-auto"
                      style={{ filter: redFilter }}
                    />
                  </Link>
                ) : (
                  <a href="/" className="flex items-center">
                    <Image
                      src={innovate}
                      alt="Innovate 2.0"
                      className="h-8 md:h-10 w-auto"
                      style={{ filter: redFilter }}
                    />
                  </a>
                )}
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-2">
                {isHomePage ? (
                  <>
                    {navItems.map((item) =>
                      item.type === "route" ? (
                        <a
                          key={item.name}
                          href={item.to}
                          className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-primary transition"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          key={item.to}
                          to={item.to}
                          smooth
                          offset={-80}
                          duration={500}
                          activeClass="text-primary font-bold"
                          className="cursor-pointer px-4 py-2 text-sm font-medium text-text-secondary hover:text-primary transition"
                        >
                          {item.name}
                        </Link>
                      )
                    )}

                    <Link
                      to="registration"
                      smooth
                      offset={-80}
                      duration={500}
                      className="ml-4 bg-primary text-white font-bold py-2.5 px-8 rounded-full hover:bg-red-800 transition cursor-pointer glare-button"
                    >
                      Register Now
                    </Link>
                  </>
                ) : (
                  <a href="/" className="font-bold text-primary hover:text-red-700">
                    ← Back to Home
                  </a>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden rounded-md p-2 text-text-secondary hover:text-primary"
              >
                <Bars3Icon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav >

      {/* MOBILE MENU */}
      < Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="md:hidden"
      >
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" />

        <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-neutral-100 shadow-xl">
          <DialogPanel className="h-full px-6 py-6">
            <div className="flex items-center justify-between">
              <Image
                src={innovate}
                alt="Innovate Hackathon 2.0 - 2nd Edition"
                className="h-8 w-auto"
                style={{ filter: redFilter }}
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-md hover:text-primary"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-8 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.type === "route" ? item.to : `/#${item.to}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 font-semibold text-text-primary hover:bg-white/5"
                >
                  {item.name}
                </a>
              ))}

              <Link
                to="registration"
                smooth
                offset={-80}
                duration={500}
                onClick={() => setMobileMenuOpen(false)}
                className="block mt-4 bg-primary text-white text-center font-bold py-3 rounded-xl hover:bg-red-800 transition cursor-pointer glare-button"
              >
                Register Now
              </Link>
            </div>
          </DialogPanel>
        </div>
      </Dialog >
    </>
  );
};
