"use client";

import {addSubscriber} from "@/actions/add.subscriber";
import {useSearchParams} from "next/navigation";
import {useState, FormEvent} from "react";
import toast from "react-hot-toast";
import {Button} from "@nextui-org/react";

const Page = () => {
    const [value, setValue] = useState("");
    const [loading, setLoading] = useState(false);

    const searchParams = useSearchParams();
    const username: string = searchParams.get("username")!;

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        await addSubscriber({email: value, username})
        .then((res) => {
            if (res.error) {
                toast.error(res.error);
            } else toast.success("You have successfully subscribed to the newsletter");
            setLoading(false);
        })
        .catch((err) => {
            toast.error(err.message);
        });

        setValue("");
    };

    return (
        <>
            <div className="w-full flex flex-col items-center justify-center h-screen font-Lexend font-semibold">
                <div className="area">
                    <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <div className="flex flex-col items-center justify-center h-screen">
                            <div>
                                <h1 className="text-lg capitalize pb-5 font-[500] inline-flex">
                                    {username} Newsletter
                                </h1>
                            </div>

                            <form
                                className="w-full max-w-md border overflow-hidden rounded-xl p-3 py-5 border-gray-400"
                                onSubmit={(e) => handleSubmit(e)}
                            >
                                <input
                                    type="email"
                                    name=""
                                    id=""
                                    required
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    className="w-full px-4 py-3 focus:outline-green-500 outline-2 rounded-lg font-[400] border border-green-500 "
                                    placeholder="Enter your email here . . . ."
                                />

                                <div className="flex justify-end">
                                    {" "}
                                    {/* Add a parent container with flex and justify-end */}
                                    <Button
                                        type="submit"
                                        isLoading={loading}
                                        className="px-5 mt-5 bg-green-500 text-white font-[400] py-4 hover:bg-green-600 focus:outline-none rounded-lg h-10 flex items-center"
                                        spinner={
                                            <svg
                                                className="animate-spin h-5 w-5 text-current"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                />
                                                <path
                                                    className="opacity-75"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        }
                                    >
                                        {loading ? "Working" : "Subscribe"}
                                    </Button>
                                </div>

                                <p className="font-Lexend font-[400] mt-10 text-center text-gray-500">
                                    Powered by inboxIQ
                                </p>
                            </form>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Page;
