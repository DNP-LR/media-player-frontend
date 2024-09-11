export interface GetAllMediaPlayerCommand {
    id: number;
    title: string;
    artist: string;
    album: string;
    genre: string;
    duration: number;
    trackNumber: number;
    trackCount: number;
    year: number;
    comment: string;
    coverPath: string
}
