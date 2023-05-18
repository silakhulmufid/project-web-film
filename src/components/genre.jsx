const Genres = (props) => {
    return props.getGenreList.map((genre, i) => {
        return (
            <a key={i} href={`#${i+1}`} className="nav-link">{genre.name}</a>
        )
    })

}

export default Genres