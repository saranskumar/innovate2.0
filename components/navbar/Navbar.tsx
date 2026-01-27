"use client";

import { useEffect, useState } from 'react';
import { usePathname } from "next/navigation";
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import GlassSurface from "@/components/ui/GlassSurface";
import Image from "next/image";
import innovate from "../../assets/logo/innovatered.svg";

export const Navbar = () => {
    const [isDesktop, setIsDesktop] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    useEffect(() => {
        const media = window.matchMedia('(min-width: 768px)');
        setIsDesktop(media.matches);

        const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
        media.addEventListener('change', handler);

        return () => media.removeEventListener('change', handler);
    }, []);

    // Use the new Navbar logic primarily for the homepage or where valid.
    // For subpages, the behavior should degrade or handle a back button.
    // The current MobileNavbar implementation handles main links, but subpage "Back to Home" logic is specific.
    // For this generic implementation, we follow the main design.

    // Custom logic for subpages could be added here if needed, 
    // but for now we follow the "one glass component" rule.

    if (!isHomePage) {
        return (
            <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-[50px] border border-primary/20">
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
                    className="flex items-center px-6 sm:px-8 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
                >
                    <div className="w-full flex items-center justify-between">
                        {/* Logo */}
                        <a href="/" className="flex items-center flex-shrink-0">
                            <Image
                                src={innovate}
                                alt="Innovate 2.0"
                                className="h-8 md:h-10 w-auto"
                            />
                        </a>

                        {/* Back Button */}
                        <a
                            href="/"
                            className="font-bold text-primary hover:text-red-700 transition"
                        >
                            ← Back to Home
                        </a>
                    </div>
                </GlassSurface>
            </div>
        );
    }

    return isDesktop ? <DesktopNavbar /> : <MobileNavbar />;
};
