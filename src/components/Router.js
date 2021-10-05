import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
import Movie from './Movie'
import Movies from "./Movies";

const Router = () => (
    <BrowserRouter>
        <Switch>
            {/*TODO: make a search path*/}
            <Route path="/" component={App} exact/>
            {/*<Route path="/search/" component={Movies} exact/>*/}
            <Route path="/movie/:id" component={Movie}/>
        </Switch>
    </BrowserRouter>
);

export default Router;