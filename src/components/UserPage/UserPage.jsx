import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import Search from '../Search/Search';

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
            <div key={result.id}>
              <h1>{result.name}</h1>
              <img src={result.image_url} className='result-img' />
              {!result.is_closed ? <p>Open Now</p> : <p>Closed</p>}
              <p>{result.rating} out of 5 stars</p>
              <p>{result.location.display_address}</p>
              <p>{result.display_phone}</p>
              <a href={result.url} target='_blank'>Visit Here</a>
              <button className='btn'>Save</button>
              <button className='btn'>Favorites</button>
            </div>
          )
        })
      }
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
