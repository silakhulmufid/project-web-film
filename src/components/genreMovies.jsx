const GenreMovieList = (props) => {
    return props.getGenreMovies.map((movie, i) => {
      const rating = movie.vote_average.toFixed(1)
      console.log(props.getGenreId, movie.genre_ids)

      if (movie.genre_ids.includes(props.getGenreId)) {
        return (
            <div className="card text-bg-warning" key={i}>
              <div className="card-header movie-title">
                {movie.title}
              </div>
              <div className="img-container">
                <img src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <p className="card-text movie-date">{movie.release_date}</p>
                <p className="card-text movie-rate">{rating}</p>
              </div>
            </div>
        )
      }

    })
  }

  export default GenreMovieList