import {Component} from "react";
import './index.less'
import logo from '../../assets/logo.png'
import {Menu} from "antd";
import {Link, Route, Routes} from "react-router-dom";
import {AppstoreOutlined, LinkOutlined, MailOutlined, PieChartOutlined, SettingOutlined} from "@ant-design/icons";
import Category from "../../pages/category/category.jsx";

export default class index extends Component {

    render() {
        const items = [
            {
                label: <Link to="/category">Category</Link>,
                key: '/category',
                icon: <AppstoreOutlined />
            },            { label: '菜单项二', key: 'item-2' },
            {
                label: '子菜单',
                key: 'submenu',
                children: [{ label: '子菜单项', key: 'submenu-item-1' }],
            },
        ];

        return (
            <div className='left-nav'>
                <Link to='/' className="left-nav-header">
                    <img src={logo} alt="logo"/>
                    <h1>硅谷后台</h1>
                </Link>
                <Menu
                    mode="inline"
                    theme="dark"
                    items={items}>
                </Menu>


            </div>
        )
    }
}