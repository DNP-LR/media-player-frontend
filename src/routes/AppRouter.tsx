import {createBrowserRouter} from "react-router-dom";
import AppLayout from "../ui/layout/AppLayout";
import {AppRoutes} from "./AppRoutes";
import HomeView from "../pages/home/HomeView";
import PlayList from "../pages/playlist/PlayList";
import React from "react";
import PlayView from "../pages/play/PlayView";
import PlayWithLyricsView from "../pages/playWithLyrics/PlayWithLyrics";


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
                path: AppRoutes.PLAYLIST,
                element: <PlayList/>
            },
            {
                path: AppRoutes.PLAY,
                element: <PlayView/>
            },
            {
                path: AppRoutes.LYRICS,
                element: <PlayWithLyricsView/>
            },
            {
                path: '*',
                element: <HomeView/>
            }
        ]
    }
])