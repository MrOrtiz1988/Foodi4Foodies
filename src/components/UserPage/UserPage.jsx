import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Search from '../Search/Search';
import ResultItem from '../ResultItem/ResultItem';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const searchResults = useSelector((store) => store.results);
  const suggestions = useSelector(store => store.suggestions);
  const dispatch = useDispatch();

  const reRoll = () => {
    dispatch({ type: 'REROLL' })
  }

  return (
    <div className="container">
      <h2>Welcome, {user.username}, Lets Eat! </h2>

      {
        suggestions.map((type, i) => {
          return (
            <p key={i}>{type}</p>
          )
        })
      }
      <button onClick={reRoll}>Re-Roll</button>

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
