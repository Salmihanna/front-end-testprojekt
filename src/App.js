import React, { useState, useEffect }from 'react';
import './App.css';

import Form from './components/Form';
import Movies from './components/Movies';
import Home from './components/Home';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_MOVIE = `https://api.themoviedb.org/3/movie/`;
const API_KEY_PARAM = `api_key=${API_KEY}`;
const API_SEARCH = `https://api.themoviedb.org/3/search/movie`;
const API_DISCOVER = `https://api.themoviedb.org/3/discover/movie`;

const App = () => {
    const [movies, setMovies] = useState([]);
    const [popularListMovies, setPopularListMovies] = useState([]);

    const getMovieList = async (movieTitle) => {
        const res = await fetch(`${API_SEARCH}?${API_KEY_PARAM}&query=${movieTitle}`);
        const data = await res.json();

        return data.results;
    }
    const getPopularList = async () => {
        const res = await fetch(`${API_DISCOVER}?${API_KEY_PARAM}&sort_by=popularity.desc`);
        const data = await res.json();

        return data.results;
    }
    const getMovieById = async (id) => {
        const res = await fetch(`${API_MOVIE}${id}?${API_KEY_PARAM}`);
        const data = await res.json();

        return data;
    }

    const getMovies = async (movieTitle) => {
        let res = [];

        if (typeof movieTitle === "string" && movieTitle !== "") {
            res = await getMovieList(movieTitle);
        } else {
            res = await getPopularList();
        }

        const movieIds = res.map((movie) => {
            return movie.id;
        });
        const data = await Promise.all(movieIds.map((id) => {
            return getMovieById(id);
        }));

        setPopularListMovies(res);
        setMovies(data);
        return [res, data];
    }

    useEffect( () => {
        const fetchPopularList = async () => {
            await getMovies();
        }
        void fetchPopularList();
    }, []);

    return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Search</h1>
          </header>
            <Form onClickSearch={getMovies}/>
            <Movies popularList = {popularListMovies} movies={movies}/>
        </div>
    );
}

export default App;