import {createSlice, EntityState} from "@reduxjs/toolkit";
import {MediaPlayer} from "../model/MediaPlayer";
import {LoadingState} from "../../shared/LoadingState";
import {mediaPlayerAdapter} from "../model/MediaPlayerAdapter";
import {GetAllMediaPlayerAsync} from "../usecases/GetMediaPlayer/GetAllMediaPlayerAsync";

type MediaPlayerState = EntityState<MediaPlayer, number> & {
    loading: LoadingState;
    deleteLoading: LoadingState;
    saveLoading: LoadingState;
    mediaPlayer: MediaPlayer | null;
}
const initialState: MediaPlayerState = mediaPlayerAdapter.getInitialState({
    loading: LoadingState.IDLE,
    deleteLoading: LoadingState.IDLE,
    saveLoading: LoadingState.IDLE,
    mediaPlayer: null,
});

const mediaPlayerSlice = createSlice({
    name: 'mediaPlayer-slice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetAllMediaPlayerAsync.pending, (state) => {
                state.loading = LoadingState.PENDING
            })
            .addCase(GetAllMediaPlayerAsync.rejected, (state) => {
                state.loading = LoadingState.FAIL
            })
            .addCase(GetAllMediaPlayerAsync.fulfilled, (state, action) => {
                state.loading = LoadingState.SUCCESS;
                mediaPlayerAdapter.setAll(state, action.payload);
            });
    }
});
export default mediaPlayerSlice.reducer;