import React from "react";
import IconElipsVertical from "../../ui/shared/icons/IconElipsVertical";
import IconDoubleLeft from "../../ui/shared/icons/IconDoubleLeft";
import IconDoubleRight from "../../ui/shared/icons/IconDoubleRight";
import IconPlay from "../../ui/shared/icons/IconPlay";
import ProgressBar from "../../ui/shared/components/ProgressBar";
import IconArrowUp from "../../ui/shared/icons/IconArrowUp";

interface PlayMobileProps {
    handleNavigateToPlay: () => void;
    handleNavigateToPlayWithLyrics: () => void;
    handleNavigateToPlayList: () => void;

}

const PlayMobile =
    ({
         handleNavigateToPlay,
         handleNavigateToPlayWithLyrics,
         handleNavigateToPlayList
     }: PlayMobileProps) => {

        return (
            <div
                className="w-full h-full lg:rounded lg:shadow-2xl lg:border-1 lg:border-primaryColor-primaryTwo bg-primaryColor-primaryOne lg:max-w-[25%] lg:max-h-[90%]">
                <div className="flex p-2 pl-8 pr-8 items-center justify-between">
                    <button
                        onClick={handleNavigateToPlay}
                        className="p-4 rounded-full bg-primaryColor-primaryOne shadow-2xl hover:bg-gray-600">
                        <IconDoubleLeft/>
                    </button>
                    <div className="items-center flex flex-col justify-center">
                        <h1 className="font-primary text-2xl">The Monster</h1>
                        <h3>some texte</h3>
                    </div>
                    <button className="p-4 rounded-full bg-primaryColor-primaryOne shadow-2xl hover:bg-gray-600">
                        <IconElipsVertical className="bg-secondaryColor-secondaryTwo"/>
                    </button>
                </div>

                <div className="flex items-center justify-center  shadow-amber-500 ">
                    <img className="h-full max-h-[60%] max-w-[60%] w-full rounded-full"
                         src="Union.png"
                         alt="Union"/>
                </div>
                <div
                    onClick={handleNavigateToPlayWithLyrics}
                    className="h-full max-h-[30%] p-4 cursor-pointer">
                    <div className="flex flex-col items-center justify-center h-full max-h-[80%] text-sm text-center">
                        <span className="">The Monster The Monster</span>
                        <span
                            className="font-primary text-secondaryColor-secondaryOne ">The Monster The Monster The Monster</span>
                        <span>The Monster The Monster The Monster</span>
                    </div>
                    <div className="flex items-center  font-primary text-white text-sm  gap-4 justify-center p-4">
                        <span className="opacity-45">00:59</span>
                        <ProgressBar progress={59}/>
                        <span className="opacity-45">03:54</span>
                    </div>
                </div>
                <div className="flex p-2 pl-8 pr-8 items-center justify-between">
                    <button className="p-4 rounded-full bg-primaryColor-primaryOne shadow-2xl hover:bg-gray-600">
                        <IconDoubleLeft/>
                    </button>
                    <button className="p-4 rounded-full bg-secondaryColor-secondaryOne shadow-2xl hover:bg-gray-600">
                        <IconPlay/>
                    </button>
                    <button className="p-4 rounded-full bg-primaryColor-primaryOne shadow-2xl hover:bg-gray-600">
                        <IconDoubleRight className="bg-secondaryColor-secondaryTwo"/>
                    </button>
                </div>
                <div
                    onClick={handleNavigateToPlayList}
                    className=" flex-col p-4 cursor-pointer font-primary top-0 items-center justify-center flex">
                    <IconArrowUp/>
                    <span className="text-white opacity-5">PULL UP THE SONG LIST</span>
                </div>
            </div>

        )
    }
export default PlayMobile;