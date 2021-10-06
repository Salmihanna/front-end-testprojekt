import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Form = ({onClickSearch}) => {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
      setValue(e.target.value);
    }

    const handleSearch = (e) => {
        onClickSearch(value);
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSearch} style={{marginBottom: "2rem"}}>
            <input onChange={handleChange} value={value} className="form__input" type="text"/>
            <button className="form__button"> Search
                {/*<Link to={{pathname: `/`}}>Search</Link>*/}
            </button>
        </form>
    );
}

export default Form;