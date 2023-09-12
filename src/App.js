import React from 'react';
import { useEffect } from 'react';

const API_URL = 'https://www.omdbapi.com?apikey=4c2ff4bd';

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
        <div>
        <h1>React App</h1>
        </div>
    );
}

export default App;