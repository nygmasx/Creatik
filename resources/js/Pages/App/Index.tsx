import React from "react";
import {Navbar} from "@/Layouts/App/Navbar";
import {DashMain} from "@/Components/App/DashMain";
import {PageProps} from "@/types";


export default function Index({videos}: PageProps<{videos: string}>){

    return (
        <div>
            <Navbar/>
            <main className="w-full h-screen flex justify-center py-10 bg-[#1b1b1d]">
                <DashMain videos={videos}/>
            </main>
        </div>
    )
}
