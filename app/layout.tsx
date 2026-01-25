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
    "Join Innovate 2026 Hackathon on February 20-22, 2026, in Trivandrum. Solve real-world challenges. Register today!",
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
        <div className="fixed top-0 left-0 right-0 h-[70vh] md:inset-0 z-[-1] pointer-events-none bg-white">
          {/* Aurora Canvas - Visible on Mobile too */}
          <div className="w-full h-full">
            <Aurora
              colorStops={["#a72f35", "#EF4444", "#F87171", "#FFFFFF"]}
              blend={0.5}
              amplitude={0.45}
              speed={0.3}
            />
          </div>

          {/* White Overlay Layer - Responsive opacity */}
          <div
            className="absolute inset-0 md:opacity-15 opacity-5"
            style={{
              background: 'rgba(255, 255, 255, 1)',
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
