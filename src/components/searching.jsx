const Searching = (props) => {

    const search = async (q) => {
        if (q.length > 3) {
          const query = await props.searchMovie(q)
          props.setPopularMovies(query.results)
        }
      }

    return (
        <input 
        placeholder='cari film kesayangan anda' 
        className='form-control me-2 movie-search' 
        onChange={({target}) => {
          search(target.value)
          console.log(target.value)
        }}
        />
        
    )
}
export default Searching