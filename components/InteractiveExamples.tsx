// Example usage of the three interactive components
// You can copy and use these examples in your pages

import GradualBlur from './GradualBlur';
import ClickSpark from './ClickSpark';
import GlassSurface from './GlassSurface';
import Image from "next/image";

export function GradualBlurExample() {
    return (
        <section style={{ position: 'relative', height: 500, overflow: 'hidden' }}>
            <div style={{ height: '100%', overflowY: 'auto', padding: '6rem 2rem' }}>
                {/* Your content here - such as an image or text */}
                {/* Your content here - such as an image or text */}
                <Image src="/your-image.jpg" alt="Example" width={500} height={300} />
            </div>

            <GradualBlur
                target="parent"
                position="bottom"
                height="7rem"
                strength={2}
                divCount={5}
                curve="bezier"
                exponential
                opacity={1}
            />
        </section>
    );
}

export function ClickSparkExample() {
    return (
        <ClickSpark
            sparkColor='#fff'
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
        >
            <div style={{ padding: '2rem', background: '#333', borderRadius: '8px' }}>
                <h2>Click anywhere to see sparks!</h2>
                <p>This component adds interactive click effects</p>
            </div>
        </ClickSpark>
    );
}

export function GlassSurfaceExample() {
    return (
        <div style={{ padding: '4rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
            {/* Basic usage */}
            <GlassSurface
                width={300}
                height={200}
                borderRadius={50}
                className="my-custom-class"
            >
                <h2>Glass Surface Content</h2>
            </GlassSurface>

            {/* Custom displacement effects */}
            <GlassSurface
                displace={0.5}
                distortionScale={-180}
                redOffset={0}
                greenOffset={10}
                blueOffset={20}
                brightness={50}
                opacity={0.93}
                mixBlendMode="screen"
            >
                <span>Advanced Glass Distortion</span>
            </GlassSurface>
        </div>
    );
}

// Example: Combining all three components
export function CombinedExample() {
    return (
        <ClickSpark sparkColor="#00ffff" sparkCount={12}>
            <GlassSurface width={400} height={300} borderRadius={30}>
                <section style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <div style={{ padding: '2rem' }}>
                        <h1>Interactive Glassmorphic Card</h1>
                        <p>Click to see sparks, scroll to see blur effects!</p>
                    </div>
                    <GradualBlur
                        position="bottom"
                        height="4rem"
                        strength={3}
                        preset="subtle"
                    />
                </section>
            </GlassSurface>
        </ClickSpark>
    );
}
