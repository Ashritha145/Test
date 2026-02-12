import React from 'react'
import MovieItem from "../components/MovieItem"
import { Link } from 'react-router-dom';

import { movies } from '../data';

const Movies = (props) => {
    const {searchInput} = props
  const searchResults=movies.filter((eachItem)=>{
    const movieName=eachItem.name.toLowerCase().trim()
    return (movieName.includes(searchInput.toLowerCase().trim()))
  })


  return (
    <div>
      <h1 className='heading'>Movies</h1>
            <div className='container'>
          {searchResults.map((each_movie)=>{
            return <Link to={`/${each_movie.id}`} key={each_movie.id}><MovieItem movie={each_movie} key={each_movie.id}/></Link>
          })}
          </div>
    </div>
  )
}

export default Movies
