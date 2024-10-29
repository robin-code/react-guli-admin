import './login.css'
import logo from '../../assets/logo.png'
import {Button, Form, Input, message} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {reqLogin} from "../../api/index.js";

import {useNavigate} from 'react-router-dom';
import memoryUtil from "../../utils/memoryUtil.js";
import storeUtil from "../../utils/storeUtil.js";
import {useEffect, useState} from "react";

function Login() {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(!memoryUtil.user);

    useEffect(() => {
        const user = memoryUtil.user
        console.info("useEffect user ={},isLogin={}", memoryUtil.user, isLogin)
        if (user && user._id) {
            console.log("already login user=%s,isLogin=%s", memoryUtil.user, isLogin);
            navigate('/')
        }
    }, [isLogin, navigate]);

    const onFinish = async (values) => {
        message.success('登录成功', 2)
        const {username, password} = values;
        const result = await reqLogin(username, password) // {status: 0, data: user}  {status: 1, msg: 'xxx'}
        console.info("result is ", result.data)
        if (result) {
            memoryUtil.user = result.data;
            storeUtil.saveUser(result.data)
            setIsLogin(true);
            console.info("login success");
            navigate('/')
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return <div className="login">
        <header className="login-header">
            <img src={logo} alt="logo"/>
            <h1>React项目: 后台管理系统</h1>
        </header>

        <section className="login-content">
            <h2>登录</h2>

            <Form
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    prefix={<UserOutlined/>}
                    label="用户名"
                    name="username"
                    rules={
                        [
                            {required: true, whitespace: true, message: 'Please input your username!'},
                            {min: 4, message: '最少4位!'},
                            {pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是字母数字下划线!'},
                            {max: 16, message: '最多16位!'},
                        ]
                    }
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="密码"
                    name="password"
                    rules={[
                        {required: true, message: 'Please input your password!'},
                        {min: 4, message: '密码最少4位'},
                        {max: 6, message: '密码最多6位'},
                    ]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </section>
    </div>
}

export default Login;