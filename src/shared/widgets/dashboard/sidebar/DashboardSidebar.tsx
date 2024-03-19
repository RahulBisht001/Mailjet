"use clint";
import {useUser} from "@clerk/nextjs";

import {ICONS} from "@/shared/utils/icons";
import DashboardItems from "./DashboardItems";
import UserPlan from "./UserPlan";

const DashboardSidebar = () => {
    const {user} = useUser();
    return (
        <>
            <div className="p-2">
                <div className="p-2 py-3 mb-5 flex items-center bg-[#f5f5f5f5] rounded-lg">
                    <span className="text-2xl text-green-500">{ICONS.home}</span>
                    <h5 className="pl-3 capitalize text-md">{user?.username}</h5>
                </div>
                <div>
                    <DashboardItems />
                    <UserPlan />
                    <DashboardItems bottomContent={true} />
                </div>
            </div>
        </>
    );
};

export default DashboardSidebar;
