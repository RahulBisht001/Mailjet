"use client";

import {useUser} from "@clerk/nextjs";
import {NextUIProvider} from "@nextui-org/react";
import {usePathname} from "next/navigation";

import DashboardSidebar from "../widgets/dashboard/sidebar/DashboardSidebar";

interface ProviderProps {
    children: React.ReactNode;
}

export default function Providers({children}: ProviderProps) {
    const pathname = usePathname();

    const {isLoaded} = useUser();

    if (!isLoaded) {
        return null;
    }

    return (
        <NextUIProvider>
            {pathname !== "/dashboard/new-email" &&
            pathname !== "/" &&
            pathname !== "/sign-up" &&
            pathname !== "/subscribe" &&
            pathname !== "/success" &&
            pathname !== "/sign-in" ? (
                <div className="w-full flex bg-white text-black font-Lexend">
                    <div className="w-[250px] h-screen overflow-y-scroll">
                        <DashboardSidebar />
                    </div>
                    {children}
                </div>
            ) : (
                <>{children}</>
            )}
        </NextUIProvider>
    );
}
