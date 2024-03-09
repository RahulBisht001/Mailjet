import React from "react";

const Benefits = () => {
    return (
        <>
            <div className="flex min-h-[60vh] items-center justify-center mt-2">
                <div className="w-[95%] sm:w-[70%] bg-transparent text-[#ffffff] border rounded-2xl border-blue-500 p-6 sm:p-10 sm:px-6">
                    <h3 className="font-Lexend font-[800] uppercase text-2xl md:text-5xl text-center w-full mb-4">
                        EVERYTHING YOU NEED TO <span className="bg-[#FFC83E] font-Lexend text-black">SUCCEED</span>{" "}
                        AVAILABLE IN A SINGLE PLATFORM
                    </h3>

                    <p className="text-md md:text-xl text-center font-Lexend">
                        Add in your own website. No complex integrations.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Benefits;
