import React from 'react';
import WrapperPage from "../../ui/layout/WrapperPage";
import {Outlet} from "react-router-dom";
import ProgressBar from "../../ui/shared/components/ProgressBar";
import IconDoubleLeft from "../../ui/shared/icons/IconDoubleLeft";
import IconPlay from "../../ui/shared/icons/IconPlay";
import IconDoubleRight from "../../ui/shared/icons/IconDoubleRight";
import IconEclipseVertical from "../../ui/shared/icons/IconEclipseVertical";
import {usePage} from "../usePage";

const PlayHomeView = () => {
    const {handleNavigateToPlay, handleNavigateToPlayList} = usePage();
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
                        <h1>First Header</h1>
                        <span>Sub title</span>
                    </div>
                    <button className="p-4 rounded-full bg-primaryColor-primaryTwo shadow-2xl hover:bg-gray-900">
                        <IconEclipseVertical/>
                    </button>
                </div>
                <div className="flex-grow h-full flex items-center justify-center">
                    <Outlet/>
                </div>
                <div className="p-4">
                    <div className="flex items-center font-primary w-full text-white text-sm gap-4 justify-center p-4">
                        <span className="opacity-45">00:59</span>
                        <ProgressBar progress={59}/>
                        <span className="opacity-45">03:54</span>
                    </div>
                </div>
                <div className="flex p-2 pl-8 pr-8 items-center justify-between">
                    <button className="p-4 rounded-full bg-primaryColor-primaryTwo shadow-2xl hover:bg-gray-900">
                        <IconDoubleLeft/>
                    </button>
                    <button
                        className="p-4 rounded-full bg-secondaryColor-secondaryOne shadow-2xl hover:bg-secondaryColor-secondaryTwo">
                        <IconPlay/>
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
