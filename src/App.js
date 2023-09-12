
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';


const API_URL = 'https://www.omdbapi.com?apikey=4c2ff4bd';

const App = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        searchMovies("Avengers")
    }, []);

    const searchMovies = async (title) => {
        const res = await fetch(`${API_URL}&s=${title}`);
        const data = await res.json();

        setMovies(data.Search || []);
    };

    return (
        <div className="app">
        <h1>MovieLand</h1>

        <div className="search">
            <input 
                placeholder="Search for movies" 
                value="Avengers" 
                onChange={() => {}} 
            />
            <img
                src = {SearchIcon}
                alt = "search"
                onClick = {() => {}}
            />
            </div>

            {
                movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )
            }
            </div>
       
    );
}

export default App;