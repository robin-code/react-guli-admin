import {Component} from 'react';
import {Layout} from 'antd';

import memoryUtil from "../../utils/memoryUtil.js";
import {useNavigate} from "react-router-dom";

import './index.less'

const {Header, Footer, Sider, Content} = Layout;

class Index extends Component {
    render() {
        const user = memoryUtil.user
        if (!user || !user._id) {
            const navigate = useNavigate;
            navigate('/login');
        }
        return (
            <Layout style={{minHeight: '100%'}}>
                <Sider style={{backgroundColor: 'skyblue'}}>Sider</Sider>
                <Layout>
                    <Header style={{backgroundColor: 'orange'}}> Header < /Header>
                    <Content style={{backgroundColor: 'gray'}}>Content</Content>
                    <Footer style={{textAlign: 'center', color: '#cccccc'}}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Index;