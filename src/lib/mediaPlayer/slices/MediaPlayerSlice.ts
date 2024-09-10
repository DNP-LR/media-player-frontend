import {createSlice, EntityState} from "@reduxjs/toolkit";
import {MediaPlayer} from "../model/MediaPlayer";
import {LoadingState} from "../../shared/LoadingState";
import {mediaPlayerAdapter} from "../model/MediaPlayerAdapter";

type MediaPlayerState = EntityState<MediaPlayer, number> & {
    loading: LoadingState;
    deleteLoading: LoadingState;
    saveLoading: LoadingState;
    mediaPlayer: MediaPlayer | null;

}
const initialState: MediaPlayerState = mediaPlayerAdapter.getInitialState({
    loading: LoadingState.IDLE,
    deleteLoading: LoadingState.IDLE,
    saveLoading: LoadingState.SUCCESS,
    mediaPlayer: null,
});

const mediaPlayerSlice = createSlice({
    name: 'mediaPlayer-slice',
    initialState,
    reducers: {},
    // extraReducers: (builder) => {
    //
    // }
});
export default mediaPlayerSlice.reducer;