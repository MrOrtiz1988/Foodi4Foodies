import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Suggestions() {
    const suggestions = useSelector(store => store.suggestions);
    const [is_suggest, setIs_suggest] = useState(false);
    const dispatch = useDispatch();

    const reRoll = () => {
        dispatch({ type: 'REROLL' });
    }

    const suggestToggle = () => {
        if (!is_suggest) {
            setIs_suggest(true);
        } else {
            setIs_suggest(false);
        }
    }

    const chosen = (type) => {
        dispatch({
            type: 'SAGA/SEARCH',
            payload: type
        })
    }

    return (
        <div>
            <h4>Dont know what to eat? Click the suggestions button</h4>
            {!is_suggest ?
                <button onClick={suggestToggle}>Suggestions</button>
                : <button onClick={suggestToggle}>Close</button>}

            {is_suggest &&
                suggestions.map((type, i) => {
                    return (
                        <p onClick={() => chosen(type)} key={i}>{type}</p>
                    )
                })
            }
            {is_suggest && <button onClick={reRoll}>Re-Roll</button>}
        </div>
    )
}

export default Suggestions