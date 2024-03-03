import Image from "next/image";
import React from "react";

const Logo = () => {
    return (
        <div className="relative flex items-center">
            <Image src={"/Mailjet-red.svg"} alt="logo" width={130} height={130} />
        </div>
    );
};

export default Logo;
