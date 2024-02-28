import type {Metadata} from "next";
import "./globals.css";

import {Poppins, Lexend} from "next/font/google";

const lexend = Lexend({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-Lexend",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-Poppins",
});

export const metadata: Metadata = {
    title: "MailerLite : Saas Email Newsletter Platform",
    description: "One stop solution for all your email marketing requirements",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${lexend.variable} ${poppins.variable}`}>{children}</body>
        </html>
    );
}
