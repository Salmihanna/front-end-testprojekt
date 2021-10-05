import React, { useState } from "react";
import {Link} from "react-router-dom";
import Movies from './Movies';



const Home = () => {
    const [movies, setMovies] = useState([]);
    const API_KEY = process.env.REACT_APP_API_KEY;

    const getHomePage = async (e) => {
        e.preventDefault();
        const api_call = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`);
        const data = await api_call.json();
        setMovies(data.results);
        console.log(movies)
    }
    return(
            <Movies movies={movies}/>
    );
}

export default Home;