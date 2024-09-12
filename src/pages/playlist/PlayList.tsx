import {usePage} from "../usePage";
import WrapperPage from "../../ui/layout/WrapperPage";
import MusicPlayer from "./PlayListMobile";

const PlayList = () => {
    const {handleNavigateToPlay, mediaPlayerViewModel} = usePage();
    return (
        <WrapperPage>
            <MusicPlayer
                handleNavigateToPlay={handleNavigateToPlay}
                mediaPlayerList={mediaPlayerViewModel.mediaPlayerList}
            />
        </WrapperPage>
    )
}
export default PlayList;