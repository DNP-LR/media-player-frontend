import {GetAllMediaPlayerResponseGateway} from "../responses/GetAllMediaPlayerResponseGateway";
import {GetAllMediaPlayerResponse} from "../../usecases/GetMediaPlayer/GetAllMediaPlayerResponse";

export const GetMediaPlayerResponseFactoryFromGateway = (data: GetAllMediaPlayerResponseGateway[]): GetAllMediaPlayerResponse[] => {
    return data;
}