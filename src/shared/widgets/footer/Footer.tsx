import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <>
            <footer className="w-full font-Lexend bg-black text-white pt-10 mt-32">
                <div className="w-[95%] md:flex m-auto py-5">
                    <div className="w-full md:w-[40%]">
                        <Link href={"/"}>
                            <div className="inline-flex items-center">
                                <Image src={"/SendGrid.svg"} alt="logo" width={40} height={40} />
                                <div className="inline-flex">
                                    <h1 className="text-xl text-green-400 font-Overpass font-semibold">inbox</h1>
                                    <h1 className="text-xl text-green-500 font-Overpass font-semibold">IQ</h1>
                                </div>
                            </div>
                        </Link>
                        <p className="text-xs sm:text-sm">Get inboxIQ updates delivered directly to your inbox</p>
                        <br />
                        <div className="flex items-center w-full">
                            <input
                                type="email"
                                name=""
                                id=""
                                placeholder="Enter your email"
                                className="bg-transparent w-full md:w-[45%] border h-[40px] px-2 rounded-l-lg outline-none"
                            />
                            <button className="w-[90px] cursor-pointer rounded-r-lg h-[41px] bg-green-500 text-md outline-none">
                                submit
                            </button>
                        </div>
                        <br />
                        <p className="text-xs">
                            By subscribing you agree to with our Privacy Policy and provide consent to receive updates
                            from our company.
                        </p>
                    </div>
                    <div className="w-full md:w-[60%] flex md:justify-end justify-center py-5 md:py-0">
                        <div className="w-full md:w-[50%] flex justify-around">
                            <div>
                                <ul>
                                    <li className="text-md pb-4 cursor-pointer hover:text-green-500">Create</li>
                                    <li className="text-md pb-4 cursor-pointer hover:text-green-500">Write</li>
                                    <li className="text-md pb-4 cursor-pointer hover:text-green-500">Grow</li>
                                    <li className="text-md pb-4 cursor-pointer hover:text-green-500">Monetize</li>
                                    <li className="text-md pb-4 cursor-pointer hover:text-green-500">Analyze</li>
                                </ul>
                            </div>

                            <div>
                                <ul>
                                    <li className="text-md pb-4 cursor-pointer hover:text-green-500">Careers</li>
                                    <li className="text-md pb-4 cursor-pointer hover:text-green-500">Pricing</li>
                                    <li className="text-md pb-4 cursor-pointer hover:text-green-500">Shop</li>
                                    <li className="text-md pb-4 cursor-pointer hover:text-green-500">Compare</li>
                                    <li className="text-md pb-4 cursor-pointer hover:text-green-500">Love</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-md text-center pb-10">© 2024 inboxIQ, Inc. All rights reserved.</p>
            </footer>
        </>
    );
};

export default Footer;
