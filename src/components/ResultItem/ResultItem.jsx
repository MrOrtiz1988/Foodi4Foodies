import { useDispatch } from 'react-redux';




function ResultItem({ result }) {

  const dispatch = useDispatch();

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
        <button onClick={saveIt} className='btn'>Save</button>
      </div>
    </div>
  )
}

export default ResultItem;