import GenresDropdown from "./genreDropdown"
import {useNavigate} from 'react-router-dom'
import Searching from "./searching"
import { searchMovie } from "../api"

const Navbar = (props) => {
    const navigate = useNavigate()

    const handleClick = (e) => {
        const selectedLink = e.currentTarget

        if ((selectedLink.innerText === 'Home')||(selectedLink.innerText === 'Navbar')) {
            navigate('/')
            e.preventDefault()
            console.log(e)
        } else if (selectedLink.innerText === 'Search') {
            navigate('/search')
            e.preventDefault()
        }
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="" onClick={handleClick}>Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="" onClick={handleClick}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="" onClick={handleClick}>Search</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Genre
                    </a>
                    <ul className="dropdown-menu">
                        <GenresDropdown 
                            getGenreList={props.getGenreList} 
                            searchGenre={props.searchGenre} 
                            setGenreMovie={props.setGenreMovie}
                            setGenreId={props.setGenreId}
                        />
                    </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Disabled</a>
                    </li>
                </ul>
                    <Searching setPopularMovies={props.setPopularMovies} searchMovie={searchMovie}/>
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                </div>
            </div>
            </nav>
    )
}

export default Navbar