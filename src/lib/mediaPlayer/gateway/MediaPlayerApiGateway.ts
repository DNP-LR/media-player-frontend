import {GetAllMediaPlayerResponse} from "../usecases/GetMediaPlayer/GetAllMediaPlayerResponse";

export interface MediaPlayerApiGateway {
    getMediaPlayerList: () => Promise<GetAllMediaPlayerResponse[]>;
}