import {Button} from "@nextui-org/react";

const Banner = () => {
    return (
        <section className="bg-[#f7f9fa] text-black font-Lexend">
            <div className="mx-auto max-w-screen-xl px-2 py-14 lg:flex lg:items-center">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="inline-flex gap-1">
                        <h1 className="text-4xl font-extrabold sm:text-7xl mb-2">Create </h1>
                        <h1 className="text-4xl font-extrabold sm:text-7xl mb-2 text-green-500"> Emails</h1>
                    </div>

                    <span className="font-extrabold sm:block font-Lexend text-3xl sm:text-6xl">
                        That Your Audience💖
                    </span>

                    <p className="mx-auto mt-4 px-5 text-lg text-green-500">
                        Digital marketing tools to grow your audience faster and drive revenue smarter.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-5">
                        <Button className="w-[90%] border tracking-wider bg-green-500 px-12 py-3 text-sm rounded-lg text-black sm:w-auto h-12">
                            Get Started
                        </Button>
                        <Button className="w-[90%] rounded-lg tracking-wider border border-green-500 px-12 py-3 text-sm text-green-500  bg-transparent h-12 sm:w-auto">
                            Go To Docs
                        </Button>

                        {/* <button className="block w-[90%] border tracking-wider border-[#7856ff] bg-[#7856ff] px-12 py-3 text-md text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring  rounded-lg active:text-opacity-75 sm:w-auto">
                            Get Started
                        </button> */}

                        {/* <button className="block w-[90%] rounded-lg tracking-wider border border-[#7856ff] px-12 py-3 text-md text-[#7856ff] hover:bg-[#7856ff]focus:outline-none focus:ring active:bg-[#7856ff] sm:w-auto">
                            Learn More
                        </button> */}
                    </div>
                    <p className="text-sm my-3">Start a 30 Day Free Trial </p>
                </div>
            </div>
        </section>
    );
};

export default Banner;
