import React, {Component} from "react";
import {Carousel} from "antd";
import {connect} from "react-redux";

class CarouselBoard extends Component{
    render() {
        return(
            <Carousel className='carousel' effect="fade" autoplay>
                <div>
                    <h3>hello</h3>
                </div>
                <div>
                    <h3>你好</h3>
                </div>
                <div>
                    <h3>Bonjour</h3>
                </div>
                <div>
                    <h3>こんにちは</h3>
                </div>
            </Carousel>
        )
    }
}
export default connect()(CarouselBoard)
