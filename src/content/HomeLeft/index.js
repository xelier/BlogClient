import React, {Component} from "react";
import {Card,  Col, Row} from "antd";
import {connect} from "react-redux";
import CommentBoard from "../../dashBoard/CommentBoard";
import Summery from "../../dashBoard/Summery";
import "./index.less";
import CarouselBoard from "../../dashBoard/CarouselBoard";

class HomeLeft extends Component{
    render() {
        return(
            <div>
                <CarouselBoard/>
                <Row className={'home-left'}>
                    <Col span = {12}>
                        <CommentBoard/>
                    </Col>
                    <Col span = {11} offset={1}>
                        <Card>
                            <Summery/>
                        </Card>
                        <Card className={'home-left'}>
                            右下边
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default connect()(HomeLeft)
