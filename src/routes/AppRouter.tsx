import {createBrowserRouter} from "react-router-dom";
import AppLayout from "../ui/layout/AppLayout";
import {AppRoutes} from "./AppRoutes";
import HomeView from "../pages/home/HomeView";
import React from "react";
import PlayHomeView from "../pages/play/PlayHomeView";
import PlayMusic from "../pages/play/PlayMusic";
import PlayWithLyricsView from "../pages/playWithLyrics/PlayWithLyrics";
import PlayList from "../pages/playlist/PlayList";


export const router = createBrowserRouter([
    {

        element: <AppLayout/>,
        children: [
            {
                index: true,
                element: <HomeView/>
            },
            {
                path: AppRoutes.HOME,
                element: <HomeView/>
            },
            {
                path: AppRoutes.PLAYLIST,
                element: <PlayList/>
            },
            {
                path: AppRoutes.PLAY,
                element: <PlayHomeView/>,
                children: [
                    {
                        index: true,
                        element: <PlayMusic/>
                    },
                    {
                        path: AppRoutes.LYRICS,
                        element: <PlayWithLyricsView/>
                    }
                ]
            },
            {
                path: '*',
                element: <HomeView/>
            }
        ]
    }
]);
