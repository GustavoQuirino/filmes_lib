import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MoviesCard from '../components/MoviesCard'

import './MovieGrid.css'

const key = '?api_key=7bbc44e17661121420501e26335e6341';
const searchUrl = "https://api.themoviedb.org/3/search/movie/";




const Search = ()=>{
    const [searchParams] = useSearchParams()

    const [movies,setMovies] = useState([])
    const query = searchParams.get("q")

    const [searchMovies, setSearchMovies] = useState([])
    

    const getSearchMovies = async (url ) => {

        const res = await fetch(url)
        const data = await res.json()

        setSearchMovies(data.results)
    }

    useEffect(()=>{
        const searchWithQueryUrl = `${searchUrl}${key}&query=${query}&language=pt-BR` 
        getSearchMovies(searchWithQueryUrl);
        
        
    },[query])

    return (
        <div className="container">
                <h2 className="title">Resultados para: {query}</h2>
                <div className="movies-container">
                    {searchMovies.length === 0 && <p>Carregando pesquisa...</p>}
                    {searchMovies.length > 0 && searchMovies.map((movie)=><MoviesCard key={movie.id} movie={movie}/>)}
                </div>
            </div>
    )
}

export default Search;
