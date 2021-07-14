import React, {Component} from "react";
import {connect} from "react-redux";
import {Col, Row, Statistic} from "antd";
import moment from "moment";

class Summery extends Component{

    onFinish() {
        console.log('finished!');
    }
    render() {
        const { Countdown } = Statistic;
        const deadline = moment().endOf('years'); // Moment is also OK
        const year = moment().year();

        return(
            <Row gutter={16}>
                <Col span={24} >
                    <Countdown title={'离'+year+'年结束还有'} value={deadline} format="D 天 H 时 m 分 s 秒" />
                </Col>
            </Row>
        )
    }
}
export default connect()(Summery)
