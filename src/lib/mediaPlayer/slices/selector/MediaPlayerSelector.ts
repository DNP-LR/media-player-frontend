import {RootState} from "../../../../app/store";
import {mediaPlayerAdapter} from "../../model/MediaPlayerAdapter";

const selectMediaPlayer = (state: RootState) => mediaPlayerAdapter.getSelectors().selectAll(state.mediaPlayerReducer);
const selectLoadingMediaPlayer = (state: RootState) => state.mediaPlayerReducer.loading;
const selectDeleteLoadingMediaPlayer = (state: RootState) => state.mediaPlayerReducer.deleteLoading;
const saveLoadingMediaPlayer = (state: RootState) => state.mediaPlayerReducer.saveLoading;

export const MediaPlayerSliceSelector = {
    mediaPlayer: selectMediaPlayer,
    loading: selectLoadingMediaPlayer,
    deleteLoading: selectDeleteLoadingMediaPlayer,
    saveLoading: saveLoadingMediaPlayer
}