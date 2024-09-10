/// <reference types="vite/client" />
declare module '.env' {
    const env: {
        MEDIA_PLAYER_ENDPOINT: 'http://localhost:8080'
    };
    export default env
}