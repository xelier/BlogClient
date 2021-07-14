import React, {Component} from "react";
import {connect} from "react-redux";
import {handleMenuAction} from "../redux/action/action";
import {Form, Menu} from "antd";
import {Link} from "react-router-dom";
import {indexAction} from "./indexAction";

class RightMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {current: '1'};
    }

    handleClick = e => {
        // console.log( 'click ', e.key);
        this.setState({current: e.key});
        const {dispatch} = this.props;
        dispatch(handleMenuAction(e.key));
    };

    logout = e => {
        // console.log( 'click ', e.key);
        // HttpClient.get(`http://localhost:8080/api/logout`).then(r => {
        //     if (r.data) {
        //         if ("200" === r.data.status) {
        //             this.setState()
        //         }
        //     }
        // })

        indexAction.logout().then(
            (res) => {
                console.log("get article response:", res);
            },
            (error) => {
                console.log("get response failed!");
            });
        this.setState({current: e.key});
        const {dispatch} = this.props;
        dispatch(handleMenuAction(e.key));
    };

    render() {
        if (this.props.IS_LOGIN) {
            return (
                <Menu mode={"horizontal"} onClick={this.handleClick}>
                    <Menu.SubMenu >
                        <Menu.Item key = {1001} title={"Manager"}>
                            <Link to={"/ADMIN"}>
                                {"Manager"}
                            </Link>
                        </Menu.Item>
                        <Menu.Item key = {1002} title={"Logout"} onClick={this.logout}>
                            Logout
                        </Menu.Item>
                    </Menu.SubMenu>
                </Menu>
            );
        } else {
            return (
                <Form>

                </Form>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        CURRENT_MENU: state.current
    }
};
export default connect(mapStateToProps)(RightMenu)
