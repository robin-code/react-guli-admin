import {Component} from "react";
import './index.less'
import logo from '../../assets/logo.png'
import {Menu} from "antd";
import {Link} from "react-router-dom";
import {AppstoreOutlined} from "@ant-design/icons";

export default class LeftNav extends Component {

    render() {
        const items = [
            {
                label: <Link to="/category">Category</Link>,
                key: '/category',
                icon: <AppstoreOutlined/>
            },
            {
                label: <Link to="/product">Product</Link>,
                key: '/product',
                icon: <AppstoreOutlined/>
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