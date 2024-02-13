import React, {Fragment, useState} from "react";
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import {Dialog, Transition} from "@headlessui/react";
import {AiFillYoutube} from "react-icons/ai";
import {PageProps} from "@/types";
export const Dropzone = ({thumbnail}: PageProps<{thumbnail: string}>) => {

    return(

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
                <div className="fixed inset-0 bg-black/25" />
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
                        <Dialog.Panel className="w-full max-w-[650px] h-[500px] transform overflow-hidden
                        rounded-3xl bg-[#222] p-6 text-left align-middle shadow-xl transition-all grid"
                        >
                            <div className="flex items-center justify-center h-full max-h-1/2">
                                <div className="flex justify-center items-center border rounded-2xl w-6/12 h-1/4 p-6">
                                    <AiFillYoutube className="text-3xl text-yellow-400"/>
                                    <input type="text" placeholder="Paste Youtube Link" className="bg-[#222] border-none focus:outline-0 focus:outline-none text-gray-500"/>
                                    <img src={thumbnail} alt=""/>
                                </div>
                            </div>
                            <div className="">
                                <div className="h-full max-h-1/2">
                                    <FilePond allowMultiple={true} maxFiles={3} server="/api"/>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </div>


    )
}
