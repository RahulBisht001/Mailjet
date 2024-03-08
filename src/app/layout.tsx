import type {Metadata} from "next";
import "../shared/styles/globals.css";

import {Lexend, Lexend_Deca, Red_Hat_Display, Poppins} from "next/font/google";
import Providers from "@/shared/utils/Provider";

const lexend = Lexend_Deca({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-Lexend",
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
    title: "Mailjet : Your Email Newsletter Platform",
    description: "One stop solution for all your email marketing requirements",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="bg-[#0e131cff]">
            <body className={`${lexend.variable} ${poppins.variable} ${redhat.variable}`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
