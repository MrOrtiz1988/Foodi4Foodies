import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Search from '../Search/Search';
import ResultItem from '../ResultItem/ResultItem';
import { useState } from 'react';

function UserPage() {
  const user = useSelector((store) => store.user);
  const searchResults = useSelector((store) => store.results);
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

  return (
    <div className="container">
      <h2>Welcome {user.username}, Lets Eat! </h2>

      <h4>Dont know what to eat? Click the suggestions button</h4>
      {!is_suggest ?
        <button onClick={suggestToggle}>Suggestions</button>
        : <button onClick={suggestToggle}>Close</button>}

      {is_suggest &&
        suggestions.map((type, i) => {
          return (
            <p key={i}>{type}</p>
          )
        })
      }
      {is_suggest && <button onClick={reRoll}>Re-Roll</button>}

      <Search />

      {
        searchResults.map(result => {
          return (
            <ResultItem key={result.id} result={result} />
          )
        })
      }

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
