import React, {FC} from 'react';
import MovieItem from "./MovieItem";
import VideoItem from "./VideoItem";
import CastItem from "./CastItem";
import styles from "../styles/Items.module.css"
import { WIDGET_TYPE } from '../enums'

interface MovieListProps  {
    title: string;
    type: any;
    data: any;
}

const Items: FC<MovieListProps> = ({ title, type, data }) => {
    return (
        <div className={styles.container}>
            <ul className={styles.titleAndLink}>
                <li>{title}</li>
                <li>See more</li>
            </ul>
            {type === WIDGET_TYPE.MOVIE && (
                <MovieItem data={data} />
            )}

            {type === WIDGET_TYPE.VIDEO && (
                <VideoItem data={data} />
            )}

            {type === WIDGET_TYPE.CAST && (
                <CastItem data={data} />
            )}

        </div>
    );
}

export default Items;