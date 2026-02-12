import React from 'react'
import MovieItem from '../components/MovieItem'
import '../App.css';
import { Link } from 'react-router-dom';
import { favMovies } from '../data';


const FavMovies = (props) => {
    const {searchInput}=props 
      const searchResults=favMovies.filter((eachItem)=>{
    const movieName=eachItem.name.toLowerCase().trim()
    return (movieName.includes(searchInput.toLowerCase().trim()))
  })
  return ( 
    <div>
      <div>
      <h1 className='heading'>Favourite Movies</h1>
            <div className='container'>
          {searchResults.map((each_movie)=>{
            
            return <Link to={`/fav/${each_movie.id}`} key={`${each_movie.id}`}><MovieItem movie={each_movie} key={each_movie.id}/></Link>
          })}
          </div>
    </div>
    </div>
  )
}

export default FavMovies
