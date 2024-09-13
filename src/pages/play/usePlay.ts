import React, { useRef, useState} from "react";

export interface UsePlayBehavior {
    handlePlayPause: () => void;
    audioPlayer: React.RefObject<HTMLAudioElement>;
    isPlaying: boolean;
}

export const usePlay = (): UsePlayBehavior => {
    const audioPlayer = useRef(new Audio());
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const handlePlayPause = () => {
        if (isPlaying) {
            audioPlayer.current.pause();
        } else {
            audioPlayer?.current.play().then();
        }
        setIsPlaying(!isPlaying);
    };

    return {
        handlePlayPause,
        isPlaying,
        audioPlayer,
    }
}