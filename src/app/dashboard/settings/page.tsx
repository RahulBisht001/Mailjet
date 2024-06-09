/* eslint-disable react/no-unescaped-entities */
"use client";
import React, {useEffect, useState} from "react";

import useSettingsFilter from "../../../shared/hooks/useSettingsFilter";
import SettingsTabs from "@/shared/components/tabs/SettingsTabs";

import {ICONS} from "@/shared/utils/icons";

import {UserProfile} from "@clerk/nextjs";
import {Card, CardBody, Button, Accordion, AccordionItem, Snippet} from "@nextui-org/react";
import {generateApiKey, regenerateApiKey} from "@/shared/utils/tokenGenerator";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const Page = () => {
    // ======================
    // this is temporary
    let data = {
        plan: "PRO",
    };
    // ======================

    const {activeItem} = useSettingsFilter();

    const [activeIndex, setActiveIndex] = useState(null);
    const [apiKey, setApiKey] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const apiKeyToken = Cookies.get("api_key");
        if (!apiKeyToken) {
            generateApiKeyHandler();
        } else {
            setApiKey(apiKeyToken);
        }
    }, []);

    const handlePress = (index: number | any) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const generateApiKeyHandler = async () => {
        await generateApiKey()
        .then((res: any) => {
            Cookies.set("api_key", res);
            setApiKey(res);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const handleRegenerateApiKey = async () => {
        setLoading(true);
        await regenerateApiKey().then((res: any) => {
            Cookies.set("api_key", res);
            setApiKey(res);
            setLoading(false);
            toast.success("API Key updated! 👍");
        });
    };

    const handleCopy = () => {
        const smallText = document.querySelector(".copy-text") as HTMLElement;
        if (smallText) {
            const textToCopy = smallText.innerText;
            navigator.clipboard.writeText(textToCopy).then(() => {
                toast.success("API Key Copied 👍");
            });
        }
    };

    return (
        <>
            <div className="w-full h-screen overflow-y-auto p-5 font-Outfit text-gray-700">
                <div className="flex gap-2 items-center pb-2 px-1 ">
                    <h1 className="text-lg font-medium">Fix Your Settings</h1>
                    <span className="text-xl font-medium"> {ICONS.settings}</span>
                </div>
                <SettingsTabs />
                {activeItem === "Customize Profile" && <UserProfile />}

                {activeItem === "API Access" && (
                    <div>
                        {data?.plan == "FREE" ? (
                            <div className="w-full h-[80vh] flex items-center justify-center ">
                                <h3 className="text-green-500 text-lg tracking-wide font-Outfit">
                                    Please update your subscription plan to get access of API.
                                </h3>
                            </div>
                        ) : (
                            <div className="p-2 w-full overflow-hidden">
                                <h3 className="mb-2">API Key :</h3>

                                <Card className="whitespace-pre-line overflow-hidden break-words copy-text rounded-xl shadow-md bg border border-gray-200">
                                    <CardBody>{apiKey}</CardBody>
                                </Card>

                                <div className="flex items-center">
                                    <Button
                                        onClick={handleCopy}
                                        className="bg-slate-700 text-white shadow-lg my-3 cursor-pointer font-[400] py-4 hover:bg-slate-600 focus:outline-none rounded-lg h-10 flex items-center"
                                    >
                                        Copy key
                                    </Button>

                                    <Button
                                        isLoading={loading}
                                        onClick={handleRegenerateApiKey}
                                        className="bg-slate-700 text-white ml-4 shadow-lg my-3 cursor-pointer font-[400] py-4 hover:bg-slate-600 focus:outline-none rounded-lg h-10 flex items-center"
                                    >
                                        {loading ? "Working" : "Regenerate"}
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                <div className="text-gray-700">
                    <Accordion variant="shadow" className="shadow-none px-2" showDivider={false}>
                        <AccordionItem
                            key="1"
                            aria-label="Accordion 1"
                            title={
                                <span
                                    className={`text-base text-gray-700 tracking-wide ${
                                        activeIndex === 1 ? "text-green-500" : ""
                                    }`}
                                >
                                    How to use API keys?
                                </span>
                            }
                            onPress={() => handlePress(1)}
                            className="text-base"
                        >
                            <div className=" text-gray-600 px-4 text-pretty">
                                To utilize API keys for your newsletter, access your account settings and locate the API
                                section. Generate unique API keys and securely integrate them into your newsletter
                                platform. These keys enable seamless interaction between your platform and external
                                services, empowering efficient data retrieval and automation for your newsletters.
                            </div>
                        </AccordionItem>

                        <AccordionItem
                            key="2"
                            aria-label="Accordion 2"
                            title={
                                <span
                                    className={`text-base text-gray-700 tracking-wide ${
                                        activeIndex === 2 ? "text-green-500" : ""
                                    }`}
                                >
                                    How to use inbox.ai in creating emails?
                                </span>
                            }
                            onPress={() => handlePress(2)}
                            className="text-base"
                        >
                            <div className=" text-gray-600 px-4 text-pretty">
                                To create engaging emails with inbox.ai, simply log in to your newsletter platform and
                                navigate to the email creation section. Use the inbox.ai tool to generate compelling
                                content by inputting your topic or key points. Inbox.ai leverages OpenAI APIs on the
                                backend to craft personalized and captivating emails, enhancing your audience engagement
                                effortlessly.
                            </div>
                        </AccordionItem>
                        <AccordionItem
                            key="3"
                            aria-label="Accordion 3"
                            title={
                                <span
                                    className={`text-base text-gray-700 tracking-wide ${
                                        activeIndex === 3 ? "text-green-500" : ""
                                    }`}
                                >
                                    How to customize my profile?
                                </span>
                            }
                            onPress={() => handlePress(3)}
                            className="text-base"
                        >
                            <div className=" text-gray-600 px-4 text-pretty">
                                To personalize your profile on Clerk Auth, navigate to the profile section of our app.
                                Utilize Clerk's intuitive interface to modify your account details, including name,
                                email, and profile picture. Easily tailor your settings to reflect your preferences and
                                identity with Clerk Auth's seamless customization features.
                            </div>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </>
    );
};

export default Page;
