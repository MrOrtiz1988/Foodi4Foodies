import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rating from '@mui/material/Rating';

function SavedList() {

  const dispatch = useDispatch();
  const placeList = useSelector(store => store.placeList);

  useEffect(() => {
    dispatch({
      type: 'SAGA/GET_PLACES'
    });
  }, []);

  const addToFavorites = (id) => {
    dispatch({
      type: 'SAGA/CHANGE_TO_FAVORITES',
      payload: id
    })
  }

  const deletePlace = (id) => {
    dispatch({
      type: 'SAGA/DELETE_PLACE',
      payload: id
    })
  }

  return (
    <div className="container">
      <h1>Saved Page</h1>

      {
        placeList.map(place => {
          if (!place.is_favorite) {
            return (
              <div className='result-div' key={place.id}>
                <h2 className='result-title'>{place.name}</h2>
                <img src={place.image} className='result-img' alt={place.name} />
                <div className='result-details'>
                  <Rating name="half-rating-read" defaultValue={place.rating} precision={0.5} readOnly />
                  <p>{place.address}</p>
                  <p>{place.phone}</p>
                  <a href={place.url} target='_blank'><button className='btn'>Visit Here</button></a>
                </div>
                <br></br>
                <div className='btn-div'>
                  <button onClick={() => addToFavorites(place.id)} className='btn'>Love it!</button>
                  <button onClick={() => deletePlace(place.id)} className='btn'>Remove</button>
                </div>
              </div>
            )
          }
        })
      }
    </div>
  );
}

export default SavedList;
