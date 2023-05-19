import { useState } from "react";

const Searching = (props) => {
  const [getSearchQuery, setSearchQuery] = useState('');

  const search = async (q) => {
      if (getSearchQuery.length > 3) {
        const query = await props.searchMovie(getSearchQuery)
        props.setPopularMovies(query.results)
      }
    }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      search()
    }
  }
  return (
    <div className="row justify-content-end">
      <div className="col-4">
        <input 
          placeholder='cari film kesayangan anda' 
          className='form-control me-2 movie-search' 
          value={getSearchQuery}
          onChange={({target}) => {
            setSearchQuery(target.value)
          }}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className="col-2 button-search">
        <button className="btn btn-outline-success" type="submit" onClick={search}>Cari</button>
      </div>
    </div>
  )
}
export default Searching