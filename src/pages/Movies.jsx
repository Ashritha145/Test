import React from 'react'
import MovieItem from "../components/MovieItem"

const movies = [
  {
    id: 1,
    name: "RRR",
    posterUrl: "https://image.tmdb.org/t/p/w500/wE0I6efAW4cDDmZQWtwZMOW44EJ.jpg",
    rating: 8.0,
    genre: "Action"
  },
  {
    id: 2,
    name: "Baahubali: The Beginning",
    posterUrl: "https://image.tmdb.org/t/p/w500/9BAjt8nSSms62uOVYn1t3C3dVto.jpg",
    rating: 8.0,
    genre: "Action"
  },
  {
    id: 3,
    name: "Baahubali: The Conclusion",
    posterUrl: "https://image.tmdb.org/t/p/w500/21sC2assImQIYCEDA84Qh9d1RsK.jpg",
    rating: 8.2,
    genre: "Action"
  },
  {
    id: 4,
    name: "Pushpa: The Rise",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNDM3N2UzM2UtMjEwMC00NGUzLThmMmQtNGMyM2VmMDA0ZWEwXkEyXkFqcGc@._V1_.jpg",
    rating: 7.6,
    genre: "Action"
  },
  {
    id: 5,
    name: "Magadheera",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMzQ0YWYyYjEtZTU2Ni00ZGZjLWJlZmQtYzliN2VlNDY0ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rating: 7.7,
    genre: "Action"
  },

  {
    id: 6,
    name: "Jersey",
    posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4NXqFHg2cURm5ME0oKAHaWjHhdXD1TB6xyA&s",
    rating: 8.5,
    genre: "Drama"
  },
  {
    id: 7,
    name: "Mahanati",
    posterUrl: "https://m.media-amazon.com/images/S/pv-target-images/1914efd9becacccd7a0ae0e6e99fa0a6da73d06b6318d2e474d6d9e9f75b261d.jpg",
    rating: 8.6,
    genre: "Drama"
  },
  {
    id: 8,
    name: "Rangasthalam",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/5/5d/Rangasthalam.jpg",
    rating: 8.4,
    genre: "Drama"
  },
  {
    id: 9,
    name: "Sita Ramam",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Sita_Ramam.jpg/250px-Sita_Ramam.jpg",
    rating: 8.6,
    genre: "Romance"
  },
  {
    id: 10,
    name: "Arjun Reddy",
    posterUrl: "https://707errorfilms.wordpress.com/wp-content/uploads/2017/08/27-vijay_devarakonda_arjun_reddy_movie_first_look_ultra_hd_posters_wallpapers.jpg",
    rating: 8.0,
    genre: "Romance"
  },

  {
    id: 11,
    name: "Athadu",
    posterUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/athadu-et00065507-1754389093.jpg",
    rating: 8.2,
    genre: "Thriller"
  },
  {
    id: 12,
    name: "Pokiri",
    posterUrl: "https://m.media-amazon.com/images/I/518pMYRaiEL._AC_UF1000,1000_QL80_.jpg",
    rating: 8.0,
    genre: "Thriller"
  },
  {
    id: 13,
    name: "Eega",
    posterUrl: "https://images.moviebuff.com/61a5e8b4-6d43-44d6-9225-bad1d7b713e3?w=600",
    rating: 7.7,
    genre: "Fantasy"
  },
  {
    id: 14,
    name: "Goodachari",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZTRmZDQyMzctMzA2Zi00YWEzLTg1MTUtOTdhNTMyMzJiN2M5XkEyXkFqcGc@._V1_.jpg",
    rating: 7.8,
    genre: "Thriller"
  },
  {
    id: 15,
    name: "Kshanam",
    posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ZDkBk2B9OdndMW24JC2ur6AD8ybXXcGGmA&s",
    rating: 8.3,
    genre: "Thriller"
  },

  {
    id: 16,
    name: "Ala Vaikunta Puramulo",
    posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Tg3wLDU-CGKrQRl5T5oYSj1K4Y6vHQw_eg&s",
    rating: 7.4,
    genre: "Family"
  },
  {
    id: 17,
    name: "Bommarillu",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/a/aa/Bommarillu_poster.jpg",
    rating: 8.2,
    genre: "Romance"
  },
  {
    id: 18,
    name: "Ye Maaya Chesave",
    posterUrl: "https://m.media-amazon.com/images/S/pv-target-images/4bb9216e2487f13bd3b9111090a4a614e984c8aa733bfc6665dfd5f1a0a37221.jpg",
    rating: 7.9,
    genre: "Romance"
  },
  {
    id: 19,
    name: "Attarintiki Daredi",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/5/55/Atharintiki_Daaredi_Soundtrack_Album_Cover.jpg",
    rating: 7.6,
    genre: "Family"
  },
  {
    id: 20,
    name: "Gabbar Singh",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNjRmZTU4NjYtMjgzNC00ZWY5LThlMDUtNjc4MWRiZmQzM2VmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rating: 7.1,
    genre: "Action"
  }
];


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
            return <MovieItem movie={each_movie} key={each_movie.id}/>
          })}
          </div>
    </div>
  )
}

export default Movies
