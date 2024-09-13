import {usePage} from "../usePage";
import WrapperPage from "../../ui/layout/WrapperPage";
import MusicPlayer from "./PlayListMobile";
import {usePlay} from "../play/usePlay";

const PlayList = () => {
    const {handleNavigateToPlay, mediaPlayerViewModel, currenMusic, setCurrenMusic} = usePage();
    const {isPlaying, handlePlayPause,} = usePlay();
    return (
        <WrapperPage>
            <MusicPlayer
                handleNavigateToPlay={handleNavigateToPlay}
                mediaPlayerList={mediaPlayerViewModel.mediaPlayerList}
                currenMusic={currenMusic}
                setCurrenMusic={setCurrenMusic}
                isPlaying={isPlaying}
                handlePlayPause={handlePlayPause}
            />
        </WrapperPage>
    )
}
export default PlayList;