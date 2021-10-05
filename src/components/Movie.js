import React from 'react';
import { Link } from 'react-router-dom';

const API_KEY = process.env.REACT_APP_API_KEY;

class Movie extends React.Component {
    state = {
        activeMovie: []
    }

    componentDidMount = async () => {
        const title = this.props.location.state.movie;
        const request = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${title}`);
        const respons = await request.json();
        this.setState({movies: respons.results})

        this.setState({ activeMovie: respons.results[0] });
    }

    render() {
        const movie = this.state.activeMovie;
        return (
            <div className="container">
                { this.state.activeMovie.length !== 0 &&
                    <div className="active-recipe">
                        <img className="active-recipe__img" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                        <h3 className="active-recipe__title">{ movie.title }</h3>
                        <h4 className="active-recipe__publisher">
                            Original title: <span>{ movie.original_title }</span>
                        </h4>
                        {/*Add more data*/}
                        <p className="active-movie__description">
                            Description: <span>{ movie.overview }</span>
                        </p>
                        <button className="active-recipe__button">
                            <Link to="/">Go Home</Link>
                        </button>
                    </div>
                }
            </div>
        )
    }
}

export default Movie;