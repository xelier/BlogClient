import React, {Component} from "react";
import {connect} from "react-redux";

class Think extends Component{
    componentDidMount() {
    }

    render() {
        return(
            <a href={"sss"}>aaa</a>
        )
    }
}

export default connect()(Think);
