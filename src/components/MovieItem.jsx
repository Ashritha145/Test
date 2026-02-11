import React from 'react'

import './MovieItem.css'

const MovieItem = (props) => {
    const {movie} = props
   const {name,posterUrl,rating,genre}=movie
    return (
    <div >
        <img src={posterUrl} className='image'/>
      <h1 className='movie-title'>Movie: {name}</h1>
      <h1 className='movie-genre'>Genre: {genre}</h1>
      <p className='movie-rating'>{rating>8?`⭐⭐⭐${rating}`:`⭐${rating}`}</p>
    </div>
  )
}

export default MovieItem