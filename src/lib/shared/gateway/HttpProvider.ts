export abstract class HttpProvider {
    // private baseUrl: string = env.MEDIA_PLAYER_ENDPOINT;
    private baseUrl: string = 'json/';

    public async get(url: string, query?: object): Promise<Response> {
        let queryUrl: string = '';
        if (query) {
            queryUrl = '?' + new URLSearchParams(Object.entries(query)).toString();
        }
        return await fetch(this.getUrl(url + queryUrl), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    private getUrl(url: string) {
        return this.baseUrl + url
    }

}