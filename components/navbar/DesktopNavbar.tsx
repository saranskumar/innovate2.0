"use client";

import GlassSurface from "@/components/ui/GlassSurface";
import { Link } from "react-scroll";
import Image from "next/image";
import innovate from "../../assets/logo/innovatered.svg";
import { navItems } from "./navLinks";

export default function DesktopNavbar() {
    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[98%] max-w-5xl rounded-[50px] border border-primary/50">
            <GlassSurface
                height={80}
                width="100%"
                borderRadius={50}
                displace={0.15}
                distortionScale={-60}
                blur={8}
                opacity={0.85}
                backgroundOpacity={0.25}
                saturation={1.2}
                mixBlendMode="screen"
                disableGlow={true}
                className="flex items-center px-8 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
            >
                <div className="w-full flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        to="home"
                        smooth
                        duration={500}
                        className="cursor-pointer flex items-center flex-shrink-0"
                    >
                        <Image
                            src={innovate}
                            alt="Innovate 2.0"
                            className="h-8 md:h-10 w-auto"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="flex items-center space-x-2">
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




                    </div>
                </div>
            </GlassSurface>
        </div>
    );
}
