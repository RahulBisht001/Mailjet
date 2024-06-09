import React from "react";
import {Tabs, Tab} from "@nextui-org/react";

import useSettingsFilter from "@/shared/hooks/useSettingsFilter";

const SettingsTabs = () => {
    const {activeItem, setActiveItem} = useSettingsFilter();
    return (
        <>
            <div className="flex w-full flex-col font-Outfit mb-5">
                <Tabs
                    variant={"solid"}
                    color="success"
                    aria-label="Options"
                    selectedKey={activeItem}
                    onSelectionChange={setActiveItem}
                >
                    <Tab key="API Access" title="API Access" className="text-base tracking-wide" />
                    <Tab key="Customize Profile" title="Customize Profile" className="text-base tracking-wide" />
                </Tabs>
            </div>
        </>
    );
};

export default SettingsTabs;
