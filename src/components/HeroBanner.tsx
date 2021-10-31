import React from 'react';
import Image from 'next/image'
import styles from '../../styles/Hero.module.css'
import { HeroBannerType } from './Types'

function HeroBanner({heroBanner}:{heroBanner:HeroBannerType}) {
    return (
        <div className={styles.container}>
            <div className={styles.information}>
                <p className={styles.title}>{heroBanner.title}</p>
                <ul>
                    <li>
                        <Image src='/IMDb.png' width={35} height={17} />
                        <span>{heroBanner.imdb}/10</span>
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
                src={heroBanner.image}
                alt={heroBanner.title}
                width={1240}
                height={600}
            />
        </div>
    );
}

export default HeroBanner;