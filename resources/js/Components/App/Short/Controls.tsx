import {BiPlay} from "react-icons/bi";


export const Controls = ({ isPlaying, togglePlay, stopVideo, rewindVideo, forwardVideo }) => {

    return(
        <div className="flex py-2 px-4 w-full gap-4 justify-center items-center">
            <div className="w-1/3 flex items-center justify-center">
                1
            </div>
            <div className="w-1/3 flex items-center justify-center">
                <button
                    className="p-2 rounded-[50%] bg-yellow-400 flex justify-center items-center"
                    onClick={togglePlay}
                >
                    <BiPlay className="text-4xl ml-1"/>
                </button>
            </div>
            <div className="w-1/3 flex items-center justify-center">3</div>
        </div>
    )
}
