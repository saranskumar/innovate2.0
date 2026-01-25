import React from 'react';

export interface GlassSurfaceProps {
    children?: React.ReactNode;
    width?: number | string;
    height?: number | string;
    borderRadius?: number;
    brightness?: number;
    opacity?: number;
    blur?: number;
    saturation?: number;
    className?: string;
    style?: React.CSSProperties;
    // Keeping unused props to prevent breaking existing usages, but making them optional/ignored
    borderWidth?: number;
    displace?: number;
    backgroundOpacity?: number;
    distortionScale?: number;
    redOffset?: number;
    greenOffset?: number;
    blueOffset?: number;
    xChannel?: 'R' | 'G' | 'B';
    yChannel?: 'R' | 'G' | 'B';
    mixBlendMode?: string;
}

const GlassSurface: React.FC<GlassSurfaceProps> = ({
    children,
    width = '100%',
    height = '100%',
    borderRadius = 20,
    borderWidth = 1,
    brightness = 1.0,
    opacity = 0.5,
    blur = 10,
    saturation = 1.0,
    className = '',
    style = {}
}) => {
    // Convert numeric brightness/saturation (e.g. 50, 1.2) to safe CSS filter values if needed
    // Assuming inputs are standard CSS filter values or multipliers

    return (
        <div
            className={`glass-surface relative overflow-hidden ${className}`}
            style={{
                width: width,
                height: height,
                borderRadius: borderRadius,
                background: `rgba(255, 255, 255, ${opacity})`,
                backdropFilter: `blur(${blur}px) saturate(${saturation}) brightness(${brightness})`,
                WebkitBackdropFilter: `blur(${blur}px) saturate(${saturation}) brightness(${brightness})`,
                border: borderWidth > 0 ? `${borderWidth}px solid rgba(255, 255, 255, 0.2)` : 'none',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                ...style
            }}
        >
            {children}
        </div>
    );
};

export default GlassSurface;
