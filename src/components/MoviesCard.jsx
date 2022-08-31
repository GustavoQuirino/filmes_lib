import {FaStar} from 'react-icons/fa'


const imgUrl = 'https://image.tmdb.org/t/p/w500/'

const MoviesCard = ({movie}) => {

    return (
        <div className="movie-card">
            <img src={ imgUrl+movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>
                <FaStar /> {movie.vote_average}
            </p>
        </div>
    )
}

export default MoviesCard;