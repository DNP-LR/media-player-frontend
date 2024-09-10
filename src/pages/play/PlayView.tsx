import PlayMobile from "./PlayMobile";
import {usePage} from "../usePage";

const PlayView = () => {
    const {handleNavigateToPlay, handleNavigateToPlayWithLyrics, handleNavigateToPlayList} = usePage();
    return (
        <section
            className="bg-primaryColor-primaryOne h-screen w-screen flex items-center justify-center">
            <PlayMobile
                handleNavigateToPlay={handleNavigateToPlay}
                handleNavigateToPlayWithLyrics={handleNavigateToPlayWithLyrics}
                handleNavigateToPlayList={handleNavigateToPlayList}
            />
        </section>
    )
}
export default PlayView