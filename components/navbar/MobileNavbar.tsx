"use client";

import { useState } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import innovate from "../../assets/logo/innovatered.svg";
import { navItems } from "./navLinks";

export default function MobileNavbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50">
                <div className="rounded-[50px] border border-white/20 bg-white/5 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
                    <div className="px-6 sm:px-8">
                        <div className="flex h-20 items-center justify-between">
                            {/* Logo */}
                            <div className="flex-shrink-0">
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
                                    />
                                </Link>
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(true)}
                                className="rounded-md p-2 text-text-secondary hover:text-primary"
                            >
                                <Bars3Icon className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* MOBILE MENU */}
            <Dialog
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



                            {/* Mobile Register Button */}
                            <div className="pt-4 border-t border-gray-200 mt-4">
                                <Link
                                    to="registration"
                                    smooth
                                    offset={-80}
                                    duration={500}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block w-full text-center bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-red-700 transition shadow-md cursor-pointer active:scale-95"
                                >
                                    Register Now
                                </Link>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    );
}
