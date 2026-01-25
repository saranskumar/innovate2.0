"use client";
import React from "react";

interface GlassSurfaceProps {
    children?: React.ReactNode;
    width?: number | string;
    height?: number | string;
    borderRadius?: number;
    blur?: number;
    opacity?: number;
    className?: string;
    style?: React.CSSProperties;
}

const GlassSurface: React.FC<GlassSurfaceProps> = ({
    children,
    width = "100%",
    height = "auto",
    borderRadius = 16,
    blur = 10,
    opacity = 0.1,
    className = "",
    style = {},
}) => {
    const surfaceStyle: React.CSSProperties = {
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        borderRadius: `${borderRadius}px`,
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        backgroundColor: `rgba(255, 255, 255, ${opacity})`,
        border: "1px solid rgba(255, 255, 255, 0.2)",
        ...style,
    };

    return (
        <div className={`glass-surface ${className}`} style={surfaceStyle}>
            {children}
        </div>
    );
};

export default GlassSurface;
