"use client";

import {addSubscriber} from "@/actions/add.subscriber";
import {useSearchParams} from "next/navigation";
import {useState, FormEvent} from "react";
import toast from "react-hot-toast";

import {socials} from "../../shared/utils/social";
import Link from "next/link";
import {ICONS} from "@/shared/utils/icons";

const Page = () => {
    const [value, setValue] = useState("");

    const searchParams = useSearchParams();
    const username: string = searchParams.get("username")!;

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // await addSubscriber({email: value, username})
        // .then((res) => {
        //     if (res.error) {
        //         toast.error(res.error);
        //     } else toast.success("You have successfully subscribed to the newsletter");
        // })
        // .catch((err) => {
        //     toast.error(err.message);
        // });

        await toast.promise(addSubscriber({email: value, username}), {
            loading: "Wait while we are processing",
            success: (res) => {
                if (res.error) {
                    return res.error;
                } else return "You have successfully subscribed to the newsletter";
            },
            error: "Something went wrong",
        });

        setValue("");
    };

    return (
        <>
            <main className="font-Outfit tracking-wide bg-gradient-to-bl from-[#110827] to-[#000] flex flex-col items-center justify-center p-10 min-h-screen">
                <nav className="opacity-[.8] absolute top-5 left-5">
                    <Link href={"/dashboard"} className="inline-flex text-base items-center text-white">
                        <span>{ICONS.backArrow}</span>
                        <span>Back</span>
                    </Link>
                </nav>
                <section className="space-y-1 text-center mb-5">
                    <h2 className="text-3xl font-bold text-transparent duration-1000 bg-white cursor-default text-stroke sm:text-5xl md:text-6xl whitespace-nowrap bg-clip-text">
                        Join the waitlist for my
                    </h2>
                    <h1 className="z-10 text-4xl font-bold text-transparent duration-1000 bg-white cursor-default sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text bg-gradient-to-bl from-[#1534ad] to-[#ae00ff] animate-fade-in-3">
                        Newsletter
                    </h1>
                </section>

                <section className="w-full flex flex-col items-center justify-center text-black">
                    <form className="w-full max-w-md overflow-hidden" onSubmit={(e) => handleSubmit(e)}>
                        <div className="flex my-5 h-12">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                className="w-full px-4 py-3 focus:outline-none rounded-l-lg font-[400]"
                                placeholder="Enter your email here . . . ."
                                aria-label="Email Address"
                            />
                            <button
                                type="submit"
                                className="bg-purple-500 text-white font-normal px-3 hover:bg-purple-600 focus:outline-none rounded-r-lg flex items-center"
                            >
                                Subscribe
                            </button>
                        </div>
                        <div>
                            <p className="font-[400] mt-5 text-center text-gray-500">
                                Powered by
                                <span className="mx-2 text-green-500 text-base">inboxIQ</span>
                            </p>
                        </div>
                    </form>

                    <div className="flex items-center justify-center sm:gap-x-4 mt-5 md:w-[400px]">
                        {socials.map((social) => (
                            <a
                                key={social.id}
                                className="flex items-center justify-center flex-1 cursor-pointer group md:hover:shadow-outline-gray rounded-[9px] p-2 text-white text-3xl gap-4"
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {social.icon}
                                <div className="text-xs sm:text-sm space-y-1">
                                    <p className="text-[#ADB0B1] group-hover:text-white transition font-medium">
                                        {social.name}
                                    </p>
                                    <p className="text-[#5a5b63]">{social.handle}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>
                <footer className="text-white fixed bottom-4">Made with ❤️ By RahulB</footer>
            </main>
        </>
    );
};

export default Page;
