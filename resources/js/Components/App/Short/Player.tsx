import React, {useRef, useState} from "react";
import { Player } from "@remotion/player";
import {MyComposition} from "@/remotion/Composition";
import {Controls} from "@/Components/App/Short/Controls";
import {Simulate} from "react-dom/test-utils";
import keyPress = Simulate.keyPress;

interface VideoControlsProps {
    isPlaying: boolean;
    togglePlay: () => void;
    stopVideo: () => void;
    rewindVideo: () => void;
    forwardVideo: () => void;
}
export const PlayerZone: React.FC = () =>{
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleSpace = (e) => {
        if (e.keyCode(32)){
            setIsPlaying(false)
        }

    }

    const togglePlay = () => {
        if (videoRef.current?.paused) {
            videoRef.current?.play();
            setIsPlaying(true);
        } else {
            videoRef.current?.pause();
            setIsPlaying(false);
        }
    };

    const stopVideo = () => {
        videoRef.current?.pause();
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
        }
        setIsPlaying(false);
    };

    const rewindVideo = () => {
        if (videoRef.current) {
            videoRef.current.currentTime -= 10;
        }
    };

    const forwardVideo = () => {
        if (videoRef.current) {
            videoRef.current.currentTime += 10;
        }
    };
    return(
        <>
            <div className="w-full bg-[#2C2C2D] flex justify-center items-center">
                <video ref={videoRef} className="max-w-3xl" src="video2a333e8c-238e-4b6b-9cf1-ab5f010b3ee0.mp4"></video>
            </div>
            <Controls
                isPlaying={isPlaying}
                togglePlay={togglePlay}
                stopVideo={stopVideo}
                rewindVideo={rewindVideo}
                forwardVideo={forwardVideo}
            />
        </>
    )
}
