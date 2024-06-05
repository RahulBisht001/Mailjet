import React from "react";

const Benefits = () => {
    return (
        <>
            <div className="flex min-h-[60vh] items-center justify-center bg-black text-white">
                <div className="w-[95%] sm:w-[70%] bg-transparent border rounded-2xl border-green-500 p-6 sm:p-10 sm:px-6">
                    <h3 className="font-Lexend font-[900] uppercase text-2xl md:text-5xl text-center w-full mb-4">
                        EVERYTHING YOU NEED TO <span className="bg-green-500 font-Lexend text-white">SUCCEED</span>{" "}
                        AVAILABLE IN A SINGLE PLATFORM
                    </h3>

                    <p className="text-sm md:text-lg text-center font-Lexend">
                        Add in your own website. No complex integrations.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Benefits;
