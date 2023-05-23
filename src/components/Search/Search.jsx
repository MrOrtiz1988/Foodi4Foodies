import { useState } from "react";
import './Search.css';
import { useDispatch } from 'react-redux';

function Search() {

    const [searchInput, setSearchInput] = useState('');
    const dispatch = useDispatch();

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SAGA/SEARCH',
            payload: searchInput
        })
    }

    return (
        <div>
            <form className="search-form">
                <input
                    placeholder="What would you like to eat?"
                    value={searchInput}
                    onChange={event => setSearchInput(event.target.value)}
                />
                <button>Search</button>
            </form>
        </div>
    )
}

export default Search;