import { useState } from "react";
import { useDispatch } from 'react-redux';
import { TextField } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

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
                <TextField
                    id="outlined-basic"
                    label="What would you like?"
                    variant="outlined"
                    value={searchInput}
                    onChange={event => setSearchInput(event.target.value)}
                />
                {/* <input
                    placeholder="What would you like to eat?"
                    value={searchInput}
                    onChange={event => setSearchInput(event.target.value)}
                /> */}
                {/* <button>Search</button> */}
                <IconButton type="submit" aria-label="Search" size="large">
                    <SearchIcon />
                </IconButton>
            </form>
        </div>
    )
}

export default Search;