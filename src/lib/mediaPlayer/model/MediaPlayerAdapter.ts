import {createEntityAdapter} from "@reduxjs/toolkit";
import {MediaPlayer} from "./MediaPlayer";

export const mediaPlayerAdapter = createEntityAdapter<MediaPlayer>()