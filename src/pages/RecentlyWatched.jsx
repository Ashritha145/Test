
import MovieItem from '../components/MovieItem'
import '../App.css';
import { Link } from 'react-router-dom';
import { recentMovies } from '../data';



const RecentlyWatched = (props) => {

  const {searchInput} = props
   const searchResults=recentMovies.filter((eachItem)=>{
    const movieName=eachItem.name.toLowerCase().trim()
    return (movieName.includes(searchInput.toLowerCase().trim()))
  })
  return (
    <div>
      <h1 className='heading'>Recently Watched Movies</h1>
            <div className='container'>
          {searchResults.map((each_movie)=>{
            return <Link to={`/recent/${each_movie.id}`} key={each_movie.id}><MovieItem movie={each_movie} key={each_movie.id}/></Link>
          })}
          </div>
    </div>
  )
}

export default RecentlyWatched
