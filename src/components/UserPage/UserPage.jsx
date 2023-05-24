import React from 'react';
import {useSelector} from 'react-redux';
import Search from '../Search/Search';
import ResultItem from '../ResultItem/ResultItem';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const searchResults = useSelector((store) => store.results)
  return (
    <div className="container">
      <h2>Welcome, {user.username}, Lets Eat! </h2>
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
