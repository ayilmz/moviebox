export type HeroBannerType = {
    "title": string,
    "imdb": string,
    "image": string,
    "rating": number,
    "description": string,
    "link": string
}

export type MovieType = {
    "title": string,
    "imdb": string,
    "image": string,
    "rating": number,
    "description": string,
    "link": string
}

export type VideoType = {
    "title": string,
    "image": string,
    "link": string
}

export type CastType = {
    "name": string,
    "image": string,
    "link": string
}

export type HomeTypes = {
    "heroBanner": HeroBannerType;
    "featuredMovie": MovieType;
    "newArrival": MovieType;
    "exclusiveVideos": VideoType;
    "featuredCasts": CastType;
}