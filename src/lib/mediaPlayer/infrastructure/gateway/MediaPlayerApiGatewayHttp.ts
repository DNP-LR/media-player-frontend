import {MediaPlayerApiGateway} from "../../gateway/MediaPlayerApiGateway";
import {GetMediaPlayerResponse} from "../../usecases/GetMediaPlayer/GetMediaPlayerResponse";
import {HttpProvider} from "../../../shared/gateway/HttpProvider";
import {MediaPlayerRoutes} from "../../../../routes/ApiRoutes";
import {ErrorState} from "../../../shared/domain/exceptions/ErrorState";
import {GetMediaPlayerResponseFactoryFromGateway} from "../factories/GetMediaPlayerResponseFactoryFromGateway";

export default class MediaPlayerApiGatewayHttp extends HttpProvider implements MediaPlayerApiGateway {
    async getMediaPlayerList(): Promise<GetMediaPlayerResponse> {
        let response: Response;
        try {
            response = await this.get(MediaPlayerRoutes.ALL);

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (e) {
            throw ErrorState.InternetError();
        }
        if (response.status === 2000) {
            const result = await response.json();
            return GetMediaPlayerResponseFactoryFromGateway(result);
        }
        throw ErrorState.ServerError()
    }

}