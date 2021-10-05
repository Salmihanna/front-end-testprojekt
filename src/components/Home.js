import React, { useState } from "react";
import {Link} from "react-router-dom";
import Movies from './Movies';



const Home = () => {
    const [movies, setMovies] = useState([]);
    const API_KEY = process.env.REACT_APP_API_KEY;


    return(
            <Movies movies={movies}/>
    );
}

export default Home;