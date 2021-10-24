import React from 'react';
import Image from 'next/image'
import styles from '../styles/MovieItem.module.css';

function MovieItem({data}:any) {
    return (
        <ul className={styles.container}>
        {data?.map((movie:any, index:number) => (
            <li className={styles.item} key={index}>
                <div className={styles.favorite}>
                    <i/>
                    <span/>
                </div>
                <a href={movie.link} target="_blank">
                    <Image src={movie.image} width={250} height={370} />
                    <p className={styles.locationYear}>
                        {movie.releaseDate}
                    </p>
                    <p className={styles.name}>
                        {movie.title}
                    </p>
                    <ul className={styles.information}>
                        <li>
                            <Image src='/IMDb.png' width={35} height={17} />
                            <span>{movie.imdb}/10</span>
                        </li>
                        <li>
                            <Image src='/apple.png' width={16} height={17} />
                            <span>{movie.rating}%</span>
                        </li>
                    </ul>
                    <p className={styles.type}>
                        {movie.kind.join(", ")}
                    </p>
                </a>
            </li>
        ))}
        </ul>
    )
}

export default MovieItem;