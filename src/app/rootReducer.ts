import {combineReducers} from "@reduxjs/toolkit";
import mediaPlayerSlice from "../lib/mediaPlayer/slices/MediaPlayerSlice";

export const rootReducer = combineReducers({
    mediaPlayerReducer: mediaPlayerSlice,
})