import {useClerk} from "@clerk/nextjs";
import {redirect, usePathname} from "next/navigation";

import useRouteChange from "@/shared/hooks/useRouteChange";
import {sideBarBottomItems, sideBarItems} from "@/app/configs/constants";
import Link from "next/link";
import {ICONS} from "@/shared/utils/icons";
import SidebarFotterLogo from "./SidebarFotterLogo";
import {useEffect} from "react";

const DashboardItems = ({bottomContent}: {bottomContent?: boolean}) => {
    const {activeRoute, setActiveRoute} = useRouteChange();
    const {user, signOut} = useClerk();

    const pathname = usePathname();

    const logoutHandler = () => {
        signOut();
        redirect("/sign-in");
    };

    useEffect(() => {
        setActiveRoute(pathname);
    }, [pathname, setActiveRoute]);

    return (
        <>
            {!bottomContent ? (
                <>
                    {sideBarItems.map((item: DashboardSideBarTypes, index: number) => (
                        <Link
                            key={index}
                            href={item.url}
                            className={`p-2 py-3 flex items-center my-2 rounded-lg cursor-pointer ${
                                item.url === activeRoute && ""
                            }`}
                        >
                            <span className={`text-xl mr-3 ${item.url === activeRoute && "text-green-500"}`}>
                                {item.icon}
                            </span>
                            <span className={`text-sm mr-3 ${item.url === activeRoute && "text-green-500"}`}>
                                {item.title}
                            </span>
                        </Link>
                    ))}
                </>
            ) : (
                <>
                    {sideBarBottomItems.map((item: DashboardSideBarTypes, index: number) => (
                        <Link
                            key={index}
                            href={item.url === "/" ? `/subscribe?username=${user?.username}` : item.url}
                            className={`p-2 py-3 flex items-center my-2 rounded-lg ${item.url === activeRoute && ""}`}
                        >
                            <span className={`text-xl mr-3 ${item.url === activeRoute && "text-green-500"}`}>
                                {item.icon}
                            </span>
                            <span className={`text-sm mr-3 ${item.url === activeRoute && "text-green-500"}`}>
                                {item.title}
                            </span>
                        </Link>
                    ))}

                    {/* Sign out */}

                    <div className="p-3 cursor-pointer flex items-center border-b" onClick={logoutHandler}>
                        <span className="text-xl mr-2">{ICONS.logOut}</span>
                        <span className="text-sm">Sign Out</span>
                    </div>
                    <br />
                    <br />
                    {/* Footer */}

                    <div className="w-full flex justify-center items-center cursor-pointer">
                        <SidebarFotterLogo />
                    </div>
                    <p className="text-xs items-center justify-center text-center pt-5 pb-10">
                        © 2024 inboxIQ, Inc. All rights reserved.Check our &nbsp;
                        <Link href={"/privacy-policy"} className="text-green-500">
                            privacy policy
                        </Link>
                        . Follow me on <span className="text-blue-700">LinkedIn</span>.
                    </p>
                </>
            )}
        </>
    );
};

export default DashboardItems;
