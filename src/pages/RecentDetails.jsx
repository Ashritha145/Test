import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { recentMovies } from '../data';
import '../Details.css'
const RecentDetails = () => {
   const navigate=useNavigate();
    const {id} = useParams();
    const movie = recentMovies.find(
      (eachMovie)=> eachMovie.id===parseInt(id)
    )
  return (
   <div className='movie-details-container'>
   <h1 className='movie-name'>{`${movie.name} Details: `}</h1>
      <div className='movie-card'>
       <img
          src={movie.posterUrl}
          alt={movie.name}
          className="movie-poster"
        />
      <div className='movie-info'>
      <p>Director: {movie.director}</p>
       <p>Producer: {movie.producer}</p>
       <p>Actors: {movie.actors.join(", ")}</p>
       <button onClick={()=>navigate(-1)} className='back-button'>Back</button>
       </div>
       </div>
    </div>
  )
}

export default RecentDetails
