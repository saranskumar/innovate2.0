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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
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
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-paper/95 backdrop-blur-sm shadow-md border-b-2 border-sketch/10"
        : "bg-transparent"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8 sm:py-0">
        <div className="flex lg:flex-1">
          <span className="sr-only">Innovate</span>
          <Link
            activeClass="active"
            to="page0"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="cursor-pointer"
          >
            <div className="w-[100px] h-[80px] sm:w-[80px] sm:h-[50px] md:w-[140px] md:h-[100px]">
              <Image
                src={innovate}
                alt="Innovate Logo"
                className="w-full h-full object-contain"
                style={{ filter: 'invert(1) brightness(0.2)' }}
              />
            </div>
          </Link>
        </div>

        <div className="flex xl:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-text-primary"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        <PopoverGroup className="hidden xl:flex xl:gap-x-8">
          <Link
            activeClass="active"
            to="page1"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="cursor-pointer"
          >
            <button className="text-base font-medium text-text-primary hover:text-sketch transition-colors relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-highlight transition-all group-hover:w-full"></span>
            </button>
          </Link>

          <Link
            activeClass="active"
            to="page4"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="cursor-pointer"
          >
            <button className="text-base font-medium text-text-primary hover:text-sketch transition-colors relative group">
              Schedule
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-highlight transition-all group-hover:w-full"></span>
            </button>
          </Link>

          <Link
            activeClass="active"
            to="page5"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="cursor-pointer"
          >
            <button className="text-base font-medium text-text-primary hover:text-sketch transition-colors relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-highlight transition-all group-hover:w-full"></span>
            </button>
          </Link>
        </PopoverGroup>

        <div className="hidden xl:flex xl:flex-1 xl:justify-end">
          <button
            onClick={() => {
              window.open("/problems");
            }}
            className="text-base font-semibold text-text-primary hover:text-sketch transition-colors"
          >
            Problem Statements <span aria-hidden="true">→</span>
          </button>
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="xl:hidden"
      >
        <div className="fixed inset-0 z-10 bg-sketch/50 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-paper px-6 py-6 sm:max-w-sm border-l-2 border-sketch/20">
          <div className="flex items-center justify-between">
            <span className="sr-only">Innovate</span>
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
              className="cursor-pointer"
            ></Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-text-primary"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y-2 divide-dashed divide-sketch-border">
              <div className="space-y-2 py-6 pt-11">
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
                  className="cursor-pointer"
                >
                  <button className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-text-primary hover:bg-paper-dark">
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
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                  className="cursor-pointer"
                >
                  <button className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-text-primary hover:bg-paper-dark">
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
                  className="cursor-pointer"
                >
                  <button className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-text-primary hover:bg-paper-dark">
                    Contact
                  </button>
                </Link>
              </div>
              <div className="py-6">
                <button
                  onClick={() => {
                    window.open("/problems");
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-text-primary hover:bg-paper-dark"
                >
                  Problem Statements
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
