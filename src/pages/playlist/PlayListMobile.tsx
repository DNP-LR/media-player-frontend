import React, {useState} from "react";
import IconDownload from "../../ui/shared/icons/IconDownload";
import IconLike from "../../ui/shared/icons/IconLike";
import IconPause from "../../ui/shared/icons/IconPause";
import IconPlay from "../../ui/shared/icons/IconPlay";
import {twMerge} from "tailwind-merge";

interface Song {
    title: string;
    artist: string;
}

const songs: Song[] = [
    {title: "Legends Never Die", artist: "Against The Current"},
    {title: "Rap God", artist: "Eminem"},
    {title: "The Monster", artist: "Eminem / Rihanna"},
    {title: "Lose Yourself", artist: "Eminem"},
    {title: "Illusionary Daytime", artist: "Shirfine"},
    {title: "Loyal", artist: "Odesza"},
    {title: "Loser", artist: "Bigbang"},
    {title: "Five Hundred Miles", artist: "Unknown Artist"},
];
interface PlayListMobileProps {
    handleNavigateToPlay: () => void;
}

const MusicPlayer = ({handleNavigateToPlay}:PlayListMobileProps) => {
    const [currentSong, setCurrentSong] = useState<number>(2);
    return (
        <div
            className="w-full h-full lg:rounded lg:shadow-2xl lg:border-1 lg:border-primaryColor-primaryTwo  bg-primaryColor-primaryOne lg:max-w-[25%] lg:max-h-[90%]">
            <div className="h-full max-h-[25%] relative">
                <div className="flex justify-center items-center">
                    <div>
                        <img
                            src="/public/Album.png"
                            alt="Album Cover"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
            <div className="flex p-2 pl-8 pr-8 items-center justify-between">
                <button className="p-4 rounded-full bg-primaryColor-primaryOne shadow-2xl hover:bg-gray-600">
                    <IconDownload/>
                </button>
                <button className="p-4 rounded-full bg-primaryColor-primaryOne shadow-2xl hover:bg-gray-600">
                    <IconLike className="bg-secondaryColor-secondaryTwo"/>
                </button>
            </div>
            <div
                className="bg-gray-800 rounded-l-2xl h-full max-h-[65%] bottom-0 overflow-y-scroll rounded-r-2xl  p-4 flex flex-col space-y-4">
                {songs.map((song, index) => {
                    return (
                        <div
                            className={twMerge(
                                currentSong === index ? "bg-primaryColor-primaryTwo bg-opacity-2" : "",
                                "flex hover:bg-primaryColor-primaryTwo hover:bg-opacity-2 justify-between items-center p-3 rounded-lg cursor-pointer"
                            )}>
                            <div className="flex items-center">
                                <div className="flex flex-col justify-start">
                                    <p className="text-lg font-primary">{song.title}</p>
                                    <p className="text-sm font-primary text-gray-400">{song.artist}</p>
                                </div>
                            </div>
                            <div className="flex justify-end p-2 rounded-full bg-orange-500">
                                {currentSong === index ? <IconPause/> : <IconPlay/>}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default MusicPlayer;
