
import MovieItem from '../components/MovieItem'
import '../App.css';

const recentMovies = [
  // ACTION (5)
  {
    id: 201,
    name: "Salaar: Part 1 – Ceasefire",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNTU0ZjYxOWItOWViMC00YWVlLWJlMGUtZjc1YWU0NTlhY2ZhXkEyXkFqcGc@._V1_.jpg",
    rating: 6.8,
    genre: "Action"
  },
  {
    id: 202,
    name: "Dasara",
    posterUrl: "https://i0.wp.com/cinematrace.com/wp-content/uploads/2023/03/dasara_1675253603.jpg?fit=857%2C1200&ssl=1",
    rating: 7.6,
    genre: "Action"
  },
  {
    id: 203,
    name: "Veera Simha Reddy",
    posterUrl: "https://img.airtel.tv/unsafe/fit-in/500x0/filters:format(webp)/https://xstreamcp-assets-msp.streamready.in/assets/HOTSTAR_DTH/MOVIE/690de7fd365a9d4e7af83963/images/PORTRAIT/1712686112401-v?o=production",
    rating: 6.3,
    genre: "Action"
  },
  {
    id: 204,
    name: "Waltair Veerayya",
    posterUrl: "https://images.plex.tv/photo?size=large-1280&url=https%3A%2F%2Fmetadata-static.plex.tv%2F7%2Fgracenote%2F7127d229dd7c1e7b1d552a53a65fbd2a.jpg",
    rating: 6.2,
    genre: "Action"
  },
  {
    id: 205,
    name: "Bhagavanth Kesari",
    posterUrl: "https://m.media-amazon.com/images/S/pv-target-images/f9d999920116c45e4e05f6c9a6c40f6cf93fb9b0b5d05be9cded3e64b3c4f759.jpg",
    rating: 6.7,
    genre: "Action"
  },

  // DRAMA (5)
  {
    id: 206,
    name: "Balagam",
    posterUrl: "https://images.justwatch.com/poster/320896876/s718/balagam.jpg",
    rating: 8.4,
    genre: "Drama"
  },
  {
    id: 207,
    name: "Hi Nanna",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/d/d7/Hi_Nanna_poster.jpg",
    rating: 8.2,
    genre: "Drama"
  },
  {
    id: 208,
    name: "Writer Padmabhushan",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BOTEwOTJmY2UtNzBlYi00MjVjLWIwZWUtOTk1MGY1NTZlM2Q0XkEyXkFqcGc@._V1_.jpg",
    rating: 7.8,
    genre: "Drama"
  },
  {
    id: 209,
    name: "Month of Madhu",
    posterUrl: "https://xstreamcp-assets-msp.streamready.in/assets/AHA/MOVIE/657c401fa9540e6b3ede82e2/images/0-2x3.jpg",
    rating: 7.6,
    genre: "Drama"
  },
  {
    id: 210,
    name: "Sapta Sagaralu Daati – Side A",
    posterUrl: "https://m.media-amazon.com/images/S/pv-target-images/821f8265055bb1000eadb0b44a83754991d30ebddb5c3eb0a398a87475cdc963.jpg",
    rating: 8.1,
    genre: "Drama"
  },

  // ROMANCE (5)
  {
    id: 211,
    name: "Baby",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYmRlNmYxMzUtY2E1Mi00ZWVjLWE0NTYtNTQ3NmJhM2I1YWJmXkEyXkFqcGc@._V1_.jpg",
    rating: 7.9,
    genre: "Romance"
  },
  {
    id: 212,
    name: "Samajavaragamana",
    posterUrl: "https://m.media-amazon.com/images/S/pv-target-images/1103173deaa43caf4b90a6ff3eba06c6cdfc41fd62c6563cd8b1cab9c9829cff.jpg",
    rating: 7.7,
    genre: "Romance"
  },
  {
    id: 213,
    name: "Kushi",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/6/65/Kushi_%282022_film%29.jpg",
    rating: 5.4,
    genre: "Romance"
  },
  {
    id: 214,
    name: "Ooru Peru Bhairavakona",
    posterUrl: "https://m.media-amazon.com/images/S/pv-target-images/f636c88ca10abe0276818301355f92e8c651a891d5ca9511659723492fbb7eda.jpg",
    rating: 6.6,
    genre: "Romance"
  },
  {
    id: 215,
    name: "Ashoka Vanamlo Arjuna Kalyanam",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Ashoka_Vanamlo_Arjuna_Kalyanam.jpg/250px-Ashoka_Vanamlo_Arjuna_Kalyanam.jpg",
    rating: 7.5,
    genre: "Romance"
  },

  // THRILLER (5)
  {
    id: 216,
    name: "Virupaksha",
    posterUrl: "https://m.media-amazon.com/images/S/pv-target-images/b24eeb6b42a52f810b02773807baf7eae96366ef2cc82a393125f3515113185c.jpg",
    rating: 7.3,
    genre: "Thriller"
  },
  {
    id: 217,
    name: "Dhamaka",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMGNiMWNiYmUtNmY4Yy00OGMyLTkwOTAtZmZiMjAyYjRhMDM4XkEyXkFqcGc@._V1_.jpg",
    rating: 6.9,
    genre: "Thriller"
  },
  {
    id: 218,
    name: "Ravanasura",
    posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmE49ieOGdwdBFY2Z1lJr0uAsoOU0nCyjHpw&s",
    rating: 5.8,
    genre: "Thriller"
  },
  {
    id: 219,
    name: "Anni Manchi Sakunamule",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYjQ4Y2NiN2QtODc4OC00ZDczLWJmNjEtYjg4ZGRhYTBmOGU0XkEyXkFqcGc@._V1_.jpg",
    rating: 7.1,
    genre: "Thriller"
  },
  {
    id: 220,
    name: "Mangalavaaram",
    posterUrl: "https://assets.voxcinemas.com/posters/P_HO00010688.jpg",
    rating: 6.5,
    genre: "Thriller"
  }
]

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
            return <MovieItem movie={each_movie} key={each_movie.id}/>
          })}
          </div>
    </div>
  )
}

export default RecentlyWatched
