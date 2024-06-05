"use client";
import React from "react";
import {PinContainer} from "../../../shared/utils/3d-pin";
import Image from "next/image";

const Developer = () => {
    return (
        <>
            <div className="h-[23rem] w-full flex items-center justify-center text-white bg-black font-Outfit">
                <PinContainer title="www.rahulbisht.com" href="https://www.rahulbisht.com">
                    <div className="flex basis-full flex-col p-0 text-slate-100/50 sm:basis-1/2 w-[18rem] h-[16rem] ">
                        <h1 className="max-w-xs text-lg text-slate-100">Know The Developer</h1>
                        <div className="!m-0 !p-0 text-sm">
                            <span className="text-slate-500 ">Rahul Bisht is a Full stack Developer.</span>
                        </div>
                        <div className="w-full rounded-lg mt-4 flex justify-center align-bottom">
                            <Image src="/RahulB.png" alt="" width={200} height={200} className="rahul-shadow" />
                        </div>
                    </div>
                </PinContainer>
            </div>
            <h1 className="text-white bg-black text-center">Just hover it and see the magic! 👆</h1>
        </>
    );
};

export default Developer;
