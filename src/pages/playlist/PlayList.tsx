import {usePage} from "../usePage";
import WrapperPage from "../../ui/layout/WrapperPage";
import MusicPlayer from "./PlayListMobile";
import {usePlay} from "../play/usePlay";

const PlayList = () => {
    const {handleNavigateToPlay} = usePage();
    const {isPlaying, handlePlayPause, mediaPlayerViewModel, currenMusic, setCurrenMusic} = usePlay();
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