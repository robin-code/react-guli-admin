import {Layout} from 'antd';

import {Outlet, useNavigate} from "react-router-dom";
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'

import './index.less'
import StoreUtil from "../../utils/storeUtil.js";

const {Sider, Footer, Content} = Layout;

const Admin = () => {
    const user = StoreUtil.getUser();
    console.log("user is ", user)
    if (!!user) {
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
                <Content>
                    <Outlet/>
                </Content>
                <Footer style={{
                    textAlign: 'center',
                    color: '#cccccc'
                }}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
            </Layout>
        </Layout>
    );
}

export default Admin;