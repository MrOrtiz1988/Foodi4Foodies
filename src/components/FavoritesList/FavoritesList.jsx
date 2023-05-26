import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function FavoritesList() {

  const dispatch = useDispatch();
  const placeList = useSelector(store => store.placeList);

  useEffect(() => {
    dispatch({
      type: 'SAGA/GET_PLACES'
    });
  }, []);

  return (
    <div className="container">
      <div>
        <p>Favorites List</p>
      </div>
      {
        placeList.map(place => {
          if (place.is_favorite) {
            return (
              <div className='result-div' key={place.id}>
                <h2 className='result-title'>{place.name}</h2>
                <img src={place.image} className='result-img' alt={place.name} />
                <div className='result-details'>
                  <p>{place.rating} out of 5 stars</p>
                  <p>{place.address}</p>
                  <p>{place.phone}</p>
                  <a href={place.url} target='_blank'>Visit Here</a>
                </div>
                <br></br>
                <div className='btn-div'>
                  <button className='btn'>Love it!</button>
                </div>
              </div>
            )
          }
        })
      }
    </div>
  )
}

export default FavoritesList;
