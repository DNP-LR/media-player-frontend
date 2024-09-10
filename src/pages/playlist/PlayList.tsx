import MusicPlayer from "./PlayListMobile";
import {usePage} from "../usePage";

const PlayList = () => {
    const {handleNavigateToPlay} = usePage();
    return (
        <>
            <section
                className="bg-primaryColor-primaryOne h-screen w-screen flex items-center justify-center">
                <MusicPlayer
                    handleNavigateToPlay={handleNavigateToPlay}
                />
            </section>
        </>

    )
}
export default PlayList