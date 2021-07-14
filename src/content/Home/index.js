import {Component}from "react";
import React from 'react';
import {connect} from "react-redux";
import {Col, Row} from "antd";
import RightBar from "../RightBar";
import HomeLeft from "../HomeLeft"




class Home extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render() {
        return(
            <Row>
                <Col span={16}>
                    <HomeLeft/>
                </Col>
                <Col span={7} offset={1} >
                    <RightBar/>
                </Col>
            </Row>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         CURRENT_MENU: state.CURRENT_MENU
//     }
// };
export default connect()(Home);
