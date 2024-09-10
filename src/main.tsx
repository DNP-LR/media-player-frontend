import {StrictMode, Suspense} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import './index.css'
import {AppStore, createStore} from "./app/store";
import {persistStore} from "redux-persist";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import MediaPlayerApiGatewayHttp from "./lib/mediaPlayer/infrastructure/gateway/MediaPlayerApiGatewayHttp";


export const store: AppStore = createStore({
    extraArgument: {
        mediaPlayerApiGateway: new MediaPlayerApiGatewayHttp()
    }
});
export const persist = persistStore(store);
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persist} loading={null}>
                <Suspense>
                    <App/>
                </Suspense>
            </PersistGate>
        </Provider>
    </StrictMode>,
)
