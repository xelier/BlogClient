import React, {Component} from "react";
import {Avatar, Card, Empty, notification} from "antd";
import {connect} from "react-redux";
import background from '../../resources/imgs/RightBackGround.jpeg'
import avatar from '../../resources/imgs/avatar.jpg'
import gov from '../../resources/imgs/gov.png'
import './index.less'
import {Link} from "react-router-dom";
import {indexAction} from './indexAction'
const { Meta } = Card;

class RightBar extends Component{
    constructor(props){
        super(props);
        this.state = {newArticle:[]}
    }
    componentDidMount(){
        //在这里查数据库把最新文章找出来
        indexAction.getNewArticles().then((response)=>{
            const data = response.data.data.RESULT_LIST||[];
            // console.log(data);
            this.setState({newArticle:data});
        }).catch(e=>{
            notification.open({
                message: 'Query Article Error',
                description:e.message
            });
        })
    }

    render() {
        const {newArticle} = this.state;
        return(
            <div>
                <Card
                cover={
                    <img src={background} alt={'background'}/>
                }
                hoverable={true}>
                    <Meta
                    avatar={<Avatar src={avatar}/> }
                    title={'假梦君'}
                    description={'菜鸡程序员写博客'}>
                    </Meta>
                </Card>
                <Card className={'new-article'}
                      title={'最新动态'}
                      hoverable={true}>
                            {
                                newArticle&&newArticle.length?
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
                                    </ul>: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                            }
                </Card>
                <Card className={'record'} hoverable={true}>
                    <p className={'link'}><a href={`/`} className={'link'}>风信|WindTalk</a>©2019 Created by Xelier</p>
                    <p className={'link'}>
                        <a className="link" href="https://tsm.miit.gov.cn/dxxzsp/">
                            湘ICP备16015983号-2 号
                        </a>
                    </p>
                    <p className={'link'}>
                        <div>
                            <a className={'link-a'} href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=43012402000529">
                                <img src={gov} className={'link-img'} alt={'备案图片'}/>
                                <p className={'link-p'}>湘公网安备 43012402000529号</p>
                            </a>
                        </div>
                    </p>
                </Card>
            </div>
        );
    }
}
export default connect()(RightBar);
