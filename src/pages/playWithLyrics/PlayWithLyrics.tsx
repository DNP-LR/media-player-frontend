import React from "react";
import {usePage} from "../usePage";

const PlayWithLyricsView = () => {

    const {currenMusic} = usePage()
    return (
        <section className="">
            <div
                className="flex flex-col cursor-pointer items-center justify-center h-full max-h-[80%] text-sm text-center"
            >
                <span className="">{currenMusic.title}</span>
                <span
                    className="font-primary text-secondaryColor-secondaryOne ">{currenMusic.artist}</span>
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
        </section>
    )
}

export default PlayWithLyricsView;
