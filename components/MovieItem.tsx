import React from 'react';
import Image from 'next/image'
import styles from '../styles/MovieItem.module.css';

function MovieItem() {
    return (
        <div className={styles.container}>
            <Image src='/poster.png' width={250} height={370} />
            <p className={styles.locationYear}>
                USA, 2016 - Current
            </p>
            <p className={styles.name}>
                Stranger Things
            </p>
            <ul className={styles.information}>
                <li>
                    <Image src='/IMDb.png' width={35} height={17} />
                    <span>86.0/100</span>
                </li>
                <li>
                    <Image src='/apple.png' width={16} height={17} />
                    <span>97%</span>
                </li>
            </ul>
            <p className={styles.type}>
                Action, Adventure, Horror
            </p>
        </div>
    );
}

export default MovieItem;