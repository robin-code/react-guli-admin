import {Component} from 'react';
import {Layout} from 'antd';

import memoryUtil from "../../utils/memoryUtil.js";
import {Route, Routes, useNavigate} from "react-router-dom";
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'

import './index.less'
import Category from "../category/category.jsx";

const {Sider, Footer, Content} = Layout;

class Admin extends Component {
    render() {
        const user = memoryUtil.user
        if (!user || !user._id) {
            const navigate = useNavigate;
            navigate('/login');
        }
        return (
            <Layout style={{minHeight: '100%'}}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header/>
                    <Content style={{backgroundColor: 'skyblue'}}>
                        <Routes>
                            <Route path="/" element={<Admin />} />
                            <Route path="/category" element={<Category />} />
                        </Routes>
                    </Content>
                    <Footer style={{
                        textAlign: 'center',
                        color: '#cccccc'
                    }}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Admin;