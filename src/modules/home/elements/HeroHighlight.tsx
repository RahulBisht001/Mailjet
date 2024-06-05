"use client";
import {motion} from "framer-motion";
import {cn} from "../../../shared/utils/cn";
// import {HeroHighlight, Highlight} from "../../../shared/utils/hero-highlight";

export function HeroHighlightDemo() {
    return (
        <div className="bg-black text-white">
            {/* <HeroHighlight> */}
            <motion.h1
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-2xl px-4 md:text-4xl lg:text-5xl font-semibold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
            >
                Everything you need to &nbsp;
                <Highlight className="text-white">succeed</Highlight>, Available at one place.
            </motion.h1>

            {/* </HeroHighlight> */}
        </div>
    );
}

const Highlight = ({children, className}: {children: React.ReactNode; className?: string}) => {
    return (
        <motion.span
            initial={{
                backgroundSize: "0% 100%",
            }}
            animate={{
                backgroundSize: "100% 100%",
            }}
            transition={{
                duration: 2,
                ease: "linear",
                delay: 0.5,
            }}
            style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                display: "inline",
            }}
            className={cn(
                `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-purple-300 to-blue-500`,
                className
            )}
        >
            {children}
        </motion.span>
    );
};
