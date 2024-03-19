"use client";
import {useUser} from "@clerk/nextjs";

import DashboardOverviewCard from "@/shared/components/cards/DashboardOverviewCard";
import SubscribersChart from "@/shared/components/charts/SubscribersChart";
import {Button} from "@nextui-org/react";
import {ICONS} from "@/shared/utils/icons";
import {useState} from "react";
import toast from "react-hot-toast";
import Link from "next/link";

const Main = () => {
    const {user} = useUser();
    const [copied, setCopied] = useState(false);

    const handleCopyClick = () => {
        const smallText = document.querySelector(".copy-text") as HTMLElement;
        if (smallText) {
            const textToCopy = smallText.innerText;
            navigator.clipboard.writeText(textToCopy).then(() => {
                setCopied(true);
                toast.success("Link Copied 👍");
                setTimeout(() => {
                    setCopied(false);
                }, 2000);
            });
        }
    };

    return (
        <>
            <div className="p-4 w-full bg-[#f9fafb] h-screen overflow-y-auto">
                <h1 className="text-2xl font-medium">Hi!👋 {user?.fullName}</h1>
                <p className="opacity-[.7] text-sm pt-2">Here&apos;s how your publications doing.</p>
                <div className="w-full flex">
                    <div className="w-[75%] min-h-[85vh] pr-5">
                        <br />
                        <DashboardOverviewCard />
                        <br />
                        <SubscribersChart />
                    </div>

                    <div className="w-[25%] p-2">
                        {/* Create Newsletter button */}
                        <div className="w-full flex justify-end">
                            <Button className="bg-green-500 text-white text-md rounded-lg !px-6 font-thin">
                                <span className="mr-1 ml-[-5px]">{ICONS.write}</span>
                                Start writing
                            </Button>
                        </div>
                        <br />
                        {/* Resources */}
                        <div>
                            <h5 className="text-md font-medium">Resources</h5>
                            <div className="w-full bg-white border rounded-lg p-3 my-1 shadow-xl">
                                {/* Home Page URL */}
                                <div>
                                    <h4 className="font-medium text-sm">Home Page</h4>
                                    <div
                                        className="w-full px-2 my-1 h-[38px] bg-transparent border rounded relative flex items-center cursor-pointer"
                                        onClick={handleCopyClick}
                                    >
                                        <small
                                            className={`w-[90%] text-xs overflow-hidden overflow-ellipsis whitespace-nowrap copy-text ${
                                                copied ? "bg-blue-200" : "bg-transparent"
                                            }`}
                                        >
                                            {/* {process.env.NEXT_PUBLIC_WEBSITE_URL}/subscribe?username=
                                            {user?.username} */}
                                            https:rahulb-portfolio.vercel.app
                                        </small>
                                        {/* <div className="absolute h-[38px] w-[90px] rounded-r-lg bg-[#DFE7FF] right-0 flex items-center justify-center">
                                            <span className="text-lg">{ICONS.copy}</span>
                                            <span className="pl-1">copy</span>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tutorials */}
                        <div className="w-full bg-white border rounded-lg shadow-xl p-5 my-3">
                            <h5 className="font-medium">Tutorials</h5>
                            <p className="text-sm opacity-[.7]">
                                Learn how to get started on inboxIQ and utilize all our features, directly from the
                                inboxIQ team.
                            </p>
                            <br />
                            <Button className="bg-green-300 rounded-lg h-[35px] flex items-center">
                                Tutorials <span>{ICONS.link}</span>
                            </Button>
                        </div>

                        {/* Need help? */}
                        <div className="w-full bg-white border rounded-lg shadow-xl p-5 my-3">
                            <h5 className="font-medium">Need help?</h5>

                            <div>
                                <Link href={"/"} className="inline-block mx-2">
                                    <div className="w-max px-3 my-2 h-[33px] bg-transparent border rounded-lg flex items-center">
                                        <span className="text-xs">API Documentation</span>
                                        <span className="ml-1">{ICONS.link}</span>
                                    </div>
                                </Link>
                                <Link href={"/"} className="inline-block mx-2">
                                    <div className="w-max px-3 my-2 h-[33px] bg-transparent border rounded-lg flex items-center">
                                        <span className="text-xs">Blog</span>
                                        <span className="ml-1">{ICONS.link}</span>
                                    </div>
                                </Link>
                                <Link href={"/"} className="inline-block mx-2">
                                    <div className="w-max px-3 my-2 h-[33px] bg-transparent border rounded-lg flex items-center">
                                        <span className="text-xs">FAQ</span>
                                        <span className="ml-1">{ICONS.link}</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
