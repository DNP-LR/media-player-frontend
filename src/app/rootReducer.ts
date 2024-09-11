import {combineReducers} from "@reduxjs/toolkit";
import mediaPlayerReducer from "../lib/mediaPlayer/slices/MediaPlayerSlice";

export const rootReducer = combineReducers({
    mediaPlayerReducer: mediaPlayerReducer,
})