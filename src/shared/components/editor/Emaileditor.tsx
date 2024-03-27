import React, {useState, useRef, useEffect} from "react";
import EmailEditor, {EmailEditorProps, EditorRef} from "react-email-editor";

import {DefaultJsonData} from "@/assets/mails/default";
import {useClerk} from "@clerk/nextjs";
import {useRouter} from "next/navigation";
import {Button} from "@nextui-org/react";
import {saveEmail} from "@/actions/save.email";
import toast from "react-hot-toast";

const Emaileditor = ({subjectTitle}: {subjectTitle: string}) => {
    const [loading, setLoading] = useState(false);
    const [jsonData, setJsonData] = useState<any | null>(DefaultJsonData);

    const {user} = useClerk();
    const emailEditorRef = useRef<EditorRef>(null);
    const history = useRouter();

    const exportHtml = () => {
        const unlayer = emailEditorRef.current?.editor;

        unlayer?.exportHtml(async (data) => {
            const {design, html} = data;
            setJsonData(design);
            // await sendEmail({
            //     userEmail: ["sponsorship@becodemy.com"],
            //     subject: subjectTitle,
            //     content: html,
            // }).then((res) => {
            //     toast.success("Email sent successfully!");
            //     history.push("/dashboard/write");
            // });
        });
    };

    const onReady: EmailEditorProps["onReady"] = () => {
        // editor is ready
        // you can load your template here;
        // the design json can be obtained by calling
        // unlayer.loadDesign(callback) or unlayer.exportHtml(callback)
        // const templateJson = { DESIGN JSON GOES HERE };
        // unlayer.loadDesign(templateJson);
        const unlayer: any = emailEditorRef.current?.editor;
        unlayer.loadDesign(jsonData);
    };

    const saveDraft = () => {
        const unlayer = emailEditorRef.current?.editor;

        unlayer?.exportHtml(async (data) => {
            const {design} = data;
            await saveEmail({
                title: subjectTitle,
                content: JSON.stringify(design),
                newsLetterOwnerId: user?.id!,
            }).then((res: any) => {
                toast.success(res.message);
                history.push("/dashboard/write");
            });
        });
    };

    return (
        <>
            {!loading && (
                <>
                    <div className="w-full relative h-[90vh]">
                        {/* this is unlayer's email editor 
                        this is not our custom component */}
                        <EmailEditor minHeight={"80vh"} ref={emailEditorRef} onReady={onReady} />
                        <div className="absolute bottom-0 flex items-center justify-end gap-4 right-0 w-full border-t p-3">
                            <Button
                                className="bg-transparent cursor-pointer flex items-center gap-1 text-black border border-[#00000048] text-md rounded-lg"
                                onClick={saveDraft}
                            >
                                <span className="opacity-[.7]">Save Draft</span>
                            </Button>
                            <Button
                                className="bg-green-500 text-white cursor-pointer flex items-center gap-1 border text-md rounded-lg"
                                onClick={exportHtml}
                            >
                                <span>Send</span>
                            </Button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Emaileditor;
