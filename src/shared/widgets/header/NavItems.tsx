import Link from "next/link";

import {navItems} from "@/app/configs/constants";

const NavItems = () => {
    return (
        <>
            <div className="w-full hidden md:flex items-center">
                {navItems.map((item: NavItems, index: number) => {
                    return (
                        <Link
                            key={index}
                            href={""}
                            className="px-3 py-[6px] text-base font-[400] text-white hover:text-green-500"
                        >
                            {item.title}
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

export default NavItems;
