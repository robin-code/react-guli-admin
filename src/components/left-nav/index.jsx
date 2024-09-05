import {Component} from "react";
import './index.less'
import logo from '../../assets/logo.png'
import {Menu} from "antd";
import {Link} from "react-router-dom";
import menuList from "../../config/menuConfig.js";

export default class LeftNav extends Component {

    render() {

        const menus = menuList.map(menu =>{
        return{
            label: <Link to={menu.key}>{menu.label}</Link>,
            key: menu.key
        }

        })
        return (
            <div className='left-nav'>
                <Link to='/' className="left-nav-header">
                    <img src={logo} alt="logo"/>
                    <h1>硅谷后台</h1>
                </Link>
                <Menu
                    mode="inline"
                    theme="dark"
                    items={menus}>
                </Menu>


            </div>
        )
    }
}