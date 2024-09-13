import React from 'react';
import WrapperPage from "../../ui/layout/WrapperPage";
import {Outlet} from "react-router-dom";
import IconDoubleLeft from "../../ui/shared/icons/IconDoubleLeft";
import IconPlay from "../../ui/shared/icons/IconPlay";
import IconDoubleRight from "../../ui/shared/icons/IconDoubleRight";
import IconEclipseVertical from "../../ui/shared/icons/IconEclipseVertical";
import {usePage} from "../usePage";
import IconPause from "../../ui/shared/icons/IconPause";
import {usePlay} from "./usePlay";

const PlayHomeView = () => {
    const {
        handleNavigateToPlay,
        handleNavigateToPlayList,
        currenMusic,
    } = usePage();
    const {
        audioPlayer,
        handlePlayPause,
        isPlaying
    } = usePlay();

    const contextValue = {isPlaying};
    return (
        <WrapperPage>
            <section
                className="h-full lg:rounded-2xl lg:shadow-2xl bg-primaryColor-primaryOne w-full lg:max-w-[25%] lg:max-h-[90%] flex flex-col justify-between">
                <div className="flex p-4 justify-between items-center">
                    <button onClick={handleNavigateToPlay}
                            className="p-4 rounded-full bg-primaryColor-primaryTwo shadow-2xl hover:bg-gray-900">
                        <IconDoubleLeft/>
                    </button>
                    <div className="flex flex-col font-primary items-center justify-center">
                        <h1>{currenMusic?.title ?? 'Default value'}</h1>
                        <span>{currenMusic?.album ?? 'Default value'}</span>
                    </div>
                    <button className="p-4 rounded-full bg-primaryColor-primaryTwo shadow-2xl hover:bg-gray-900">
                        <IconEclipseVertical/>
                    </button>
                </div>
                <div className="flex-grow h-full flex items-center justify-center">
                    <Outlet context={contextValue}/>
                </div>
                <div className="flex items-center font-primary w-full text-white text-sm gap-4 justify-center p-4">
                    <audio ref={audioPlayer} controls>
                        <source src={currenMusic?.mp3Data ?? 'Default value'} type="audio/mpeg"/>
                    </audio>
                </div>
                <div className="flex p-2 pl-8 pr-8 items-center justify-between">
                    <button className="p-4 rounded-full bg-primaryColor-primaryTwo shadow-2xl hover:bg-gray-900">
                        <IconDoubleLeft/>
                    </button>
                    <button onClick={handlePlayPause}
                            className="p-4 rounded-full bg-secondaryColor-secondaryOne shadow-2xl hover:bg-secondaryColor-secondaryTwo">
                        {isPlaying ? <IconPause/> : <IconPlay/>}
                    </button>
                    <button className="p-4 rounded-full bg-primaryColor-primaryTwo shadow-2xl hover:bg-gray-900 ">
                        <IconDoubleRight className="bg-secondaryColor-secondaryTwo"/>
                    </button>
                </div>
                <div className="flex-col p-4 cursor-pointer font-primary top-0 items-center justify-center flex"
                     onClick={handleNavigateToPlayList}>
                    <img src="PullUpTheSongListIcon.png" alt="Pull Up The Song List"/>
                    <span className="text-white opacity-45">PULL UP THE SONG LIST</span>
                </div>
            </section>
        </WrapperPage>
    );

};

export default PlayHomeView;
