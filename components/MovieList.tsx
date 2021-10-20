import React from 'react';
import MovieItem from "./MovieItem";
import styles from "../styles/MovieList.module.css"

interface IProps  {
    title: string;
}

const MovieList:React.FC<IProps> = ({title}:IProps) => {
    return (
        <div className={styles.container}>
            <ul className={styles.titleAndLink}>
                <li>{title}</li>
                <li>See more</li>
            </ul>
            <MovieItem />
        </div>
    );
}

export default MovieList;