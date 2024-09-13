import {usePage} from "../usePage";
import {useLayoutEffect} from "react";

const PlayMusic = () => {
    const {handleNavigateToPlayWithLyrics, currenMusic} = usePage();

    useLayoutEffect(() => {

    }, [currenMusic]);
    return (
        <section className="">
            <div className="flex items-center justify-center  shadow-amber-500 ">
                <img className="h-full max-h-[60%] animate-spin  max-w-[60%] w-full rounded-full"
                     src={currenMusic.coverPath ?? 'Default value'}
                     alt="Union"/>
            </div>
            <div
                className="flex flex-col cursor-pointer items-center justify-center h-full max-h-[80%] text-sm text-center"
                onClick={handleNavigateToPlayWithLyrics}>
                <span className="">{currenMusic.title ?? 'Default value'}</span>
                <span
                    className="font-primary text-secondaryColor-secondaryOne ">{currenMusic.album ?? 'Default value'}</span>
                <span>The Monster The Monster The Monster</span>
                <span>The Monster The Monster The Monster</span>
                <span>The Monster The Monster The Monster</span>
                <span>The Monster The Monster The Monster</span>
                <span>The Monster The Monster The Monster</span>
                <span>The Monster The Monster The Monster</span>
            </div>
        </section>
    );
}

export default PlayMusic;