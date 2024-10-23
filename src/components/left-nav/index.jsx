import './index.less';
import logo from '../../assets/logo.png';
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import menuList from "../../config/menuConfig.js";

const LeftNav = () => {
    // 获取当前的路径
    const location = useLocation();
    const { pathname } = location;
    console.log('pathname is %s',pathname)
    // 生成菜单项
    const items = menuList.map(menu => ({
        label: menu.children ? menu.label : <Link to={menu.key}>{menu.label}</Link>,
        key: menu.key,
        children: menu.children?.map(subMenu => ({
            label: <Link to={subMenu.key}>{subMenu.label}</Link>,
            key: subMenu.key,
        })),
    }));

    return (
        <div className='left-nav'>
            <Link to='/' className="left-nav-header">
                <img src={logo} alt="logo" />
                <h1>硅谷后台</h1>
            </Link>
            <Menu
                mode="inline"
                theme="dark"
                items={items}
                selectedKeys={[pathname]} // 根据当前路径设置选中的菜单项
            >
            </Menu>
        </div>
    );
};

export default LeftNav;