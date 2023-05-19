import { Navigate } from "react-router-dom"

const GenresDropdown = (props) => {

    return props.getGenreList.map((genre, i) => {
        const searchGenre = async (q) => {
            const query = await props.searchGenre(q)
            props.setGenreMovie(query.results)
        }

        const handleClick = (e) => {
            e.preventDefault()
            searchGenre(genre.name)
            props.setGenreId(genre.id)
            console.log(genre.name, genre.id)
        }
        return (
            <li key={i}>
                <a className="dropdown-item" href='' onClick={handleClick}>{genre.name}</a>
            </li>
        )
    })

}

export default GenresDropdown