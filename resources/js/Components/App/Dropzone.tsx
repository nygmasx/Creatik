import React, {Fragment, useEffect, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {AiFillYoutube} from "react-icons/ai";
import {BiUpload} from "react-icons/bi";
import {router, useForm} from "@inertiajs/react";
import {CheckIcon, ReloadIcon} from "@radix-ui/react-icons";
import {PageProps} from "@/types";

export const Dropzone = () => {
    const {data, setData, post, processing, reset, errors} = useForm({
        url: '',
    });

    const [realId, setRealId] = useState('');
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);
    const [isEmpty, setIsEmpty] = useState(true);

    router.reload({only: ['videos']});

    const download = ({e}: { e: any }) => {
        setLoading(true);
        e.preventDefault();
        post(route('app.getVideo'), {
            onSuccess: () => reset(),
            onFinish: () => setDone(true),
            data,
        });

        if (errors) {
            setLoading(false);
        }
    };

    const updateRealId = ({link}: { link: string }) => {
        const id = link.split('=');
        setRealId(id[id.length - 1]);
    };

    const thumb = `https://img.youtube.com/vi/${realId}/maxresdefault.jpg`;

    return (
        <div className="block justify-center items-center">
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black/25"/>
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel
                            className="w-full max-w-[650px] h-[500px] transform overflow-hidden rounded-3xl bg-[#222] p-6 text-left align-middle shadow-xl transition-all grid">
                            <div className="flex items-center justify-center h-full max-h-1/2">
                                <div className="flex justify-center items-center border rounded-2xl w-6/12 h-1/4 p-6">
                                    <AiFillYoutube className="text-3xl text-[#9EDBF4]"/>
                                    <input
                                        type="text"
                                        value={data.url}
                                        onChange={(e) => {
                                            setData('url', e.target.value);
                                            updateRealId({link: e.target.value});
                                        }}
                                        placeholder="Paste Youtube Link"
                                        className="bg-[#222] border-none focus:outline-0 focus:outline-none text-gray-500"
                                    />
                                </div>
                            </div>
                            <div className="">
                                <div className="flex flex-col justify-center items-center">
                                    <div className="h-[50%]">
                                        <img className="max-w-96" src={thumb} alt=""/>
                                    </div>
                                    <div className="flex items-center justify-center h-1/2 w-full mt-6">
                                        {loading ? (
                                            <button
                                                className="text-black flex items-center justify-center text-md font-semibold p-3 bg-[#9EDBF4] rounded-lg">
                                                {done ? (
                                                    <>
                                                        <CheckIcon className="mr-2 h-4 w-4"/> Téléchargement terminé
                                                    </>
                                                ) : (
                                                    <>
                                                        <ReloadIcon
                                                            className="mr-2 h-4 w-4 animate-spin"/> Téléchargement en
                                                        cours
                                                    </>

                                                )}
                                            </button>
                                        ) : (
                                            <button
                                                className="text-black flex items-center justify-center text-md font-semibold p-3 bg-[#9EDBF4] rounded-lg"
                                                onClick={(e) => download({e: e})}>
                                                <BiUpload className="mr-2"/> Import
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </div>
    );
};
