"use client";

import Link from "next/link";
import {useSearchParams} from "next/navigation";

import {ICONS} from "@/shared/utils/icons";
import Emaileditor from "@/shared/components/editor/Emaileditor";

const Page = () => {
    const searchParams = useSearchParams();
    const subject: string = searchParams.get("subject")!;

    const subjectTitle = subject.replace(/-/g, " ");

    return (
        <>
            <div className="w-full flex bg-[#f7f7f7] font-Lexend">
                <div className="w-full p-5 rounded-r-xl bg-white">
                    {/* Back arrow */}
                    <Link href={"/dashboard/write"} className="opacity-[.7] w-min flex text-lg items-center">
                        <span>{ICONS.backArrow}</span>
                        <span>Exit</span>
                    </Link>

                    {/* Email Editor */}
                    <div className="my-5">
                        <Emaileditor subjectTitle={subjectTitle} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
