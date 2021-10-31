import React from 'react';
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation"
import styles from '../../styles/MovieItem.module.css';
import { MovieType } from './Types'


SwiperCore.use([Navigation]);

function MovieItem({data}:{data:MovieType[]}) {
    return (
        <Swiper slidesPerView={4} spaceBetween={0} slidesPerGroup={1} loop={true} loopFillGroupWithBlank={true} navigation={true}>
            <div className={styles.container}>
            {data?.map((item:MovieType, index:number) => (
                <SwiperSlide  key={index}>
                    <div className={styles.item}>
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
                    </div>
                </SwiperSlide>
            ))}
            </div>
        </Swiper>
    )
}

export default MovieItem;