export enum TypesPoster {
    ALBUM = 1,
    ARTIST = 2,
    PODCAST = 3,
    PLAYLIST = 4,
    GENRES = 5,
    TRACK = 6
}

export interface Carrousel {
    title: string;
    link ?: string;
    description ?: string;
    items: any[],
    type : TypesPoster
}