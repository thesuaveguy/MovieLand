import {useEffect,useState} from 'react';

import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';
//22fb2df3

const API_URL='https://www.omdbapi.com?apikey=22fb2df3';

const movie1={
    
        "Title": "Spiderman in Cannes",
        "Year": "2016",
        "imdbID": "tt5978586",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg"
    //   "Poster":"N/A"
}
const App=()=>{
    const [movies,setMovies]=useState([]);
    const [searchTerm,setSearchTerm]=useState('');
    const searchMovies=async(title) => {
        const response=await fetch(`${API_URL}&s=${title}`);
        const data=await response.json();
        setMovies(data.Search);
    }
    useEffect(()=>{
        searchMovies('Spiderman');
    },[]);
    return(
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input placeholder="Search for movies" value={searchTerm}onChange={(e)=>setSearchTerm(e.target.value)}
                />
                <img src={SearchIcon} alt="search" onClick={()=>searchMovies(searchTerm)}
                />

            </div>
            {
                movies?.length>0
                ?(
            <div className="container">
                {/* <MovieCard movie1={movies[0]}/> */}
                {movies.map((movie)=>(
                    <MovieCard movie={movie}/>
                ))}
            </div>

                ):
                (
                    <div className="empty">
                        <h2>
                          No movies found  
                        </h2>
                        </div>
                )
            }
            

        </div>
    );
}

export default App;  