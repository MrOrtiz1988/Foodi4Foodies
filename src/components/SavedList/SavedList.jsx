import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function SavedList() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'SAGA/GET_PLACES'
    });
  }, []);

  return (
    <div className="container">
      <h1>Saved Page</h1>
    </div>
  );
}

export default SavedList;
