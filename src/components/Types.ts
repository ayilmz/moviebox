export interface HeroBannerType {
    title: string;
    imdb: number;
    image: string;
    rating: number;
    description: number;
    link: string
}

export interface MovieType {
    title: string;
    imdb: string;
    image: string;
    rating: number;
    description: string;
    link: string;
    releaseDate: string;
    kind: string[];
}

export interface VideoType {
    title: string;
    image: string;
    link: string
}

export interface CastType {
    name: string;
    image: string;
    link: string
}

export interface HomeTypes {
    heroBanner: HeroBannerType;
    featuredMovie: MovieType;
    newArrival: MovieType;
    exclusiveVideos: VideoType;
    featuredCasts: CastType;
}