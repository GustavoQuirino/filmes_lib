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
        console.log(movieUrl)
    },[ ])

    return (
        <>
            <h1>Detalhes</h1>
            {movie && <MoviesCard movie={movie}/>}
        </>
    )
}

export default Movie;