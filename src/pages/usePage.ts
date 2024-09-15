import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../routes/AppRoutes";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {GetAllMediaPlayerAsync} from "../lib/mediaPlayer/usecases/GetMediaPlayer/GetAllMediaPlayerAsync";
import {PlayHomeViewModel, PlayHomeViewModelProps} from "./play/PlayHomeViewModel";
import {MediaPlayer} from "../lib/mediaPlayer/model/MediaPlayer";

export interface PageBehavior {
    handleNavigateToPlay: () => void;
    handleNavigateToPlayWithLyrics: () => void;
    handleNavigateToPlayList: () => void;

}

export const usePage = (): PageBehavior => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();


    const handleNavigateToPlay = () => {
        navigate(AppRoutes.PLAY)
    }
    const handleNavigateToPlayWithLyrics = () => {
        navigate(AppRoutes.LYRICS)
    }
    const handleNavigateToPlayList = () => {
        navigate(AppRoutes.PLAYLIST);
    }
    const handleGeAllMediaPlayer = () => {
        dispatch(GetAllMediaPlayerAsync())
    }


    useEffect(() => {
        handleGeAllMediaPlayer();
    }, []);

    return {
        handleNavigateToPlay,
        handleNavigateToPlayList,
        handleNavigateToPlayWithLyrics,

    }
}