import React from 'react';
import Image from 'next/image'
import styles from '../../styles/MovieItem.module.css';
import { MovieType } from './Types'

function MovieItem({data}:{data:MovieType[]}) {
    return (
        <ul className={styles.container}>
        {data?.map((item:any, index:number) => (
            <li className={styles.item} key={index}>
                <div className={styles.favorite}>
                    <i/>
                    <span/>
                </div>
                <a href={item.link} target="_blank">
                    <Image src={item.image} width={250} height={370} alt={item.title} />
                    <p className={styles.locationYear}>
                        {item.releaseDate}
                    </p>
                    <p className={styles.name}>
                        {item.title}
                    </p>
                    <ul className={styles.information}>
                        <li>
                            <Image src='/IMDb.png' width={35} height={17} alt="IMDb"  />
                            <span>{item.imdb}/10</span>
                        </li>
                        <li>
                            <Image src='/apple.png' width={16} height={17} alt="Rating"/>
                            <span>{item.rating}%</span>
                        </li>
                    </ul>
                    <p className={styles.type}>
                        {item.kind.join(", ")}
                    </p>
                </a>
            </li>
        ))}
        </ul>
    )
}

export default MovieItem;