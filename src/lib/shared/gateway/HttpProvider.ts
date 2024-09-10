export abstract class HttpProvider {
    private baseUrl: string = import.meta.env.MEDIA_PLAYER_ENDPOINT;

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