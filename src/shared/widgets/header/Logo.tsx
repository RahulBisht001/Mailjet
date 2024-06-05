import Image from "next/image";
import React from "react";

const Logo = () => {
    return (
        <div className="relative flex items-center">
            <Image src={"/SendGrid.svg"} alt="logo" width={55} height={55} />
            <div className="inline-flex">
                <h1 className="text-2xl text-green-400 font-Outfit font-semibold tracking-wider">inbox</h1>
                <h1 className="text-2xl text-green-500 font-Outfit font-semibold tracking-wider">IQ</h1>
            </div>
        </div>
    );
};

export default Logo;
