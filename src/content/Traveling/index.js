import {Component} from "react";
import React from 'react';
import {connect} from "react-redux";
import {indexAction} from "./indexAction";
import {notification} from "antd";
import {handleArticleAction} from "../../redux/action/action";


class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CONDITION: {TAG: this.props.CURRENT_MENU},
            PAGE_INDEX: 0,
            PAGE_SIZE: 10
        }
    }


    componentDidMount() {
        let param = {
            CONDITION: {},
            PAGE_INDEX: 0,
            PAGE_SIZE: 5
        }

        indexAction.getTravelingArticles(param).then(r => {
            const data = r.data.data.RESULT_LIST||[];
            this.setState({articleList:data});
        }).catch(e=>{
            notification.open({
                message: 'Query Article Error',
                description:e.message
            });
        })
    }

    render() {
        return (
            <div>
                旅行记
            </div>
        );
    }


    handleClick=e=>{
        // console.log( 'click ', e.key);
        this.setState({current_article:e.key});
        const { dispatch } = this.props;
        dispatch(handleArticleAction(e.key));
    };
}

const mapStateToProps = state => {
    return {
        CURRENT_MENU: state.current
    }
};
export default connect(mapStateToProps)(Article);
