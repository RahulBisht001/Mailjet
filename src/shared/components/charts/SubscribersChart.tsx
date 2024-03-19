"use client";

import {useEffect, useState} from "react";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from "recharts";
import {subscribersData} from "../../../app/configs/constants";

interface subscribersAnalyticsData {
    month: number;
    count: number;
}

const SubscribersChart = () => {
    const [subscribersData, setSubscriberData] = useState<any>([]);

    const data = [
        {
            month: "Jan 2024",
            count: 2400,
        },
        {
            month: "Feb 2024",
            count: 1398,
        },
        {
            month: "March 2024",
            count: 9800,
        },
        {
            month: "April 2024",
            count: 3908,
        },
        {
            month: "May 2024",
            count: 4800,
        },
        {
            month: "Jun 2024",
            count: 3800,
        },
        {
            month: "July 2024",
            count: 4300,
        },
    ];

    return (
        <>
            <div className="my-5 p-5 border rounded-lg bg-white w-full md:h-[55vh] xl:h-[60vh]">
                <div className="w-full flex">
                    <h3 className="font-medium">Active Subscribers</h3>
                </div>
                <div className="flex w-full items-center justify-between">
                    <p className="opacity-[.5] text-sm">Shows all active subscribers</p>
                    <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-[#00c75e]" />
                        <span className="pl-2 text-sm opacity-[.7]">Subscribers</span>
                    </div>
                </div>
                {/* {loading ? (
                    <div className="h-[85%] flex items-center justify-center w-full">
                        <h5>Loading...</h5>
                    </div>
                ) : ( */}
                <ResponsiveContainer width="100%" height={"85%"} className={"mt-5 text-xs"}>
                    <LineChart
                        width={500}
                        height={200}
                        data={data}
                        syncId="anyId"
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="count" stroke="#00c75e" fill="#00c75e" />
                    </LineChart>
                </ResponsiveContainer>
                {/* )} */}
            </div>
        </>
    );
};

export default SubscribersChart;
