"use client";

import {useEffect, useState} from "react";
import {getSubscribers} from "../../actions/get.subscribers";
import {useClerk} from "@clerk/nextjs";

const useSubscribersData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const {user} = useClerk();

    useEffect(() => {
        GetSubscribersHandler();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    const GetSubscribersHandler = async () => {
        await getSubscribers({newsLetterOwnerId: user?.id!})
        .then((res: any) => {
            setData(res);
            setLoading(false);
        })
        .catch((err) => {
            setLoading(false);
            console.log(err);
        });
    };
    return {data, loading};
};

export default useSubscribersData;
