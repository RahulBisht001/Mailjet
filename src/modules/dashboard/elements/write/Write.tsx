"use client";

import {useState} from "react";
import toast from "react-hot-toast";
import {Button} from "@nextui-org/react";

import {useRouter} from "next/navigation";

import {ICONS} from "@/shared/utils/icons";

const Write = () => {
    const [emailTitle, setEmailTitle] = useState("");
    const [open, setOpen] = useState(false);

    const router = useRouter();

    const handleCreateNewEmail = () => {
        if (emailTitle.length === 0) {
            toast.error("Email Subject is required");
        } else {
            /*
             * This formattedTittle is required as we are
             * creating dynamic url for each email
             */
            const formattedTitle = emailTitle.replace(/\s+/g, "-").replace(/&/g, "-");
            router.push(`/dashboard/new-email?subject=${formattedTitle}`);
        }
    };

    return (
        <>
            <div className="w-full flex p-5 flex-wrap gap-6 relative">
                <div
                    className="w-[200px] h-[200px] bg-slate-100 flex flex-col  items-center justify-center  rounded-lg border cursor-pointer"
                    onClick={() => setOpen(!open)}
                >
                    <span className="block text-center text-2xl mb-3">{ICONS.plus}</span>
                    <h5 className="text-md">Create New</h5>
                </div>

                {open && (
                    <>
                        <div className="absolute flex items-center justify-center top-0 left-0 bg-[#00000028] h-screen w-full">
                            <div className="w-[600px] p-5 bg-white rounded-xl shadow relative">
                                <div className="absolute top-3 right-3">
                                    <span className="text-lg cursor-pointer" onClick={() => setOpen(!open)}>
                                        {ICONS.cross}
                                    </span>
                                </div>
                                <h5 className="text-md text-gray-700">Enter your email subject *</h5>
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="border w-full my-2 h-[38px] px-2 outline-none rounded-md"
                                    value={emailTitle}
                                    onChange={(e) => setEmailTitle(e.target.value)}
                                />
                                <Button
                                    className="rounded-md text-sm bg-green-400 mt-3 h-9"
                                    onClick={handleCreateNewEmail}
                                >
                                    Continue
                                </Button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Write;
