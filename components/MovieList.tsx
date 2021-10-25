import React, {FC} from 'react';
import MovieItem from "./MovieItem";
import VideoItem from "./VideoItem";
import CastItem from "./CastItem";
import styles from "../styles/MovieList.module.css"

interface MovieListProps  {
    title: string;
    type: any;
    data: any;
}

const MovieList: FC<MovieListProps> = ({ title, type, data }) => {
    return (
        <div className={styles.container}>
            <ul className={styles.titleAndLink}>
                <li>{title}</li>
                <li>See more</li>
            </ul>
            {type === "movie" && (
                <MovieItem data={data} />
            )}

            {type === "video" && (
                <VideoItem data={data} />
            )}

            {type === "cast" && (
                <CastItem data={data} />
            )}

        </div>
    );
}

export default MovieList;