"use client";

import {Button} from "@nextui-org/react";
import Link from "next/link";

const Toolbar = () => {
    return (
        <>
            <Button className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg h-fit">Start Trial</Button>
            <Link href={"/sign-up"}>Login</Link>
        </>
    );
};

export default Toolbar;
