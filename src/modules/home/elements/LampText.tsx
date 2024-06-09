"use client";
import React from "react";
import {motion} from "framer-motion";
import {LampContainer} from "../../../shared/utils/lamp";

export function LampText() {
    return (
        <LampContainer>
            <motion.h1
                initial={{opacity: 0.5, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="mt-8 bg-gradient-to-br from-slate-300 to-slate-400 py-4 bg-clip-text text-center text-4xl font-medium tracking-normal text-transparent md:text-7xl"
            >
                Build emails <br /> the right way
            </motion.h1>
        </LampContainer>
    );
}