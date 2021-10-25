import React from 'react';
import styles from "../styles/CastItem.module.css";
import Image from "next/image";

function CastItem({data}:any) {
    return (
        <ul className={styles.container}>
            {data?.map((item:any, index:number) => (
                <li className={styles.item} key={index}>
                    <a href={item.link} target="_blank">
                        <Image src={item.image} width={250} height={370} alt={item.name} />
                        <p className={styles.title}>
                            {item.name}
                        </p>
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default CastItem;