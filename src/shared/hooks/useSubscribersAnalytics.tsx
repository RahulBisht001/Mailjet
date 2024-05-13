"use client";

import {useEffect, useState} from "react";
import {subscribersAnalytics} from "@/actions/subscribers.analytics";

const useSubscribersAnalytics = () => {
    const [subscribersData, setSubscriberData] = useState<any>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        SubscribersAnalyticsHandler();
    }, []);

    const SubscribersAnalyticsHandler = async () => {
        await subscribersAnalytics()
        .then((res: any) => {
            setSubscriberData(res);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
        });
    };

    return {subscribersData, loading};
};

export default useSubscribersAnalytics;
