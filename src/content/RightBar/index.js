import React, {Component} from "react";
import {Avatar, Card, Empty} from "antd";
import {connect} from "react-redux";
import background from '../../resources/imgs/RightBackGround.jpeg'
import avatar from '../../resources/imgs/avatar.jpg'
import gov from '../../resources/imgs/gov.png'
import './index.less'
import {Link} from "react-router-dom";
// import {indexAction} from './indexAction'
import {HttpClient} from "../../tools";
import Axios from "axios";
import {indexAction} from "./indexAction";

const {Meta} = Card;

class RightBar extends Component {
    constructor(props) {
        super(props);
        this.state = {newArticle: []}
    }

    componentDidMount() {
        //在这里查数据库把最新文章找出来
        // HttpClient.get(`http://localhost:8081/open/api/article`, {
        //     request: {
        //         condition: {},
        //         pageIndex: 1,
        //         pageSize: 5
        //     }
        // }).then((response) => {
        //     const data = response.data.data.RESULT_LIST || [];
        //     console.log(data);
        //     this.setState({newArticle: data});
        // })
        // Axios.get(`http://localhost:8081/open/api/article`, {
        //     params: {
        //         request: {
        //             condition: {},
        //             pageIndex: 1,
        //             pageSize: 5
        //         }
        //     }
        // }).then(r => {
        //         if (r.data) {
        //             if ("200" === r.data.status) {
        //                 this.setState({newArticle: r.data.content});
        //             }
        //         }
        // })

        // HttpClient.get(`http://localhost:8081/open/api/article`, {
        //     request: {
        //         condition: {},
        //         pageIndex: 1,
        //         pageSize: 5
        //     }
        // }).then(r => {
        //     if (r.data) {
        //         if ("200" === r.data.status) {
        //             this.setState()
        //         }
        //     }
        // })
        indexAction.getArticleList(
            {
                request: {
                    condition: {},
                    pageIndex: 1,
                    pageSize: 5
                }
            }
        ).then(
            (res) => {
                console.log("get article response:", res);
                const data = res.data.data.RESULT_LIST || [];
                console.log(data);
                this.setState({newArticle: data});
            },
            (error) => {
                console.log("get response failed!");
            });
    }

    render() {
        const {newArticle} = this.state;
        return (
            <div>
                <Card
                    cover={
                        <img src={background} alt={'background'}/>
                    }
                    hoverable={true}>
                    <Meta
                        avatar={<Avatar src={avatar}/>}
                        title={'假梦君'}
                        description={'蒲苇韧如丝，磐石无转移。'}>
                    </Meta>
                </Card>
                <Card className={'new-article'}
                      title={'最新动态'}
                      hoverable={true}>
                    {
                        newArticle && newArticle.length ?
                            <ul>
                                {
                                    newArticle.map(item => {
                                            return (
                                                <li key={item.id}>
                                                    <Link to={`/article/${item.ARTICLE_ID}`}>{item.TITLE}</Link>
                                                </li>
                                            )
                                        }
                                    )
                                }
                            </ul> : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
                    }
                </Card>
                <Card className={'record'} hoverable={true}>
                    <p className={'link'}><a href={`/`} className={'link'}>风信|WindTalk</a>©2020 Created by Xelier</p>
                    <p className={'link'}>
                        <a className="link" href="https://tsm.miit.gov.cn/dxxzsp/">
                            湘ICP备16015983号-2 号
                        </a>
                    </p>
                    <p className={'link'}>
                        <a className={'link'}
                           href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=43012402000529">
                            <img src={gov} className={'link-img'} alt={'备案图片'}/>
                            湘公网安备 43012402000529号
                        </a>
                    </p>
                </Card>
            </div>
        );
    }
}

export default connect()(RightBar);
