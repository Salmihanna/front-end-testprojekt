import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Movies = props => (
  <div className="container">
    <div className="row">
        {  props.movies.map((movie) => {
            //TODO: i need to get the genre_ids so i can public its genre.
            //TODO: change the name om det css.
            //TODO: check not null before search
            return (
                <div key={movie.id} className="col-md-4" style={{ marginBottom:"2rem" }}>
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
                            <p className="recipes__subtitle"><span>
                                {
                                    movie.genre_ids
                                }
                            </span></p>
                        </div>
                    </div>
                </div>
            );
        })}
    </div>
  </div>
);

export default Movies;