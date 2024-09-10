import React from "react";
import PlayWithLyricsViewMobile from "./PlayWithLyricsViewMobile";
import {usePage} from "../usePage";

const PlayWithLyricsView = () => {
    const {handleNavigateToPlay} = usePage();

    return (
        <section
            className="bg-primaryColor-primaryOne h-screen w-screen flex items-center justify-center">
            <PlayWithLyricsViewMobile
                handleNavigateToPlay={handleNavigateToPlay}
            />
        </section>
    )
}

export default PlayWithLyricsView;
