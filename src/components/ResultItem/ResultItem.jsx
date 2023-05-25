import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


function ResultItem({ result }) {

  useEffect(() => {
    dispatch({
      type: 'SAGA/GET_PLACE_ID_LIST'
    });
  }, [])


  const placeId = useSelector(store => store.placeIdList);
  const dispatch = useDispatch();

  const match = () => {
    let placeIds = placeId.map(place => place.place_id);
    if (placeIds.includes(result.id)) {
      return true;
    }
    else {
      return false;
    }
  }

  const saveIt = () => {
    dispatch({
      type: 'SAGA/SAVE',
      payload: {
        placeId: result.id,
        name: result.name,
        image: result.image_url,
        address: result.location.display_address,
        rating: result.rating,
        phone: result.display_phone,
        url: result.url
      }
    })
  }

  return (
    <div className='result-div'>
      <h2 className='result-title'>{result.name}</h2>
      <img src={result.image_url} className='result-img' alt={result.name} />
      <div className='result-details'>
        {!result.is_closed ? <p>Open Now</p> : <p>Closed</p>}
        <p>{result.rating} out of 5 stars</p>
        <p>{result.location.display_address}</p>
        <p>{result.display_phone}</p>
        <a href={result.url} target='_blank'>Visit Here</a>
      </div>
      <br></br>
      <div className='btn-div'>
        {!match() ? <button onClick={saveIt} className='btn'>Save</button> : <p>Saved</p>}
      </div>
    </div>
  )
}

export default ResultItem;