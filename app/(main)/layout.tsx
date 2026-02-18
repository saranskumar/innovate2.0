import { Navbar } from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="fixed inset-0 z-[-1] w-full h-full">
                <Particles
                    particleCount={530}
                    particleSpread={11}
                    speed={0.16}
                    particleColors={["#f5d6d6", "#f3baba", "#fb6f6f"]}
                    moveParticlesOnHover={true}
                    particleHoverFactor={1}
                    alphaParticles={true}
                    particleBaseSize={80}
                    sizeRandomness={0.9}
                    cameraDistance={16}
                    disableRotation={true}
                />
            </div>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
