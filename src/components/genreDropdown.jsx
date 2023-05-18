const GenresDropdown = (props) => {
    return props.getGenreList.map((genre, i) => {
        return (
            <li key={i}>
                <a className="dropdown-item" href='#'>{genre.name}</a>
            </li>
        )
    })

}

export default GenresDropdown