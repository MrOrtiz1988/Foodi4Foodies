import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Suggestions() {
    //This retrieves the 5 random suggestions from the store
    const suggestions = useSelector(store => store.suggestions);
    //This state will be used for toggling purposes
    const [is_suggest, setIs_suggest] = useState(false);
    const dispatch = useDispatch();
    //reRoll makes the suggestions reducer re-generate the list of suggestions
    const reRoll = () => {
        dispatch({ type: 'REROLL' });
    }
    //This will be my toggle for the suggestions button on the DOM goes between
    //suggestions being hidden to it being displayed
    const suggestToggle = () => {
        if (!is_suggest) {
            setIs_suggest(true);
        } else {
            setIs_suggest(false);
        }
    }
    //This will send to the server the value that got clicked on instead of having to type
    //it in the search input
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