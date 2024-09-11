import {MediaPlayerApiGateway} from "../../gateway/MediaPlayerApiGateway";
import {GetAllMediaPlayerResponse} from "../../usecases/GetMediaPlayer/GetAllMediaPlayerResponse";
import {HttpProvider} from "../../../shared/gateway/HttpProvider";
import {MediaPlayerRoutes} from "../../../../routes/ApiRoutes";
import {ErrorState} from "../../../shared/domain/exceptions/ErrorState";
import {GetMediaPlayerResponseFactoryFromGateway} from "../factories/GetMediaPlayerResponseFactoryFromGateway";

export default class MediaPlayerApiGatewayHttp extends HttpProvider implements MediaPlayerApiGateway {

    async getMediaPlayerList(): Promise<GetAllMediaPlayerResponse[]> {
        let response: Response;
        try {
            response = await this.get(MediaPlayerRoutes.ALL);
        } catch (e) {
            console.log(e)
            throw ErrorState.InternetError();
        }
        if (response.status === 200) {
            const result = await response.json();
            return GetMediaPlayerResponseFactoryFromGateway(result);
        }
        throw ErrorState.ServerError()
    }
}