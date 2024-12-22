"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import innovate from "../assets/logo/innovate_logo.png";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  //const [scrollY, setScrollY] = useState(0); // Track scroll position

  useEffect(() => {
    const handleScroll = () => {
      //setScrollY(window.scrollY); // Update scroll position
      if (window.scrollY > 400) {
        setScrolled(true); // Activate blur effect
      } else {
        setScrolled(false); // Remove blur effect
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <header
      className={`fixed w-full z-50 ${
        scrolled ? "backdrop-blur-xl bg-opacity-70" : "bg-transparent"
      } transition duration-300`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8 sm:py-0">
        <div className="flex lg:flex-1">
          <span className="sr-only">Your Company</span>
          <Link
            activeClass="active"
            to="page0"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <div className="w-[100px] h-[80px] sm:w-[80px] sm:h-[50px] md:w-[140px] md:h-[100px]">
              <Image
                src={innovate}
                alt="innovate Emblem"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            activeClass="active"
            to="page1"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <button className="text-lg font-semibold leading-6 text-gray-100">
              About
            </button>
          </Link>

          <Link
            activeClass="active"
            to="page4"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <button className="text-lg font-semibold leading-6 text-gray-100">
              Schedule
            </button>
          </Link>

          <Link
            activeClass="active"
            to="page5"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <button className="text-lg font-semibold leading-6 text-gray-100">
              Contact
            </button>
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            onClick={() => {
              window.open(
                "https://www.yepdesk.com/embed/buy-tickets/6762fb8ec9e77c0001b73214/private/up2bepoeag"
              );
            }}
            className="text-lg font-semibold leading-6 text-gray-100"
          >
            Register Now<span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <span className="sr-only">Your Company</span>
            <Link
              activeClass="active"
              to="page0"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            >
              <button className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-700">
                Dhyuthi 5.0
              </button>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-300"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-700">
              <div className="space-y-2 py-6">
                <Link
                  activeClass="active"
                  to="page1"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                >
                  <button className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-700">
                    About
                  </button>
                </Link>

                {/* <Link
                  activeClass="active"
                  to="page3"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                >
                  <button className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-700">
                    Events
                  </button>
                </Link> */}
                <Link
                  activeClass="active"
                  to="page4"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                >
                  <button className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-700">
                    Schedule
                  </button>
                </Link>

                <Link
                  activeClass="active"
                  to="page5"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                >
                  <button className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-700">
                    Contact
                  </button>
                </Link>
              </div>
              <div className="py-6">
                <button
                  onClick={() => {
                    window.open(
                      "https://www.yepdesk.com/embed/buy-tickets/6762fb8ec9e77c0001b73214/private/up2bepoeag"
                    );
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-700"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
