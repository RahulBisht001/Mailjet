// import {manageSubscription} from "@/actions/manage.subscription";
// import useGetMembership from "@/shared/hooks/useGetMembership";
import useSubscribersData from "@/shared/hooks/useSubscribersData";

import {useRouter} from "next/navigation";
import {Slider} from "@nextui-org/slider";

import {ICONS} from "@/shared/utils/icons";

const UserPlan = () => {
    const {data, loading} = useSubscribersData();
    // const {data: membershipData, loading: membershipLoading} = useGetMembership();
    const history = useRouter();

    const handleManage = async () => {
        // await manageSubscription({
        //     customerId: membershipData?.stripeCustomerId,
        // }).then((res: any) => {
        //     history.push(res);
        // });
    };

    return (
        <div className="w-full my-3 p-3 bg-[#c0feda] rounded-lg shadow-xl cursor-pointer">
            <div className="w-full flex items-center">
                {/* <h5 className="text-lg font-medium">{membershipLoading ? "..." : "GROW"} Plan</h5> */}
                <div
                    className="w-[95px] shadow mb-2 cursor-pointer h-[32px] flex justify-center items-center space-x-1 rounded-lg bg-[#5484ff]"
                    onClick={handleManage}
                >
                    <span className="text-white text-xl">{ICONS.electric}</span>
                    <span className="text-white text-sm">Upgrade</span>
                </div>
            </div>
            <h4 className="text-sm">Total subscribers</h4>
            <Slider aria-label="Player progress" hideThumb={true} defaultValue={data?.length} className="max-w-md" />
            <h6 className="text-sm">
                {loading ? "..." : data?.length} of{" 2500 "}
                {/* {membershipData?.plan === "LAUNCH" ? "2500" : membershipData?.plan === "SCALE" ? "10,000" : "1,00,000"}{" "} */}
                added
            </h6>
        </div>
    );
};

export default UserPlan;
