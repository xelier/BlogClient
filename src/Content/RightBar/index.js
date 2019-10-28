import React, {Component} from "react";
import {Avatar, Card} from "antd";
import {connect} from "react-redux";
import background from '../../resources/imgs/RightBackGround.jpeg'
import avatar from '../../resources/imgs/avatar.jpg'
import gov from '../../resources/imgs/gov.png'
import './index.less'
const { Meta } = Card;

class RightBar extends Component{

    render() {
        return(
            <div>
                <Card
                cover={
                    <img src={background} alt={'background'}/>
                }>
                    <Meta
                    avatar={<Avatar src={avatar}/> }
                    title={'假梦君'}
                    description={'菜鸡程序员写博客'}>
                    </Meta>
                </Card>
                <Card className={'record'}>
                    <p className={'link'}><a href={`/`} className={'link'}>风信|WindTalk</a>©2019 Created by Xelier</p>
                    <p className={'link'}>
                        <a className="link" href="https://tsm.miit.gov.cn/dxxzsp/">
                            湘ICP备16015983号-2 号
                        </a>
                    </p>
                    <p className={'link'}>
                        <img src={gov} alt={'公安备案'}/>
                        <a className="link" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020088">
                        京公网安备 11010802010035 号
                        </a>
                    </p>
                </Card>
            </div>
        );
    }
}
export default connect()(RightBar);
