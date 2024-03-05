import {Button} from "@nextui-org/react";

const Banner = () => {
    return (
        <section className="bg-[#0e131c] text-white font-Lexend">
            <div className="mx-auto max-w-screen-xl px-2 py-14 lg:flex lg:items-center">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-7xl mb-2">
                        Create Emails
                    </h1>
                    <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text font-extrabold text-transparent  sm:block font-Lexend text-3xl sm:text-5xl">
                        That Your Audience Loves
                    </span>

                    <p className="mx-auto mt-4 px-5 max-w-xl sm:text-md relaxed font-Lexend text-gray-100">
                        Digital marketing tools to grow your audience faster and drive revenue smarter.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-5">
                        <Button className="w-[90%] border tracking-wider border-[#7856ff] bg-[#7856ff] px-12 py-3 text-sm text-white rounded-lg hover:text-black focus:outline-none focus:ring active:text-opacity-75 sm:w-auto h-12">
                            Get Started
                        </Button>
                        <Button className="w-[90%] rounded-lg tracking-wider border border-[#7856ff] px-12 py-3 text-sm text-white bg-transparent h-12 sm:w-auto">
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
