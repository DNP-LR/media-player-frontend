import {GetMediaPlayerResponse} from "../usecases/GetMediaPlayer/GetMediaPlayerResponse";

export interface MediaPlayerApiGateway {
    getMediaPlayerList: () => Promise<GetMediaPlayerResponse>;
}