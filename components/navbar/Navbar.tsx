"use client";

import { useEffect, useState } from 'react';
import { usePathname } from "next/navigation";
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

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
        // Subpage fallback: simple static or similar to mobile but with "Back to Home"
        return (
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50">
                <div className="rounded-[50px] border border-white/20 bg-white/5 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
                    <div className="px-6 py-4 flex justify-between items-center">
                        <a href="/" className="font-bold text-primary hover:text-red-700">
                            ← Back to Home
                        </a>
                    </div>
                </div>
            </nav>
        );
    }

    return isDesktop ? <DesktopNavbar /> : <MobileNavbar />;
};
