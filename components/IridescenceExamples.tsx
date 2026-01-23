// Example: How to use Iridescence as a background

import Iridescence from '@/components/Iridescence';

// Example 1: Full-page background with red tones
export function IridescenceBackground() {
    return (
        <div className="fixed inset-0 -z-10">
            <Iridescence
                color={[0.6, 0, 0]}  // Red tones
                mouseReact
                amplitude={0.1}
                speed={1}
            />
        </div>
    );
}

// Example 2: Section background
export function IridescenceSection() {
    return (
        <section className="relative min-h-screen">
            {/* Background layer */}
            <div className="absolute inset-0 -z-10">
                <Iridescence
                    color={[0.6, 0, 0]}
                    mouseReact
                    amplitude={0.1}
                    speed={1}
                />
            </div>

            {/* Content on top */}
            <div className="relative z-10 p-8">
                <h1>Your Content Here</h1>
            </div>
        </section>
    );
}

// Example 3: Custom colors
export function CustomIridescence() {
    return (
        <div className="w-full h-screen">
            <Iridescence
                color={[0.2, 0.5, 0.8]}  // Blue tones
                mouseReact={true}
                amplitude={0.2}  // More reactive to mouse
                speed={0.5}      // Slower animation
            />
        </div>
    );
}

// Color presets you can use:
// Red tones: [0.6, 0, 0]
// Blue tones: [0.2, 0.5, 0.8]
// Purple tones: [0.5, 0.2, 0.6]
// Green tones: [0.2, 0.6, 0.3]
// White/neutral: [1, 1, 1]
