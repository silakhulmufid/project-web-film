import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import {genreList, searchGenre} from './api'
import Navbar from './components/navbar';
import LandingPages from './pages/landingpage';
import Search from './pages/search';
import Movie from './pages/movie';

const App = () => {
  
  const [getGenreList, setGenreList] = useState([])
  const [getPopularMovies, setPopularMovies] = useState([])
  const [getGenreMovie, setGenreMovie] = useState ([])
  const [getGenreId, setGenreId] = useState ([])

  useEffect(() => {
    genreList().then((result) => {
      setGenreList(result.genres)
      console.log(result.genres)
      })

  }, [])

  return (
    <Router>
      {/* INI NAVBAR */}
      <Navbar 
        setPopularMovies={setPopularMovies}
        getGenreList={getGenreList}
        searchGenre={searchGenre}
        setGenreMovie={setGenreMovie}
        setGenreId={setGenreId}
      />

      <Routes>
        <Route path='/' element={<LandingPages
          getPopularMovies={getPopularMovies}
          setPopularMovies={setPopularMovies}
          getGenreList={getGenreList}
          getGenreMovie={getGenreMovie}
          getGenreId={getGenreId}
        />} />
        <Route path='/search' element={<Search />} />
        <Route path='/movie' element={<Movie />} />
      </Routes>
      
    </Router>
    
  );
}

export default App;