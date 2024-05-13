import SubscribersData from "@/shared/components/dashboard/data/SubscribersData";

const Page = () => {
    return (
        <>
            <div className="w-full h-screen overflow-hidden p-5 font-Lexend">
                <h1 className="text-2xl font-medium">Subscribers</h1>
                <p className="opacity-[.7] text-sm pt-2"> view and manage your subscribers</p>
                <SubscribersData />
            </div>
        </>
    );
};

export default Page;
