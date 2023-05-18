import './App.css';
import { useEffect, useState } from 'react';
import {movieList, searchMovie, genreList, searchGenre} from './api'
import Searching from './components/searching'
import PopularMovieList from './components/movies';
import Navbar from './components/navbar';
import Genres from './components/genre';

const App = () => {

  const [getGenreList, setGenreList] = useState([])
  const [getPopularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    genreList().then((result) => {
      setGenreList(result.genres)
      console.log(result.genres)
    })

    movieList().then(result => {
      setPopularMovies(result)
      console.log(result)
    })

  }, [])

  return (
    <div className='App'>
      <header className="App-header">

        {/* INI NAVBAR */}
        <Navbar getGenreList={getGenreList} searchGenre={searchGenre}/>

        {/* INI HEADER */}
        <div className="row contain-header">
          <div className="col-12">
            <h1>Mufid Movie Mania</h1>
            <Searching setPopularMovies={setPopularMovies} searchMovie={searchMovie}/>
          </div>
        </div>

        {/* INI BODY */}
        <div className="row contain-body">

          {/* INI LEFT COLOUMN "GENRES" */}
          <div className="col-3 genre-list">
            <div className="vertical-nav">
              <nav className="nav flex-column">
              <Genres getGenreList={getGenreList}/>
              </nav>
            </div>
          </div>

          {/* INI MAIN CONTAIN */}
          <div className="col-9">
            <div className="movie-container">
                <PopularMovieList getPopularMovies={getPopularMovies}/>
            </div>
          </div>
          
        </div>
        
      </header>
    </div>
  );
}

export default App;