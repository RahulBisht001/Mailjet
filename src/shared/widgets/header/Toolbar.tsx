"use client";

import {useUser} from "@clerk/nextjs";
import {Button} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const Toolbar = () => {
    const {user} = useUser();

    return (
        <>
            <Button className="px-4 py-2 text-sm bg-[#7856ff] text-white rounded-lg h-fit">
                &nbsp;Start Trial&nbsp;
            </Button>
            {user ? (
                <>
                    <Link href={"/dashboard"}>
                        <Image src={user?.imageUrl} alt="User Image" width={35} height={35} className="rounded-full" />
                    </Link>
                </>
            ) : (
                <>
                    <Link href={"/sign-in"}>Login</Link>
                </>
            )}
        </>
    );
};

export default Toolbar;
