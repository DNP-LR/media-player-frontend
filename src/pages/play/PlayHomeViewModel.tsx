import {LoadingState} from "../../lib/shared/LoadingState";
import {ReactElement} from "react";
import {RootState} from "../../app/store";
import {MediaPlayerSliceSelector} from "../../lib/mediaPlayer/slices/selector/MediaPlayerSelector";
import {ExhaustedMatchingGuard} from "../../lib/shared/domain/exceptions/ExhaustedMatchingGuard";
import {MediaPlayer} from "../../lib/mediaPlayer/model/MediaPlayer";


export interface PlayHomeViewModelProps {
    loading: LoadingState;
    deleteLoading: boolean;
    displayList: ReactElement;
    mediaPlayerList: MediaPlayer[]
}

export const PlayHomeViewModel = (state: RootState): PlayHomeViewModelProps => {
    const mediaPlayer = MediaPlayerSliceSelector.mediaPlayer(state);
    const loading = MediaPlayerSliceSelector.loading(state);
    const deleteLoading = MediaPlayerSliceSelector.deleteLoading(state);

    const displayMediaPlayer = () => {
        switch (loading) {
            case LoadingState.PENDING:
                return <div>Loading</div>
            case LoadingState.SUCCESS:
                return <div></div>
            case LoadingState.FAIL:
                return <div>Fail</div>
            case LoadingState.IDLE:
                return <div>Idle</div>
            default:
                return ExhaustedMatchingGuard(loading)
        }
    }
    return {
        loading,
        deleteLoading: deleteLoading === LoadingState.PENDING,
        displayList: displayMediaPlayer(),
        mediaPlayerList: mediaPlayer
    }
}