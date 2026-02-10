import React from 'react'
import MovieItem from '../components/MovieItem'
import '../App.css';
const favMovies = [
  // ACTION (5)
  {
    id: 101,
    name: "Pushpa: The Rise",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/7/75/Pushpa_-_The_Rise_%282021_film%29.jpg",
    rating: 7.6,
    genre: "Action"
  },
  {
    id: 102,
    name: "Saaho",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/6/6b/Saaho_poster.jpg",
    rating: 5.8,
    genre: "Action"
  },
  {
    id: 103,
    name: "Bharat Ane Nenu",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Bharat_Ane_Nenu_poster.jpg/250px-Bharat_Ane_Nenu_poster.jpg",
    rating: 7.4,
    genre: "Action"
  },
  {
    id: 104,
    name: "Vikramarkudu",
    posterUrl: "https://m.media-amazon.com/images/S/pv-target-images/68a446ca05758982206b1922c12daf619a386f2cb8a75629bfffbb49f0a4e0be.jpg",
    rating: 7.8,
    genre: "Action"
  },
  {
    id: 105,
    name: "Atharintiki Daaredi",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/5/55/Atharintiki_Daaredi_Soundtrack_Album_Cover.jpg",
    rating: 7.3,
    genre: "Action"
  },

  // DRAMA (5)
  {
    id: 106,
    name: "Shyam Singha Roy",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMDMzYjgwOTUtODg5NC00OGY2LWExNTgtMGQ2YjNiODU5MTNmXkEyXkFqcGc@._V1_.jpg",
    rating: 7.6,
    genre: "Drama"
  },
  {
    id: 107,
    name: "Uyyala Jampala",
    posterUrl: "https://m.media-amazon.com/images/S/pv-target-images/5f8afe3c7de6c36df49f187deba69f85811a21b43713d359eb4d5904f395903c.jpg",
    rating: 7.2,
    genre: "Drama"
  },
  {
    id: 108,
    name: "C/o Kancharapalem",
    posterUrl: "https://m.media-amazon.com/images/S/pv-target-images/669d65c95799c434d9ebdbd432d72cc30d8e95a0a803f99429b63e7fd6d44cc4.jpg",
    rating: 8.9,
    genre: "Drama"
  },
  {
    id: 109,
    name: "Brochevarevarura",
    posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz03h-2NcNXZuuOCbgexw5O3jH9bnGoyjaZw&s",
    rating: 8.0,
    genre: "Drama"
  },
  {
    id: 110,
    name: "Sita Ramam",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Sita_Ramam.jpg/250px-Sita_Ramam.jpg",
    rating: 8.6,
    genre: "Drama"
  },

  // ROMANCE (5)
  {
    id: 111,
    name: "Pelli Choopulu",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYmJhNjg4MDAtNDMyNC00NDI5LTlhNTQtNjkwZWI3N2YzZGE1XkEyXkFqcGc@._V1_.jpg",
    rating: 8.2,
    genre: "Romance"
  },
  {
    id: 112,
    name: "Majili",
    posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjw-OPKvrXMbJxWbJPMRyButTtCLL-yIYGeA&s",
    rating: 7.2,
    genre: "Romance"
  },
  {
    id: 113,
    name: "Fidaa",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Fidaa_poster.jpg/250px-Fidaa_poster.jpg",
    rating: 7.5,
    genre: "Romance"
  },
  {
    id: 114,
    name: "Love Story",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/4/44/Love_Story_Poster.jpeg",
    rating: 7.0,
    genre: "Romance"
  },
  {
    id: 115,
    name: "RX 100",
    posterUrl: "https://m.media-amazon.com/images/S/pv-target-images/19b580948eab9874a50d9d04700c30f0ba3ef1496cef05cd8e12223c34a2933f.jpg",
    rating: 7.1,
    genre: "Romance"
  },

  // THRILLER (5)
  {
    id: 116,
    name: "Evaru",
    posterUrl: "https://m.media-amazon.com/images/S/pv-target-images/7643b2482e3eb78fa73fb78efd83490845299062f1c5ca472f7a25a3beaca91a.jpg",
    rating: 8.1,
    genre: "Thriller"
  },
  {
    id: 117,
    name: "118",
    posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv2PjLXYRk7KPGQIF7cFKEk3HN_dEMaz--lg&s",
    rating: 6.7,
    genre: "Thriller"
  },
  {
    id: 118,
    name: "Awe",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Awe_film_poster.jpg/250px-Awe_film_poster.jpg",
    rating: 7.7,
    genre: "Thriller"
  },
  {
    id: 119,
    name: "Mathu Vadalara",
    posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNtRgTcgnORTEPokuyRKi3p_IfOK2LigL3ng&s",
    rating: 8.2,
    genre: "Thriller"
  },
  {
    id: 120,
    name: "HIT: The First Case",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BM2Q2Nzk0OGYtNzE1Yy00NTA2LTg4ZWUtM2QyZWZlOGYwYTdiXkEyXkFqcGc@._V1_.jpg",
    rating: 7.8,
    genre: "Thriller"
  }
]



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
            return <MovieItem movie={each_movie} key={each_movie.id}/>
          })}
          </div>
    </div>
    </div>
  )
}

export default FavMovies
