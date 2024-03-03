import type {Metadata} from "next";
import "../shared/styles/globals.css";

import {Poppins, Lexend} from "next/font/google";
import Providers from "@/shared/utils/Provider";

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
            <body className={`${lexend.variable} ${poppins.variable}`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
