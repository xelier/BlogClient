import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from "./App";
import Home from "./Content/Home";
import Traveling from "./Content/Traveling";
import CommentBoard from "./DashBoard/CommentBoard"
// import App from "./App";

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <App>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/TRAVELING' component={Traveling} />
                        <Route exact path='/THINK' component={Traveling} />
                        <Route exact path='/JAVA' component={Traveling} />
                        <Route exact path='/JAVASCRIPT' component={Traveling} />
                        <Route exact path='/MESSAGE' component={CommentBoard} />
                    </Switch>
                </App>
            </BrowserRouter>
        );
    }
}
