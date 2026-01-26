"use client";
import React, { useEffect, useRef, useId, useState } from "react";

interface GlassSurfaceProps {
    children?: React.ReactNode;
    borderRadius?: number;
    blur?: number;
    opacity?: number;
    className?: string;
    style?: React.CSSProperties;
    // Legacy props kept for compatibility
    width?: number | string;
    height?: number | string;
    borderWidth?: number;
    brightness?: number;
    saturation?: number;
}

const GlassSurface: React.FC<GlassSurfaceProps> = ({
    children,
    borderRadius = 16,
    blur = 8,
    opacity = 0.25,
    className = "",
    style = {},
}) => {
    const id = useId().replace(/:/g, "-");
    const filterId = `glass-filter-${id}`;
    const feImageRef = useRef<SVGFEImageElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        if (feImageRef.current) {
            const generateMap = () => {
                return `
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="black"/>
                <stop offset="100%" stop-color="white"/>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#g)" />
          </svg>
        `;
            };
            feImageRef.current.setAttribute(
                "href",
                `data:image/svg+xml,${encodeURIComponent(generateMap())}`
            );
        }

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const mobileStyles: React.CSSProperties = {
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
        background: "rgba(255,255,255,0.95)",
        borderRadius,
        border: "1px solid rgba(255,255,255,0.35)",
        ...style,
    };

    const desktopStyles: React.CSSProperties = {
        backdropFilter: `url(#${filterId}) blur(${blur}px)`,
        WebkitBackdropFilter: `url(#${filterId}) blur(${blur}px)`,
        background: `rgba(255,255,255,${opacity})`,
        borderRadius,
        border: "1px solid rgba(255,255,255,0.35)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4), 0 10px 30px rgba(0,0,0,0.08)",
        position: "relative",
        ...style,
    };


    return (
        <div
            className={className}
            style={isMobile ? mobileStyles : desktopStyles}
        >
            {children}

            {!isMobile && (
                <svg
                    width="0"
                    height="0"
                    style={{ position: "absolute" }}
                    aria-hidden
                >
                    <defs>
                        <filter id={filterId}>
                            <feImage
                                ref={feImageRef}
                                result="map"
                                x="0"
                                y="0"
                                width="100%"
                                height="100%"
                            />
                            <feDisplacementMap
                                in="SourceGraphic"
                                in2="map"
                                scale="12"
                            />
                            <feGaussianBlur stdDeviation="0.6" />
                        </filter>
                    </defs>
                </svg>
            )}
        </div>
    );
};

export default GlassSurface;

