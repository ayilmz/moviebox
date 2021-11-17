import React, {useState, useRef, useEffect} from 'react';
import styles from '../../styles/AutoComplete.module.css'
import axios from "axios";
import { CastType } from "./Types"

function AutoComplete() {
    const inputRef = useRef<HTMLInputElement>(null);

    const [visibleAutocomplete, setVisibleAutocomplete] = useState(false);

    const [data, setData] = useState([]);
    const url = "api/featured-casts.json";


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value.length > 0){
            axios.get(url+"?key="+e.target.value)
                .then(res => {
                    setData( res.data.featuredCasts);
                });
            setVisibleAutocomplete(true);
        }else{
            setVisibleAutocomplete(false);
        }
    }
    return (
        <>
            <input
                type="text"
                placeholder="What do you want to watch?"
                ref={inputRef}
                onChange={handleChange}
            />
            { visibleAutocomplete && (
                <div className={styles.container}>
                    <ul>
                        {data?.map((item:CastType, index:number) => (
                            <li>
                                <a href={item.link} target="_blank">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                )
            }
        </>
        )
}

export default AutoComplete;