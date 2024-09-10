// import {createAsyncThunk} from "@reduxjs/toolkit";
// import {GetMediaPlayerResponse} from "./GetMediaPlayerResponse";
// import {GetMediaPlayerCommand} from "./GetMediaPlayerCommand";
//
// export const GetMediaPlayer =
//     createAsyncThunk<GetMediaPlayerResponse, GetMediaPlayerCommand>(
//         'mediaPlayer',
//         async (
//             getCommand, {
//                 extra: {mediaPlayerApiGateway}, rejectWithValue
//             }) => {
//             try {
//                 return await mediaPlayerApiGateway
//             }
//         }
//     )