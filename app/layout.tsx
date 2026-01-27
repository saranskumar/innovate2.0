import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Join Innovate 2.0 2026, the 2nd Edition of Kerala's premier hackathon.",
  description:
    "Join the 2nd Edition of Innovate Hackathon on February 20-22, 2026, in Trivandrum. Solve real-world challenges. Register today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}
      >


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
      </body>
    </html >
  );
}
