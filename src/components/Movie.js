import React from 'react';
import { Link } from 'react-router-dom';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY_PARAM = `api_key=${API_KEY}`;
const API_SEARCH = `https://api.themoviedb.org/3/search/movie`;

class Movie extends React.Component {
    state = {
        activeMovie: []
    }

    componentDidMount = async () => {
        const title = this.props.location.state.movie;
        const res = await fetch(`${API_SEARCH}?${API_KEY_PARAM}&query=${title}`);
        const data = await res.json();
        this.setState({movies: data.results})

        this.setState({ activeMovie: data.results[0] });
    }

    render() {
        const movie = this.state.activeMovie;
        return (
            <div className="container">
                { this.state.activeMovie.length !== 0 &&
                <div className="show-movie">
                    <img className="show-movie__img" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                    <h3 className="show-movie__title">{ movie.title }</h3>
                    <h4 className="show-movie__subtitle">
                        Original title: <span>{ movie.original_title }</span>
                    </h4>
                    {/*Add more data*/}
                    <p className="show-movie__description">
                        Description: <span>{ movie.overview }</span>
                    </p>
                    <button className="show-movie__button">
                        <Link to="/">Go Home</Link>
                    </button>
                </div>
                }
            </div>
        )
    }
}

export default Movie;