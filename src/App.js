
import { useEffect } from 'react';
import MovieCard from './MovieCard ';
import './App.css';
import SearchIcon from './search.svg';


const API_URL = 'https://www.omdbapi.com?apikey=4c2ff4bd';

const movie1 = 
    {
        "Title": "Murder by Death",
        "Year": "1976",
        "imdbID": "tt0074937",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWJiZjUxNTQtNTI3My00ZjQyLWFjZTEtODJjYzU0ZGYwYzNkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
    }

const App = () => {
    const searchMovies = async (title) => {
        const res = await fetch(`${API_URL}&s=${title}`);
        const data = await res.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies("Murder by Death")
    }, []);
    return (
        <div className="app">
        <h1>MovieLand</h1>

        <div className="search">
            <input 
                placeholder="Search for movies" 
                value="Murder By Death" onChange={() => {}} 
            />
            <img
                src = {SearchIcon}
                alt = "search"
                onClick = {() => {}}
            />
            </div>

            <div className="containter">
                <MovieCard movie1={movie1} /> 
            </div>
        </div>
       
    );
}

export default App;