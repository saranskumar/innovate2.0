import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Innovate 2026 - Countdown",
    description: "48-hour countdown to Innovate 2026 Hackathon",
};

export default function CountdownLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
