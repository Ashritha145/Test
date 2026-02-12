import React, { useState } from 'react'
import './App.css'
import Movies from './pages/Movies';
import { Route, Routes,Link } from 'react-router-dom';
import FavMovies from './pages/FavMovies';
import RecentlyWatched from './pages/RecentlyWatched';
import MovieDetails from './pages/MovieDetails';
import FavMovieDetails from './pages/FavMovieDetails';
import RecentDetails from './pages/RecentDetails';

const App = () => {
  const [searchInput,setSearchInput]=useState("");
  const setSearch=(event)=>{
    console.log(event.target.value)
    setSearchInput(event.target.value)
  }
  return (
    <div> 
    <nav>
      <div className='inputBar'>
      <input placeholder='search Movies...' className='input' onChange={setSearch} value={searchInput}/>
      </div>
      <div className='nav-links'>
        <Link to='/'><p>Movies</p></Link>
       <Link to='/fav'><p>Favourite</p></Link>
       <Link to='/recent'><p>Recently Watched</p></Link>
      </div>
    </nav>
    <Routes>
      <Route path='/' element={<Movies searchInput={searchInput}/>}/>
      <Route path='/fav' element={<FavMovies searchInput={searchInput}/>}/>
        <Route path='/recent' element={<RecentlyWatched searchInput={searchInput}/>}/>
        <Route path='/:id' element={<MovieDetails/>}/>
        <Route path='/fav/:id'element={<FavMovieDetails/>}/>
        <Route path='/recent/:id' element={<RecentDetails/>}/>
    </Routes>
    </div>
  )  
}

export default App
