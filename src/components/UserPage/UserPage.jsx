import React from 'react';
import { useSelector } from 'react-redux';
import Search from '../Search/Search';
import ResultItem from '../ResultItem/ResultItem';
import Suggestions from '../Suggestions/Suggestions';

function UserPage() {
  const user = useSelector((store) => store.user);
  const searchResults = useSelector((store) => store.results);

  return (
    <div className="container">
      <h2>Welcome {user.username}, Lets Eat! </h2>

      <Suggestions />

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

export default UserPage;
