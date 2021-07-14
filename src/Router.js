import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from "./App";
import Home from "./content/Home";
import Traveling from "./content/Traveling";
import Think from "./content/Think";
import CommentBoard from "./dashBoard/CommentBoard"
import Admin from "./content/Admin";
// import App from "./App";

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <App>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/TRAVELING' component={Traveling} />
                        <Route exact path='/THINK' component={Think} />
                        <Route exact path='/JAVA' component={Traveling} />
                        <Route exact path='/JAVASCRIPT' component={Traveling} />
                        <Route exact path='/MESSAGE' component={CommentBoard} />
                        <Route exact path='/ADMIN' component={Admin} />
                    </Switch>
                </App>
            </BrowserRouter>
        );
    }
}
