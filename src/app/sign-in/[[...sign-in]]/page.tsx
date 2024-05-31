"use client";

import {SignIn} from "@clerk/nextjs";

export default function Page() {
    return (
        <>
            <div className="w-full flex h-screen items-center justify-center font-Lexend">
                <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
            </div>
        </>
    );
}
