"use client";
import {useUser} from "@clerk/nextjs";
import React from "react";

const Main = () => {
    const {user} = useUser();

    return (
        <>
            <div className="p-5 w-full">
                <h1 className="text-2xl bg-[#f9fafb] font-medium text-surface-900">Hi!👋 {user?.fullName}</h1>
            </div>
        </>
    );
};

export default Main;
