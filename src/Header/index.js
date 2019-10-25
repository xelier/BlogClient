import React, {Component} from "react";
import {Menu} from "antd";
import {menu} from "../config";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {handleMenuAction} from "../redux/action/action";

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {current:'1'};
    }

    handleClick=e=>{
        console.log( 'click ', e.key);
        this.setState({current:e.key});
        const { dispatch } = this.props;
        dispatch(handleMenuAction(e.key));
    };

    render() {
        const menuItem = menu;
        return(
            <Menu mode={"horizontal"} onClick={this.handleClick}>
                {
                menuItem && menuItem.length?(
                        menuItem.map(item=>{
                            if (item.SUB_MENU){
                                return (
                                    <Menu.SubMenu key = {item.KEY} title={item.TITLE}>
                                        {
                                            item.SUB_MENU.map(subItem=>{
                                                return(
                                                    <Menu.Item key = {subItem.KEY} title={subItem.TITLE}>
                                                        <Link to={subItem.LINK}>
                                                            {subItem.TITLE}
                                                        </Link>
                                                    </Menu.Item>
                                                );
                                            })
                                        }
                                    </Menu.SubMenu>
                                )
                            }
                            return (
                                <Menu.Item key={item.KEY} title={item.TITLE}>
                                    <Link to={item.LINK}>
                                        {item.TITLE}
                                    </Link>
                                </Menu.Item>
                            )
                        })
                    ):null
                }
            </Menu>
        );
    }
}

const mapStateToProps = state => {
    return {
        CURRENT_MENU: state.current
    }
};

export default connect(mapStateToProps)(Header)
