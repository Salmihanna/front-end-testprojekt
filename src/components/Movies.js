import React, {useState} from "react";
import {Link} from 'react-router-dom';

const Movies = ({movies, popularList}) => {

    const mergeMovies = popularList.map((popular) => {
       const findMovie = movies.find((movie) => {
          return popular.id === movie.id;
       });

       if (findMovie) {
           popular.matchMovie = findMovie;
       }
       return popular;
    });
    return (
        <div className="container">
            <div className="row">
                {popularList.map((movie) => {
                    return (
                        <div key={movie.id} className="col-md-4" style={{marginBottom: "2rem"}}>
                            <div className="movies__box">
                                <img
                                    className="recepi__box-img"
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                />
                                <button className="movie_buttons">
                                    <Link to={{
                                        pathname: `/movie/${movie.id}`,
                                        state: { movie: movie.title }
                                    }}>{movie.title.length < 20 ? `${movie.title}` : `${movie.title.substring(0, 20)}...`}</Link>
                                </button>
                                <div className="movie__text">
                                    <p className="movies__subtitle "><span>
                                {movie.matchMovie && movie.matchMovie.genres.map((genre) => {
                                    return genre.name;
                                }).join(", ")}
                            </span></p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Movies;