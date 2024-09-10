import {createBrowserRouter} from "react-router-dom";
import AppLayout from "../ui/layout/AppLayout";
import HomeView from "../pages/HomeView";
import {AppRoutes} from "../pages/AppRoutes";

export const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        children: [
            {
                index: true,
                path: AppRoutes.HOME,
                element: <HomeView/>
            },
            {
                path: '*',
                element: <HomeView/>
            }
        ]
    }
])