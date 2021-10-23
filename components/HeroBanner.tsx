import React from 'react';
import Image from 'next/image'
import styles from '../styles/Hero.module.css'

type HeroBannerType = {
    "title": string,
    "imdb": string,
    "rating": number,
    "description": string,
    "link": string
}
function HeroBanner({heroBanner}:{heroBanner:HeroBannerType}) {
    return (
        <div className={styles.container}>
            <div className={styles.information}>
                <p className={styles.title}>{heroBanner.title}</p>
                <ul>
                    <li>
                        <Image src='/IMDb.png' width={35} height={17} />
                        <span>{heroBanner.imdb}/100</span>
                    </li>
                    <li>
                        <Image src='/apple.png' width={16} height={17} />
                        <span>{heroBanner.rating}%</span>
                    </li>
                </ul>
                <p className={styles.detail}>
                    {heroBanner.description}
                </p>
                <a href={heroBanner.link}>
                    <i />
                    <span>WATCH TRAILER</span>
                </a>
            </div>
            <Image
                src='/heroBanner.png'
                alt="John Wick 3 : Parabellum"
                width={1440}
                height={600}
            />
        </div>
    );
}

export default HeroBanner;