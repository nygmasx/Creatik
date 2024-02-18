import React, {useRef, useState} from "react";
import { Player } from "@remotion/player";
import {MyComposition} from "@/remotion/Composition";
import {Controls} from "@/Components/App/Short/Controls";

export const PlayerZone: React.FC = () =>{
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    return(
        <>
            <div className="w-full bg-[#2C2C2D] flex justify-center items-center">
                <video ref={videoRef} className="max-w-3xl" src="video2a333e8c-238e-4b6b-9cf1-ab5f010b3ee0.mp4"></video>
            </div>
            <Controls/>
        </>
    )
}
