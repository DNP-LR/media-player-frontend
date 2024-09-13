import {GetAllMediaPlayerResponse} from "../../usecases/GetMediaPlayer/GetAllMediaPlayerResponse";
import {GetAllMediaPlayerResponseGateway} from "../responses/GetAllMediaPlayerResponseGateway";

export const GetMediaPlayerResponseFactoryFromGateway = (
    data: GetAllMediaPlayerResponseGateway[]
): GetAllMediaPlayerResponse[] => {
    return data.map((item) => ({
        id: item.id,
        title: item.title,
        artist: item.artist,
        album: item.album,
        genre: item.genre,
        duration: item.duration,
        trackCount: item.trackCount,
        year: item.year,
        lyrics: item.lyrics,
        coverPath: item.coverPath,
        mp3Data: item.mp3Data
    }));
};
