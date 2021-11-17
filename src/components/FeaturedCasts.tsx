import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Items from './Items'
import {WIDGET_TYPE} from "../../enums";

function FeaturedCasts() {
    const [data, setData] = useState(null);
    const url = "/api/featured-casts.json";


    useEffect(() => {
        axios.get(url)
            .then(res => {
                setData( res.data.featuredCasts);
            });
    }, []);


    if(!data) return null

    return (
        <Items title="Featured Casts" data={data} type={WIDGET_TYPE.CAST}/>
    )
}

export default FeaturedCasts;