import { useEffect } from 'react';
import {popularMovieList} from '../api'
import PopularMovieList from '../components/popularMovies';
import Genres from '../components/genre';
import GenreMovieList from '../components/genreMovies';
import Carousel from '../components/carousel';

const LandingPages = (props) => {

    useEffect(() => {
        popularMovieList().then(result => {
        props.setPopularMovies(result)
        console.log(result)
        })

    }, [])

    return (
        <div className='App'>
        <header className="App-header">

          

          {/* INI HEADER */}
          <div className="row contain-header">
            <div className="col-12">
              <Carousel />
            </div>
          </div>

          {/* INI BODY */}
          <div className="row contain-body">

            {/* INI LEFT COLOUMN "GENRES" */}
            <div className="col-3 genre-list">
              <div className="vertical-nav">
                <nav className="nav flex-column">
                <Genres getGenreList={props.getGenreList}/>
                </nav>
              </div>
            </div>

            {/* INI MAIN CONTAIN */}
            <div className="col-9">
              <div className="movie-container">
                  <PopularMovieList getPopularMovies={props.getPopularMovies}/>
                  <GenreMovieList getGenreMovies={props.getGenreMovie} getGenreId={props.getGenreId} />
              </div>
            </div>
            
          </div>
          
        </header>
      </div>
    )
}

export default LandingPages