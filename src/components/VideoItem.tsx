import React from 'react';
import styles from "../../styles/VideoItem.module.css";
import Image from "next/image";

function VideoItem({data}:any) {
    return (
        <ul className={styles.container}>
            {data?.map((item:any, index:number) => (
                <li className={styles.item} key={index}>
                    <i className={styles.play}/>
                    <a href={item.link} target="_blank">
                        <Image src={item.image} width={450} height={253} alt={item.title} />
                        <p className={styles.title}>
                            {item.title}
                        </p>
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default VideoItem;