import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from "./App";
import Home from "./Content/Home";
import Article from "./Content/Article";
// import App from "./App";

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <App>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/article' component={Article} />
                    </Switch>
                </App>
            </BrowserRouter>
        );
    }
}
