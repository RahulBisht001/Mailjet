import {Button} from "@nextui-org/react";

const Banner = () => {
    return (
        // <section className="bg-[#f7f9fa] text-black font-Outfit">

        <section className="bg-black text-white font-Outfit">
            <div className="h-[40rem] w-full bg-black bg-grid-[#1e00ff]/[0.35]  relative flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

                {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"> */}

                {/* This is the old bg --> start */}
                <div className="mx-auto max-w-screen-xl px-2 py-2 lg:flex lg:items-center">
                    <div className="mx-auto max-w-5xl text-center">
                        <div className="inline-flex gap-1">
                            <h1 className="text-4xl font-bold sm:text-8xl mb-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400">
                                Create{" "}
                            </h1>
                            <h1 className="text-4xl font-bold sm:text-8xl mb-2 text-green-500"> Emails</h1>
                        </div>

                        <span className="font-[900] sm:block font-Outfit text-5xl sm:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 inline-block">
                            Your Audience Adore
                        </span>

                        <p className="mx-auto mt-10 px-5 text-lg text-green-500 tracking-wider">
                            Digital marketing tools to grow your audience faster.
                        </p>

                        <div className="mt-5 flex flex-wrap justify-center gap-5">
                            <Button className="w-[90%] border tracking-wider bg-green-500 px-12 py-3 text-sm rounded-lg border-green-500 text-white sm:w-auto h-12">
                                Get Started
                            </Button>
                            <Button className="w-[90%] rounded-lg tracking-wider border border-white bg-transparent px-12 py-3 text-sm text-white h-12 sm:w-auto">
                                Go To Docs
                            </Button>
                        </div>
                        <p className="text-sm my-3">Start a 30 Day Free Trial </p>
                    </div>
                </div>
                {/* This is the old bg --> end */}
                {/* </p> */}
            </div>
        </section>
    );
};

export default Banner;
