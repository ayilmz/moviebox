import React, {useState, useRef} from 'react';
import styles from '../../styles/AutoComplete.module.css'

function AutoComplete() {
    const inputRef = useRef<HTMLInputElement>(null);

    const [visibleAutocomplete, setVisibleAutocomplete] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value.length > 0){
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
                        <li>The Batman</li>
                        <li>Cowboy Bebop</li>
                    </ul>
                </div>
                )
            }
        </>
        )
}

export default AutoComplete;