import {GetAllMediaPlayerResponse} from "./GetAllMediaPlayerResponse";
import {createAppAsyncThunks} from "../../../../app/appThunk";
import {
    GetMediaPlayerResponseFactoryFromGateway
} from "../../infrastructure/factories/GetMediaPlayerResponseFactoryFromGateway";

export const GetAllMediaPlayerAsync =
    createAppAsyncThunks<GetAllMediaPlayerResponse[]>(
        'mediaPlayer',
        async (
            _, {
                extra: {mediaPlayerApiGateway}, rejectWithValue
            }
        ) => {
            try {
                const response = await mediaPlayerApiGateway.getMediaPlayerList();
                return GetMediaPlayerResponseFactoryFromGateway(response)
            } catch (e) {
                return rejectWithValue(e);
            }
        }
    )