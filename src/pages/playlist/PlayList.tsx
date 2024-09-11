import {usePage} from "../usePage";
import WrapperPage from "../../ui/layout/WrapperPage";
import MusicPlayer from "./PlayListMobile";

const PlayList = () => {
    const {handleNavigateToPlay} = usePage();
    return (
        <WrapperPage>
            <MusicPlayer
                handleNavigateToPlay={handleNavigateToPlay}
            />
        </WrapperPage>
    )
}
export default PlayList;