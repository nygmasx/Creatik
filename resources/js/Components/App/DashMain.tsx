import React, {useState, Fragment} from "react";
import {BiUpload} from "react-icons/bi";
import {Dialog, Transition} from "@headlessui/react";
import {Dropzone} from "./Dropzone";
import {PageProps} from "@/types";


export const DashMain = ({videos}: PageProps<{videos: string}>) => {

    const [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false)
    }
    function openModal() {
        setIsOpen(true)
    }

    return(

        <>
            <div className="max-w-[1200px] w-full block justify-center items-center">
                <div className="w-full flex justify-between items-center">
                    <h1 className="text-4xl text-white font-bold">Workspace</h1>

                    <button
                        onClick={openModal}
                        className="text-black flex items-center text-md font-semibold p-3 bg-[#9EDBF4] rounded-lg">
                        <BiUpload className="mr-2"/> Import
                    </button>
                </div>
                <div className="w-full bg-[#222] h-[500px] mt-5 rounded-xl">
                    <div className="h-[10%] font-semibold">
                        <button className="p-3 text-[#9EDBF4] border-b-2 border-b-[#9EDBF4]">MY VIDEOS</button>
                        <button className="p-3 text-gray-500">MY SHORTS</button>
                    </div>
                    <div className="h-[90%] flex justify-center items-center">
                        <div className=" w-[98%] h-[95%] border-2 border-dashed border-gray-600 rounded-xl">
                            <button type="button" onClick={openModal} className="w-full h-full flex flex-col justify-center
                                    items-center hover:bg-neutral-700 hover:transition-all ease-in-out rounded-xl">
                                <BiUpload className="text-5xl"/>
                                <p className="text-white font-semibold">It seems you don't have any videos yet.</p>
                                <p className="text-sm text-[#9EDBF4] font-semibold">Click here to import your first videos.</p>
                            </button>
                        </div>
                        <Transition appear show={isOpen} as={Fragment}>
                            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                                <Dropzone/>
                            </Dialog>
                        </Transition>
                    </div>
                </div>
            </div>
        </>
    )
}
