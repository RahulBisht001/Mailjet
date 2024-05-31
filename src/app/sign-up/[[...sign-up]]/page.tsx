"use client";

import {SignUp} from "@clerk/nextjs";

export default function Page() {
    return (
        <>
            <div className="w-full h-screen flex items-center justify-center font-Lexend">
                <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
            </div>
        </>
    );
}
