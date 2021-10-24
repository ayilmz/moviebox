import React, {FC} from 'react';
import MovieItem from "./MovieItem";
import styles from "../styles/MovieList.module.css"

interface MovieListProps  {
    title: string;
    data: any;
}

const MovieList: FC<MovieListProps> = ({ title, data }) => {
    return (
        <div className={styles.container}>
            <ul className={styles.titleAndLink}>
                <li>{title}</li>
                <li>See more</li>
            </ul>
            <MovieItem data={data} />
        </div>
    );
}

export default MovieList;