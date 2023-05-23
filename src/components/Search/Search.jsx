import { useState } from "react";

function Search () {

    const [searchInput, setSearchInput] = useState('');
    
    return (
        <div>
            <input 
                placeholder="What would you like to eat?"
                value={searchInput}
                onChange={event => setSearchInput(event.target.value)}
            />
            <button>Search</button>
        </div>
    )
}

export default Search;