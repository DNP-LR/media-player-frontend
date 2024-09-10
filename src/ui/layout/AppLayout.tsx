import {Outlet} from "react-router-dom";

const AppLayout = () => {
    return (
        <div className="m-auto">
            <Outlet/>
        </div>
    )
}
export default AppLayout;