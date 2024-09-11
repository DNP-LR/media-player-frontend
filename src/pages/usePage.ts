import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../routes/AppRoutes";

export interface PageBehavior {
    handleNavigateToPlay: () => void;
    handleNavigateToPlayWithLyrics: () => void;
    handleNavigateToPlayList: () => void;
}

export const usePage = (): PageBehavior => {
    const navigate = useNavigate();

    const handleNavigateToPlay = () => {
        navigate(AppRoutes.PLAY)
    }
    const handleNavigateToPlayWithLyrics = () => {
        navigate(AppRoutes.LYRICS)
    }
    const handleNavigateToPlayList = () => {
        navigate(AppRoutes.PLAYLIST);
    }
    return {
        handleNavigateToPlay,
        handleNavigateToPlayList,
        handleNavigateToPlayWithLyrics,
    }
}