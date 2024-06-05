import React from "react";

const CheckListItem = ({msg}: {msg: string}) => {
    return (
        <>
            <li className="flex items-center gap-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 text-green-500"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-gray-500"> {msg}</span>
            </li>
        </>
    );
};

const CrossListItem = ({msg}: {msg: string}) => {
    return (
        <>
            <li className="flex items-center gap-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 text-red-700"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-gray-700"> {msg}</span>
            </li>
        </>
    );
};

const Pricing = () => {
    return (
        <>
            <div className="font-Lexend max-w-screen-xl px-6 py-8 lg:px-36 lg:py-16 bg-black text-white">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
                    <div className="rounded-2xl border border-green-500 shadow-xl lg:relative lg:top-8">
                        <div className="p-6 sm:px-8">
                            <h2 className="text-lg font-medium text-green-500">Starter</h2>

                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold text-green-500 sm:text-4xl"> 20$ </strong>
                                <span className="text-sm font-medium text-green-600">/month</span>
                            </p>

                            <a
                                className="mt-4 block rounded-lg border border-green-500 bg-green-500 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-green-500 focus:outline-none focus:ring active:text-green-500 sm:mt-6"
                                href="#"
                            >
                                Get Started
                            </a>
                        </div>

                        <div className="p-6 sm:px-8">
                            <p className="text-lg font-medium text-green-500 sm:text-xl">What included:</p>

                            <ul className="mt-2 space-y-2 sm:mt-4">
                                <CheckListItem msg={"Up to 2,500 subscribers"} />
                                <CheckListItem msg={"Unlimited sends"} />
                                <CheckListItem msg={"Custom newsletters"} />
                                <CheckListItem msg={"Campaign analytics"} />
                            </ul>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-green-500 shadow-xl">
                        <div className="p-6 sm:px-8">
                            <h2 className="text-lg font-medium text-green-500">Premium</h2>

                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold text-green-500 sm:text-4xl"> 30$ </strong>
                                <span className="text-sm font-medium text-green-600">/month</span>
                            </p>

                            <a
                                className="mt-4 block rounded-lg border border-green-500 bg-green-500 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-green-500 focus:outline-none focus:ring active:text-green-500 sm:mt-6"
                                href="#"
                            >
                                Get Started
                            </a>
                        </div>

                        <div className="p-6 pt-0 sm:px-8">
                            <p className="text-lg font-medium text-green-500 sm:text-xl">What included:</p>
                            <p className="text-sm text-green-500 sm:text-md mt-5">Everything in Free </p>

                            <ul className="mt-2 space-y-2 sm:mt-4">
                                <CheckListItem msg={"Up to 10,000 subscribers"} />
                                <CheckListItem msg={"API access"} />
                                <CheckListItem msg={"Exclusive Newsletter Community"} />
                                <CheckListItem msg={"Survey forms"} />
                            </ul>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-green-500 shadow-xl lg:relative lg:top-8">
                        <div className="p-6 sm:px-8">
                            <h2 className="text-lg font-medium text-green-500">Enterprise</h2>

                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold text-green-500 sm:text-4xl"> 100$ </strong>

                                <span className="text-sm font-medium text-green-600">/month</span>
                            </p>

                            <a
                                className="mt-4 block rounded-lg border border-green-500 bg-green-500 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-green-500 focus:outline-none focus:ring active:text-green-500 sm:mt-6"
                                href="#"
                            >
                                Get Started
                            </a>
                        </div>

                        <div className="p-6 pt-0 sm:px-8">
                            <p className="text-lg font-medium text-green-500 sm:text-xl">What included:</p>

                            <p className="text-sm text-green-500 sm:text-md mt-5">Everything in Free and Pro</p>

                            <ul className="mt-2 space-y-2 sm:mt-4">
                                <CheckListItem msg={"Up to 100,000 subscribers"} />
                                <CheckListItem msg={"API access"} />
                                <CheckListItem msg={"Priority support"} />
                                <CheckListItem msg={"Ad Network"} />
                                <CheckListItem msg={"automation"} />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pricing;
