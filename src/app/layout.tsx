import type { Metadata } from "next";
import { MuseoModerno, Roboto } from "next/font/google";
import "../styles/globals.css";

const museoModerno = MuseoModerno({
    variable: "--font-museo-moderno",
    subsets: ["latin"],
    weight: ["800"],
});

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const metadata: Metadata = {
    title: "Null - Navigate Unseen, Live Limitless",
    description: "Experience true digital freedom with Null. Navigate unseen, live limitless.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${museoModerno.variable} ${roboto.variable} antialiased`}>{children}</body>
        </html>
    );
}
