import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../../routes/AppRoutes";
// React
import {motion} from "framer-motion"


const HomeView = () => {
    const navigate = useNavigate();

    const handleNavigateToPlaylist = () => {
        navigate(AppRoutes.PLAY)
    }
    return (
        <section className="bg-primaryColor-primaryOne h-screen w-screen flex items-center justify-center">
            <img className="h-full w-full object-cover" src="Thumbnail.png" alt="Thumbnail"/>
            <motion.div
                className="absolute bottom-0 w-full cursor-pointer text-center max-w-[40%] font-sans rounded p-4 m-4 bg-secondaryColor-secondaryOne"
                whileHover={{scale: 1.08}}
                transition={{type: "spring", stiffness: 400, damping: 10}}
                onClick={handleNavigateToPlaylist}
            >
                Get Started
            </motion.div>

        </section>
    )
}
export default HomeView;