import React, {Component} from "react";
import {connect} from "react-redux";
import "./index.less";
import LeftMenu from "./left";
import RightMenu from "./right";

class HeaderBar extends Component{

    render() {
        // const menuItem = menu;
        return(
            <div>
            <LeftMenu className = {"left-menu"}/>
            <RightMenu className = {"right-menu"}/>
            </div>
        );
    }
}

export default connect()(HeaderBar)
