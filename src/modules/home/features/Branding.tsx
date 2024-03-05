import Marquee from "react-fast-marquee";
import Image from "next/image";

import {partners} from "@/app/configs/constants";

const Branding = () => {
    return (
        <>
            <div className="border-t border-b border-[#000] py-10 font-Poppins">
                <h3 className="text-lg md:text-lg text-center max-w-3xl mx-auto font-[500] z-20 relative">
                    Created by RahulB
                </h3>

                <div className="w-full text-center pt-1">
                    <h3 className="capitalize bg-[#f88be2] text-black rounded-lg p-2 text-md md:text-md text-center inline-block font-Lexend font-semibold z-20 relative">
                        now powering the World&apos;s top newsletters.
                    </h3>
                </div>
                <Marquee className="w-full flex my-2" speed={200}>
                    {partners.map((item: PartnersTypes, index: number) => (
                        <Image
                            key={index}
                            src={item.url}
                            alt="our partners"
                            width={100}
                            height={100}
                            className={`md:mx-8 w-[150px] md:w-[220px] h-full`}
                        />
                    ))}
                </Marquee>
            </div>
        </>
    );
};

export default Branding;
