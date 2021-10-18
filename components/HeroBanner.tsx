import React from 'react';
import Image from 'next/image'
import styles from '../styles/Hero.module.css'
function HeroBanner() {
    return (
        <div className={styles.container}>
            <div className={styles.information}>
                <p className={styles.title}>John Wick 3 : Parabellum</p>
                <ul>
                    <li>
                        <Image src='/IMDb.png' width={35} height={17} />
                        <span>86.0/100</span>
                    </li>
                    <li>
                        <Image src='/apple.png' width={16} height={17} />
                        <span>97%</span>
                    </li>
                </ul>
                <p className={styles.detail}>
                    John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
                </p>
                <a>
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