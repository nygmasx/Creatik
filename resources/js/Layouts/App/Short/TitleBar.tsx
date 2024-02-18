import {Link} from "@inertiajs/react";
import {BiSolidUser, BiUpload} from "react-icons/bi";
import React from "react";

export const TitleBar = () => {

    return (
        <div className="flex w-full justify-center items-center bg-neutral-800 h-24 mx-auto">
            <div className="w-[90%] 2xl:px-36 px-0 flex items-center justify-between">
                <div className="flex items-center">
                    <div className="w-[165px]">
                        <p className="text-white text-3xl font-extrabold">Video.mp4</p>
                    </div>
                    <div className="flex">
                    </div>
                </div>
                <div>
                    <button
                        className="flex text-black font-semibold items-center bg-yellow-400 hover:bg-neutral-700 hover:transition-all p-2 rounded">
                        <BiUpload className="mr-2"/> Create
                    </button>
                </div>
            </div>
        </div>
    )
}
