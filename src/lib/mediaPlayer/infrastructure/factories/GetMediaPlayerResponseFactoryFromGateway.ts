import {GetMediaPlayerResponseGateway} from "../responses/GetMediaPlayerResponseGateway";
import {GetMediaPlayerResponse} from "../../usecases/GetMediaPlayer/GetMediaPlayerResponse";

export const GetMediaPlayerResponseFactoryFromGateway = (data: GetMediaPlayerResponseGateway): GetMediaPlayerResponse => {
    return data;
}