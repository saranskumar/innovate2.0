import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import Image from "next/image";
import innovate from "../assets/logo/innovate_logo.svg";

const Footer = () => {
    // Filter for #B33439
    const redFilter = "brightness(0) saturate(100%) invert(29%) sepia(34%) saturate(3475%) hue-rotate(329deg) brightness(92%) contrast(98%)";

    return (
        <footer className="bg-white/5 border-t border-white/10 pt-16 pb-8 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Column 1: Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Image
                                src={innovate}
                                alt="Innovate 2.0"
                                className="h-8 w-auto opacity-90"
                                style={{ filter: redFilter }}
                            />

                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
                            Join Kerala&apos;s brightest minds to build technology-driven
                            solutions for real-world challenges.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-text-primary">Quick Links</h3>
                        <ul className="space-y-2">
                            {[
                                { name: "Home", href: "/" },
                                { name: "About", href: "/#about" },
                                { name: "Schedule", href: "/#schedule" },
                                { name: "Rules", href: "/rules" },
                                { name: "Contact", href: "/contact" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-text-secondary hover:text-primary transition-colors text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Connect (Social Profiles List) */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-text-primary">Connect</h3>
                        <div className="space-y-6">
                            {/* IEEE Kerala YP */}
                            <div>
                                <p className="text-sm font-medium text-text-primary mb-2">IEEE Kerala YP</p>
                                <div className="flex gap-4">
                                    <a
                                        href="https://www.linkedin.com/company/ieee-kerala-young-professionals/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-text-secondary hover:text-primary transition-colors text-xl"
                                        aria-label="IEEE Kerala YP LinkedIn"
                                    >
                                        <FaLinkedin />
                                    </a>
                                    <a
                                        href="https://yp.ieeekerala.org/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-text-secondary hover:text-primary transition-colors text-xl"
                                        aria-label="IEEE Kerala YP Website"
                                    >
                                        <TbWorld />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/ieeekeralayp/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-text-secondary hover:text-primary transition-colors text-xl"
                                        aria-label="IEEE Kerala YP Instagram"
                                    >
                                        <FaInstagram />
                                    </a>
                                    <a
                                        href="https://www.facebook.com/ypieeekerala"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-text-secondary hover:text-primary transition-colors text-xl"
                                        aria-label="IEEE Kerala YP Facebook"
                                    >
                                        <FaFacebook />
                                    </a>
                                </div>
                            </div>

                            {/* InApp */}
                            <div>
                                <p className="text-sm font-medium text-text-primary mb-2">InApp</p>
                                <div className="flex gap-4">
                                    <a
                                        href="https://www.linkedin.com/company/inapp/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-text-secondary hover:text-primary transition-colors text-xl"
                                        aria-label="InApp LinkedIn"
                                    >
                                        <FaLinkedin />
                                    </a>
                                    <a
                                        href="https://x.com/inapp"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-text-secondary hover:text-primary transition-colors text-xl"
                                        aria-label="InApp Twitter"
                                    >
                                        <FaTwitter />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/inapp.inc/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-text-secondary hover:text-primary transition-colors text-xl"
                                        aria-label="InApp Instagram"
                                    >
                                        <FaInstagram />
                                    </a>
                                    <a
                                        href="https://www.facebook.com/InApp"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-text-secondary hover:text-primary transition-colors text-xl"
                                        aria-label="InApp Facebook"
                                    >
                                        <FaFacebook />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center">
                    <p className="text-text-secondary text-sm">
                        © 2026 Innovate 2.0. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
