import Link from "next/link";

import Logo from "./Logo";
import NavItems from "./NavItems";
import Toolbar from "./Toolbar";

const Header = () => {
    return (
        <>
            <header className="w-full sticky top-0 left-0 z-[999] px-10 pt-2 flex items-center justify-between h-[60px] font-Lexend shadow-md border-b border-b-gray-800 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                    <Link href={"/"}>
                        <Logo />
                    </Link>
                </div>
                <div>
                    <NavItems />
                </div>
                <div className="flex items-center gap-3">
                    <Toolbar />
                </div>
            </header>
        </>
    );
};

export default Header;
