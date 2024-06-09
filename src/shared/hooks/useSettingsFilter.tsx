"use client";
import {useAtom} from "jotai";
import {settingsActiveItem} from "@/app/configs/constants";

const useSettingsFilter = () => {
    const [activeItem, setActiveItem] = useAtom<any>(settingsActiveItem);

    return {activeItem, setActiveItem};
};

export default useSettingsFilter;
