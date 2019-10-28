import React, {Component} from 'react';
import './App.less';
import HeaderBar from "./HeaderBar";
import {connect} from "react-redux";
import {Layout} from "antd";
const { Header, Content } = Layout;

class App extends Component {
  render() {
    return (
        <Layout className={'App-layout'}>
            <Header className={"App-header"}>
                <HeaderBar/>
            </Header>
            <Content className={"App-content"}>
                {this.props.children}
            </Content>
        </Layout>
    );
  }
}

export default connect()(App);
