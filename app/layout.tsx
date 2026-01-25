import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Fotter } from "@/components/Fotter";

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
  title: "Join Innovate 2.0 2025, a hackathon solving real-world challenges.",
  description:
    "Join Innovate 2025 Hackathon on January 18-19, 2025, in Trivandrum. Solve real-world challenges. Register today!",
};

import Aurora from "@/components/Aurora";

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
        {/* Global Fixed Aurora Background - Professional Brick Red → White */}
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          {/* Aurora Canvas - Hidden on Mobile */}
          <div className="hidden md:block w-full h-full">
            <Aurora
              colorStops={["#FF0000", "#FF4444", "#FF8888", "#FFCCCC"]}
              blend={0.25}
              amplitude={0.35}
              speed={0.3}
            />
          </div>

          {/* Mobile Static Fallback */}
          <div className="block md:hidden w-full h-full bg-gradient-to-b from-neutral-50 to-neutral-0" />

          {/* White Overlay Layer - Reduced opacity for visible aurora */}
          <div
            className="absolute inset-0"
            style={{
              background: 'rgba(255, 255, 255, 0.35)',
              backdropFilter: 'saturate(1.2)',
              WebkitBackdropFilter: 'saturate(1.2)'
            }}
          />
        </div>

        <Navbar />
        {children}
        <Fotter />
      </body>
    </html>
  );
}
