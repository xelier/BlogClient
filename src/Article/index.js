import {Component}from "react";
import React from 'react';
import {connect} from "react-redux";


class Article extends Component{
    render() {
        return(
            <div>
                test1
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        CURRENT_MENU: state.current
    }
};
export default connect(mapStateToProps)(Article);
