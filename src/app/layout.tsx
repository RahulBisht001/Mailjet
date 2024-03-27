import type {Metadata} from "next";
import "../shared/styles/globals.css";

import {ClerkProvider} from "@clerk/nextjs";

import {Lexend, Lexend_Deca, Red_Hat_Display, Poppins, Overpass} from "next/font/google";
import Providers from "@/shared/utils/Provider";

const lexend = Lexend_Deca({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-Lexend",
});

const overpass = Overpass({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-Overpass",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-Poppins",
});

const redhat = Red_Hat_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-RedHatDisplay",
});

export const metadata: Metadata = {
    title: "inboxIQ : Your go to email newsletter platform",
    description: "One stop solution for all your email marketing requirements",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en" className="">
                <body className={`${lexend.variable} ${poppins.variable} ${redhat.variable} ${overpass.variable}`}>
                    <Providers>{children}</Providers>
                </body>
            </html>
        </ClerkProvider>
    );
}
