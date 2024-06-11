import React from "react";
import {ICONS} from "@/shared/utils/icons";

const Page = () => {
    return (
        <>
            {/* <section className="w-full h-screen overflow-y-auto font-Outfit p-5 text-gray-900">
                <h1 className="text-4xl text-center mx-5 text-transparent bg-transparent bg-clip-text bg-gradient-to-t from-blue-500 to-green-400 font-Poppins font-semibold">
                    inbox.ai
                </h1>

                <div className="flex justify-center">
                    <p className="mt-4 text-sm text-center mx-5 tracking-wide w-[80%]">
                        Welcome to inboxAI! Harness the power of our AI helper bot to generate captivating email ideas
                        that boost engagement and extend your reach.
                    </p>
                </div>

                <div className="p-4 flex justify-center flex-col items-center mt-3">
                    <div className="w-[80%] flex gap-8">
                        <div className="tracking-wider flex flex-col py-4 px-2 rounded-xl border border-slate-100 bg-slate-100 cursor-pointer ">
                            <span className="text-xl pb-3 text-blue-500 font-bold">{ICONS.analytics}</span>
                            <span className="">Write a Welcome Email</span>
                        </div>
                        <div className="tracking-wider flex flex-col py-4 px-2 rounded-xl border border-slate-100 bg-slate-100 cursor-pointer ">
                            <span className="text-xl pb-3 text-green-400 font-bold">{ICONS.write}</span>
                            <span className="">Write a Thank you Email</span>
                        </div>
                        <div className="tracking-wider flex flex-col py-4 px-2 rounded-xl border border-slate-100 bg-slate-100 cursor-pointer ">
                            <span className="text-xl pb-3 font-bold text-red-500">{ICONS.cross}</span>
                            <span className="">Do and Don&apos;t of mail</span>
                        </div>
                        <div className="tracking-wider flex flex-col py-4 px-2 rounded-xl border border-slate-100 bg-slate-100 cursor-pointer ">
                            <span className="text-xl pb-3 text-yellow-500">{ICONS.audience}</span>
                            <span className="">5 fun facts about emails</span>
                        </div>
                    </div>

                    <div className="w-[80%] bottom-5">
                        <div className="flex w-full border border-green-500 rounded-xl overflow-hidden">
                            <input
                                type="text"
                                className="flex-grow p-3 outline-none"
                                placeholder="Type your query..."
                            />
                            <button className="w-[10%] bg-green-500 text-white hover:bg-green-600">Ask AI</button>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="w-full h-screen overflow-y-auto font-Outfit p-5 text-gray-900">
                <header>
                    <h1 className="text-4xl text-center mx-5 text-transparent bg-transparent bg-clip-text bg-gradient-to-t from-blue-500 to-green-400 font-Poppins font-semibold">
                        inbox.ai
                    </h1>
                </header>

                <div className="flex justify-center">
                    <p className="mt-4 text-sm text-center mx-5 tracking-wide w-[80%]">
                        Welcome to inboxAI! Harness the power of our AI helper bot to generate captivating email ideas
                        that boost engagement and extend your reach.
                    </p>
                </div>

                <main className="p-4 flex justify-between h-[73vh] flex-col items-center mt-3">
                    <section className="w-[80%] flex gap-8">
                        <article className="tracking-wider flex flex-col py-4 px-2 rounded-xl border border-slate-100 bg-slate-100 cursor-pointer">
                            <span className="text-xl pb-3 text-blue-500 font-bold">{ICONS.analytics}</span>
                            <span>Write a Welcome Email</span>
                        </article>
                        <article className="tracking-wider flex flex-col py-4 px-2 rounded-xl border border-slate-100 bg-slate-100 cursor-pointer">
                            <span className="text-xl pb-3 text-green-400 font-bold">{ICONS.write}</span>
                            <span>Write a Thank You Email</span>
                        </article>
                        <article className="tracking-wider flex flex-col py-4 px-2 rounded-xl border border-slate-100 bg-slate-100 cursor-pointer">
                            <span className="text-xl pb-3 font-bold text-red-500">{ICONS.cross}</span>
                            <span>Do&apos;s and Don&apos;ts of Mail</span>
                        </article>
                        <article className="tracking-wider flex flex-col py-4 px-2 rounded-xl border border-slate-100 bg-slate-100 cursor-pointer">
                            <span className="text-xl pb-3 text-yellow-500">{ICONS.audience}</span>
                            <span>5 Fun Facts About Emails</span>
                        </article>
                    </section>

                    <section className="w-[80%] mt-3">
                        <form className="flex w-full border border-green-500 rounded-xl overflow-hidden">
                            <input
                                type="text"
                                className="flex-grow p-3 outline-none"
                                placeholder="This feature is currently under development"
                                aria-label="Query Input"
                                // value={"This Feature is Currently Under Development"}
                                readOnly
                            />
                            <button type="submit" className="w-[10%] bg-green-500 text-white hover:bg-green-600">
                                Ask AI
                            </button>
                        </form>
                    </section>
                </main>
            </section>
        </>
    );
};

export default Page;
