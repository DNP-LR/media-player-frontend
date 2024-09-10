import {AppDispatch, Dependency, RootState} from "./store";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const createAppAsyncThunks = createAsyncThunk.withTypes<{
    state: RootState,
    dispatch: AppDispatch,
    extra: Dependency
}>();