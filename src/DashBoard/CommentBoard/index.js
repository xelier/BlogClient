
import {Comment, Form, Button, List, Input, Card, Collapse} from 'antd';
import moment from 'moment';
import React, {Component} from "react";
import {connect} from "react-redux";

const { TextArea } = Input;
const { Panel } = Collapse;

const CommentList = ({ comments }) => (
    <List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? 'comments' : 'comment'}`}
        itemLayout="horizontal"
        renderItem={props => <Comment {...props} />}
    />
);

class CommentBoard extends Component {
    state = {
        comments: [],
        submitting: false,
        value: '',
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values);

                this.setState({
                    submitting: true,
                });
                //这里要写到回调里
                this.setState({
                    submitting: false,
                    value: '',
                    comments: [
                        {
                            author: values.username,
                            content: <p>{values.content}</p>,
                            datetime: moment().fromNow(),
                        },
                        ...this.state.comments,
                    ],
                });
                //写到回调结束标记
            }
        });
    };


    render(){
        const { getFieldDecorator } = this.props.form;
        const { comments, submitting } = this.state;
        return (
            <Card title={'留言板'}>
                {comments.length > 0 && <CommentList comments={comments} />}
                <Collapse bordered={false}>
                    <Panel header="添加留言" key="1">
                        <Comment
                            content={
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Item label="昵称">
                                        {getFieldDecorator('nickname', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: 'Please input your nickname!'
                                                }
                                            ],
                                        })(<Input/>)}
                                    </Form.Item>
                                    <Form.Item label="邮箱">
                                        {getFieldDecorator('email', {
                                            rules: [
                                                {
                                                    type: 'email',
                                                    message: 'The input is not valid E-mail!',
                                                },
                                                {
                                                    required: true,
                                                    message: 'Please input your E-mail!',
                                                },
                                            ],
                                        })(<Input />)}
                                    </Form.Item>
                                    <Form.Item label={'内容'}>
                                        {getFieldDecorator('content', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: 'Please input your comment!',
                                                },
                                            ],
                                        })(<TextArea rows={4}/>)}
                                    </Form.Item>
                                    <Form.Item>
                                        <Button htmlType="submit" loading={submitting}  type="primary">
                                        提交
                                        </Button>
                                    </Form.Item>
                                </Form>
                            }
                        />
                    </Panel>
                </Collapse>
            </Card>
        );
    }
}
export default connect()(Form.create({ name: 'register' })(CommentBoard))
