import env from ".env";

export abstract class HttpProvider {
    private baseUrl: string = env.MEDIA_PLAYER_ENDPOINT;

    public async get(url: string): Promise<Response> {

        return await fetch(this.getUrl(url), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }


    private getUrl(url: string) {
        return this.baseUrl + url
    }

}