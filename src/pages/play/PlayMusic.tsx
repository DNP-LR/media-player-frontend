import {usePage} from "../usePage";
import React from "react";
import {twMerge} from "tailwind-merge";
import {useOutletContext} from "react-router-dom";
import {motion} from "framer-motion"
import {usePlay} from "./usePlay";

interface PlayHomeContext {
    isPlaying: boolean;
}

const PlayMusic = () => {
    const {handleNavigateToPlayWithLyrics} = usePage();
    const {currenMusic} = usePlay();
    const {isPlaying} = useOutletContext<PlayHomeContext>();
    return (
        <section className="">
            <div className="flex items-center justify-center  shadow-amber-500 ">
                <motion.div
                    className="items-center flex justify-center h-full max-h-[60%]  max-w-[60%] w-full rounded-full"
                    initial={{opacity: 0, scale: 0.9}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{
                        duration: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001
                        }
                    }}>
                    <img className={twMerge("",
                        isPlaying ? "animate-spin" : "")}
                         src={currenMusic?.coverPath ?? 'Default value'}
                         alt="Union"/>
                </motion.div>
            </div>
            <div
                className="flex flex-col cursor-pointer items-center justify-center h-full max-h-[80%] text-sm text-center"
                onClick={handleNavigateToPlayWithLyrics}>
                <span>{currenMusic?.title ?? 'Default value'}</span>
                <span
                    className="font-primary text-secondaryColor-secondaryOne ">{currenMusic?.album ?? 'Default value'}</span>
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