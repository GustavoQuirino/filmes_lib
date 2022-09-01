import { useEffect, useState } from "react";
import MoviesCard from "../components/MoviesCard";
import './MovieGrid.css'

const base = 'https://api.themoviedb.org/3/movie/'
const key = '?api_key=7bbc44e17661121420501e26335e6341'

const Home = () => {

    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async ( ) => {

        const res = await fetch(`${base}top_rated${key}&language=pt-BR`)
        const data = await res.json()

        setTopMovies(data.results)
    }

    useEffect(()=>{

        getTopRatedMovies();
        console.log(topMovies)
        
    },[])

    return ( 
            <div className="container">
                <h2 className="title">Melhores Filmes: </h2>
                <div className="movies-container">
                    {topMovies.length === 0 && <p>Carregando...</p>}
                    {topMovies && topMovies.map((movie)=><MoviesCard key={movie.id} movie={movie}/>)}
                </div>
            </div>
             
        
    )
}

export default Home;