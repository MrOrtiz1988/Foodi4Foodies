




function ResultItem({ result }) {
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
        <button className='btn'>Save</button>
      </div>
    </div>
  )
}

export default ResultItem;