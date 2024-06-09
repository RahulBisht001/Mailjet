"use client";

import useSubscribersAnalytics from "@/shared/hooks/useSubscribersAnalytics";
import {ICONS} from "@/shared/utils/icons";

const DashboardOverviewCard = () => {
    const {subscribersData, loading} = useSubscribersAnalytics();

    let lastMonthSubscribers = !loading && subscribersData?.last7Months[subscribersData?.last7Months?.length - 1];

    let comparePercentage = 0;

    let previousLastMonthSubscribers =
        !loading && subscribersData?.last7Months[subscribersData?.last7Months?.length - 2];

    console.log("previousLastMonthSubscribers", previousLastMonthSubscribers);
    console.log("lastMonthSubscribers", lastMonthSubscribers);

    if (previousLastMonthSubscribers.count > 0) {
        comparePercentage =
            ((lastMonthSubscribers.count - previousLastMonthSubscribers.count) / previousLastMonthSubscribers.count) *
            100;
    } else {
        comparePercentage = lastMonthSubscribers.count * 100;
    }

    comparePercentage = parseFloat(comparePercentage.toFixed(2));

    return (
        <div className="w-full xl:py-2 flex bg-white border rounded-lg">
            {/* subscribers */}
            <div className="w-[33.33%] border-r p-4 py-2 text-md">
                <h5 className="text-md">Subscribers</h5>
                <div className="w-full flex items-center justify-between">
                    <span className="font-medium pt-2 text-sm">{loading ? "..." : lastMonthSubscribers.count}</span>
                    {comparePercentage &&
                        (comparePercentage > 0 ? (
                            <div className="h-[30px] flex p-2 items-center bg-[#DCFCE6] rounded-full">
                                <span className="text-[#21C55D]">{ICONS.topArrow}</span>
                                <span className="text-xs pl-1">{comparePercentage} %</span>
                            </div>
                        ) : (
                            <div className="h-[30px] flex p-2 items-center bg-[#ff8d8d89] rounded-full">
                                <span className="text-[#ff4949]">{ICONS.downArrow}</span>
                                <span className="text-xs pl-1">{comparePercentage} %</span>
                            </div>
                        ))}
                </div>
                <small className="block text-sm opacity-[.7] pt-2">from 0 (last 4 weeks)</small>
            </div>
            {/* Open Rate */}
            <div className="w-[33.33%] border-r p-4 py-2 text-md">
                <h5 className="text-md">Open Rate</h5>
                <div className="w-full flex items-center justify-between">
                    <span className="font-medium pt-2 text-sm">0</span>
                    <div className="h-[30px] flex p-3 items-center bg-[#F3F4F6] rounded-full">
                        <span>-</span>
                        <span className="text-xs pl-1">0%</span>
                    </div>
                </div>
                <small className="block text-sm opacity-[.7] pt-2">from 0 (last 4 weeks)</small>
            </div>
            {/* Click Rate */}
            <div className="w-[33.33%] p-4 py-2 text-md">
                <h5 className="text-md">Click Rate</h5>
                <div className="w-full flex items-center justify-between">
                    <span className="font-medium pt-2 text-sm">0</span>
                    <div className="h-[30px] flex p-3 items-center bg-[#F3F4F6] rounded-full">
                        <span>-</span>
                        <span className="text-xs pl-1">0%</span>
                    </div>
                </div>
                <small className="block text-sm opacity-[.7] pt-2">from 0 (last 4 weeks)</small>
            </div>
        </div>
    );
};

export default DashboardOverviewCard;
