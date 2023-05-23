import { useState } from "react";
import './Search.css';
import { useDispatch } from 'react-redux';

function Search() {

    const [searchInput, setSearchInput] = useState('');
    const dispatch = useDispatch();

    const submitHandler = (event) => {
        event.preventDefault();
        //Tells saga which function to run and to use the search input value
        dispatch({
            type: 'SAGA/SEARCH',
            payload: searchInput
        })
        //Clears the input field
        setSearchInput('');
    }

    return (
        <div>
            <form className="search-form" onSubmit={submitHandler}>
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