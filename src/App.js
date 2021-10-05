import React, { useState, useEffect }from 'react';
import './App.css';

import Form from './components/Form';
import Movies from './components/Movies';
import Home from './components/Home';

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
    const [movies, setMovies] =useState([]);

    const getMovie = async (e) => {
        const movieTitle = e.target.elements.movieTitle.value;
        e.preventDefault();
        await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieTitle}`)
            .then(response => response.json())
            .then(recivedData => setMovies(recivedData.results));
    }
    const getHomePage = async () => {
        await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`)
            .then(response => response.json())
            .then(recivedData => setMovies(recivedData.results));
    }
    useEffect( () => {
        getHomePage();
    }, []);

    return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Top movies</h1>
          </header>
            <Form getMovie = {getMovie}/>
            <Movies movies = {movies}/>
        </div>
    );
}

export default App;