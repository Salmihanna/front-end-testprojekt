import React from 'react';
import { Link } from "react-router-dom";

const Form = props => (
    <form onSubmit={props.getMovie} style={{ marginBottom:"2rem" }}>
        <input className="form__input" type="text" name="movieTitle"/>
        <button className="form__button"> Search
            {/*<Link to={{pathname: `/`}}>Search</Link>*/}
        </button>
    </form>
);

export default Form;