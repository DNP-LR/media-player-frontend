import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../../routes/AppRoutes";

const HomeView = () => {
    const navigate = useNavigate();

    const handleNavigateToPlaylist = () => {
        navigate(AppRoutes.PLAY)
    }
    return (
        <section className="bg-primaryColor-primaryOne h-screen w-screen flex items-center justify-center">
            <img className="h-full w-full object-cover" src="/src/assets/Thumbnail.png" alt="Thumbnail"/>
            <button
                onClick={handleNavigateToPlaylist}
                className="absolute bottom-0  w-full max-w-[40%] font-sans hover:bg-secondaryColor-secondaryTwo :transition duration-500 ease-in hover:ease-out  hover:transition hover:duration-500 text-primaryColor-primaryOne rounded p-4 m-4 bg-secondaryColor-secondaryOne"
            >
                Get Started
            </button>
        </section>
    )
}
export default HomeView;