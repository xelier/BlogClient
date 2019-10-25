import React, {Component} from 'react';
import './App.less';
import {BrowserRouter} from "react-router-dom";
import Header from "./Header";
import {connect} from "react-redux";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Header/>
                {this.props.children}
            </div>
        </BrowserRouter>
    );
  }
}

export default connect()(App);
