const GenresDropdown = (props) => {

    return props.getGenreList.map((genre, i) => {
        const searchGenre = async (q) => {
            const query = await props.searchGenre(q)
            props.setGenreMovie(query.results)
        }

        return (
            <li key={i}>
                <a className="dropdown-item" href='#' onClick={() => {
                    searchGenre(genre.name)
                    props.setGenreId(genre.id)
                    console.log(genre.name, genre.id)
                }}>{genre.name}</a>
            </li>
        )
    })

}

export default GenresDropdown