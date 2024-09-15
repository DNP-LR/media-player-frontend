import React, {useRef, useState} from "react";
import {useAppSelector} from "../../app/hooks";
import {PlayHomeViewModel, PlayHomeViewModelProps} from "./PlayHomeViewModel";
import {MediaPlayer} from "../../lib/mediaPlayer/model/MediaPlayer";

export interface UsePlayBehavior {
    handlePlayPause: () => void;
    audioPlayer: React.RefObject<HTMLAudioElement>;
    isPlaying: boolean;
    mediaPlayerViewModel: PlayHomeViewModelProps;
    currenMusic: MediaPlayer;
    setCurrenMusic: (currenMusic: MediaPlayer) => void;
}

export const usePlay = (): UsePlayBehavior => {
    const audioPlayer = useRef(new Audio());
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const mediaPlayerViewModel = useAppSelector((state) => PlayHomeViewModel(state));
    const [currenMusic, setCurrenMusic] = useState<MediaPlayer>();
    const handlePlayPause = () => {
        if (isPlaying) {
            audioPlayer.current.pause();
        } else {
            audioPlayer?.current.play().then();
        }
        setIsPlaying(!isPlaying);
    };
    console.log('usePlay', currenMusic)

    return {
        handlePlayPause,
        isPlaying,
        audioPlayer,
        mediaPlayerViewModel,
        currenMusic: currenMusic ?? mediaPlayerViewModel.mediaPlayerList[0],
        setCurrenMusic,
    }
}