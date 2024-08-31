import {Component} from "react";
import './index.less'
import logo from '../../assets/logo.png'
import {Menu} from "antd";
import {Link} from "react-router-dom";

export default class index extends Component {

    render() {
        const items = [
            {label: '菜单项一', key: 'item-1'}, // 菜单项务必填写 key
            {label: '菜单项二', key: 'item-2'},
            {
                label: '子菜单',
                key: 'submenu',
                children: [{label: '子菜单项', key: 'submenu-item-1'}],
            },
        ];
        return (
            <div className='left-nav'>
                <Link to='/' className="left-nav-header">
                    <img src={logo} alt="logo"/>
                    <h1>硅谷后台</h1>
                </Link>
                <Menu items={items}/>;
            </div>
        )
    }
}