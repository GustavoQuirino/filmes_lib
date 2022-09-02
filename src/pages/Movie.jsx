import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsGraphUp, BsWallet2,BsHourglassSplit, BsFillFileEarmarkTextFill} from "react-icons/bs";

import MoviesCard from "../components/MoviesCard"
import "./Movie.css"


const moviesUrl = 'https://api.themoviedb.org/3/movie/'
const key = '?api_key=7bbc44e17661121420501e26335e6341'

const Movie = ()=>{
    const {id} = useParams()
    const [movie,setMovie] = useState(null)

    const getMovie = async(url) => {
        const res = await fetch(url);
        const data = await res.json();

        setMovie(data)
    }
    useEffect(()=> {
        const movieUrl = `${moviesUrl}${id}${key}&language=pt-BR`
        getMovie(movieUrl)
        console.log(movie)
    },[ ])

    return (
        <div className="detalhes">
            {movie && <MoviesCard movie={movie}/>}
            {movie && 
            <div>
                <h2>{movie.title}</h2>
                <h2>Ano de Lancamento : {movie.release_date}</h2>
                <p>Sinopse: {movie.overview}</p> 
            </div>
            }
        </div>
    )
}

export default Movie;