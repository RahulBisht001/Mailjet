"use client";

import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import {Button} from "@nextui-org/react";
import {useClerk} from "@clerk/nextjs";
import {useRouter} from "next/navigation";

import {getEmails} from "@/actions/get.emails";
import {ICONS} from "@/shared/utils/icons";
import Link from "next/link";

const Write = () => {
    const [emailTitle, setEmailTitle] = useState("");
    const [open, setOpen] = useState(false);
    const [emails, setEmails] = useState<any>([]);

    const router = useRouter();
    const {user} = useClerk();

    useEffect(() => {
        findEmails();
    }, [user]);

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

    const deleteHandler = async (id: string) => {};

    const findEmails = async () => {
        await getEmails({newsLetterOwnerId: user?.id!})
        .then((res: any) => {
            const emails = JSON.parse(res)!;
            setEmails(emails);
        })
        .catch((err) => {
            console.log(err);
            toast.error("Something went wrong");
        });
    };

    return (
        <>
            <div className="w-full flex p-5 mx-5 flex-wrap gap-7 relative h-screen overflow-y-auto">
                <div
                    className="w-[250px] h-[300px]  flex flex-col  items-center justify-center  rounded-xl border border-blue-400 cursor-pointer"
                    onClick={() => setOpen(!open)}
                >
                    <span className="block text-center text-2xl mb-3 text-blue-500">{ICONS.folder}</span>
                    <h5 className="text-base text-blue-500">Create New Email</h5>
                </div>

                {/* Saved email drafts */}
                {emails &&
                    emails.map((email: any, index: number) => {
                        const formattedTitle = email?.title?.replace(/\s+/g, "-").replace(/&/g, "-");

                        return (
                            <>
                                <div
                                    key={index}
                                    className="w-[250px] h-[300px] z-[0] relative bg-blue-100 bg-opacity-[0.4] flex flex-col items-center justify-center rounded-xl border border-blue-200 cursor-pointer"
                                >
                                    <span
                                        className="absolute block z-20 right-2 top-2 text-2xl cursor-pointer text-red-500"
                                        onClick={() => deleteHandler(email?._id)}
                                    >
                                        {ICONS.delete}
                                    </span>
                                    <Link
                                        href={`/dashboard/new-email?subject=${formattedTitle}`}
                                        className="text-base text-slate-800"
                                    >
                                        {email.title}
                                    </Link>
                                </div>
                            </>
                        );
                    })}

                {open && (
                    <>
                        <div className="absolute flex items-center justify-center top-0 left-0 bg-[#00000028] h-screen w-full">
                            <div className="w-[600px] p-5 bg-white rounded-xl shadow relative">
                                <div className="absolute top-3 right-3">
                                    <span className="text-lg cursor-pointer" onClick={() => setOpen(!open)}>
                                        {ICONS.cross}
                                    </span>
                                </div>
                                <h5 className="text-base text-gray-700">Enter your email subject *</h5>
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
