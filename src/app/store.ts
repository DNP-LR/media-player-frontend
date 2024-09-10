import {AnyAction, configureStore, ThunkDispatch} from "@reduxjs/toolkit";
import {FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE} from "redux-persist";
import {rootReducer} from "./rootReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
}

export const createPersistedReducer = persistReducer(persistConfig, rootReducer);

export interface Dependency {
    mediaPlayerApiGateway: ''
}

interface StoreProps {
    extraArgument: Dependency;
    preloadedState?: RootState

}

export const createStore = (
    {
        preloadedState,
        extraArgument,
    }: StoreProps) => {
    return configureStore({
        reducer: {},
        preloadedState,
        devTools: true,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument,
            },
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER
                ],
            },
            immutableCheck: {
                warnAfter: 300,
            },
        }),
    })
}

export type AppStore = ReturnType<typeof createStore>
export type RootState = ReturnType<typeof createPersistedReducer>
export type AppDispatch = ThunkDispatch<RootState, Dependency, AnyAction>;