"use client";

import {Button} from "@nextui-org/react";
import Link from "next/link";

const Toolbar = () => {
    return (
        <>
            <Button className="px-4 py-2 text-sm bg-[#7856ff] text-white rounded-lg h-fit">
                &nbsp;Start Trial&nbsp;
            </Button>
            <Link href={"/sign-up"}>Login</Link>
        </>
    );
};

export default Toolbar;
