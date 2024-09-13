import React from "react";
import {usePage} from "../usePage";

const PlayWithLyricsView = () => {

    const {currenMusic} = usePage()
    return (
        <div
            className="flex flex-col cursor-pointer items-center justify-center h-full max-h-[80%] text-sm text-center"
        >
            <span className="">{currenMusic.title ?? 'Default value'}</span>
            <span
                className="font-primary text-secondaryColor-secondaryOne ">{currenMusic.artist ?? 'Default value'}</span>
            <span>The Monster The Monster The Monster</span>
            <span>The Monster The Monster The Monster</span>
            <span>The Monster The Monster The Monster</span>
            <span>The Monster The Monster The Monster</span>
            <span>The Monster The Monster The Monster</span>
            <span>The Monster The Monster The Monster</span>
            <span>The Monster The Monster The Monster</span>
            <span>The Monster The Monster The Monster</span>
            <span>The Monster The Monster The Monster</span>
            <span>The Monster The Monster The Monster</span>
            <span>The Monster The Monster The Monster</span>
            <span>The Monster The Monster The Monster</span>
            <span>The Monster The Monster The Monster</span>
        </div>
    )
}

export default PlayWithLyricsView;
