import {FaStar} from 'react-icons/fa'
import { Link } from 'react-router-dom';


const imgUrl = 'https://image.tmdb.org/t/p/w500/'

const MoviesCard = ({movie, showLink = true}) => {

    return (
        <div className="movie-card">
            <img src={ imgUrl+movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>
                <FaStar /> {movie.vote_average}
            </p>
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </div>
    )
}

export default MoviesCard;