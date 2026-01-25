"use client";
import React from "react";

interface GlassSurfaceProps {
    children?: React.ReactNode;
    width?: number | string;
    height?: number | string;
    borderRadius?: number;
    borderWidth?: number;
    blur?: number;
    opacity?: number;
    brightness?: number;
    saturation?: number;
    className?: string;
    style?: React.CSSProperties;
}

const GlassSurface: React.FC<GlassSurfaceProps> = ({
    children,
    width = "100%",
    height = "auto",
    borderRadius = 16,
    borderWidth = 1,
    blur = 10,
    opacity = 0.1,
    brightness = 1,
    saturation = 1,
    className = "",
    style = {},
}) => {
    const surfaceStyle: React.CSSProperties = {
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        borderRadius: `${borderRadius}px`,
        backdropFilter: `blur(${blur}px) brightness(${brightness}) saturate(${saturation})`,
        WebkitBackdropFilter: `blur(${blur}px) brightness(${brightness}) saturate(${saturation})`,
        backgroundColor: `rgba(255, 255, 255, ${opacity})`,
        border: `${borderWidth}px solid rgba(255, 255, 255, 0.2)`,
        ...style,
    };

    return (
        <div className={`glass-surface ${className}`} style={surfaceStyle}>
            {children}
        </div>
    );
};

export default GlassSurface;
