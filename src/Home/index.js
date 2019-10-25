import {Component}from "react";
import React from 'react';
import {connect} from "react-redux";




class Home extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render() {
        return(
            <div>
                ?
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        CURRENT_MENU: state.CURRENT_MENU
    }
};
export default connect(mapStateToProps)(Home);
