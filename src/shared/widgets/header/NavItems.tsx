import Link from "next/link";

import {navItems} from "@/app/configs/constants";

const NavItems = () => {
    return (
        <>
            <div className="w-full hidden md:flex items-center">
                {navItems.map((item: NavItems, index: number) => {
                    return (
                        <Link key={index} href={""} className="px-3 py-[6px] text-md hover:bg-gray-800 rounded-lg">
                            {item.title}
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

export default NavItems;
