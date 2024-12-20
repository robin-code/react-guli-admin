import './index.less'
import {Button, Modal} from "antd";
import {useEffect, useState} from "react";
import dayjs from "dayjs";
import {useLocation, useNavigate} from "react-router-dom";
import menuList from "../../config/menuConfig.js";
import StoreUtil from "../../utils/storeUtil.js";
import memoryUtil from "../../utils/memoryUtil.js";


const getTitleByPath = (menuItems, path) => {
    for (const item of menuItems) {
        if (item.key === path) return item.label;
        if (item.children) {
            const foundTitle = getTitleByPath(item.children, path);
            if (foundTitle) return foundTitle;
        }
    }
    return null;
};

const Header = () => {

    const [currentTime, setCurrentTime] = useState(dayjs().format('YYYY-MM-DD HH:mm:ss'))
    const [title, setTitle] = useState('');
    const location = useLocation();
    const [weather] = useState('晴');
    const [user, setUser] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        // 更新路径对应的标题
        const currentTitle = getTitleByPath(menuList, location.pathname);
        setTitle(currentTitle || "首页");
    }, [location.pathname]);

    useEffect(() => {
        // 在组件挂载时设置定时器，每秒更新一次时间
        const timerId = setInterval(() => {
            setCurrentTime(dayjs().format('YYYY-MM-DD HH:mm:ss'));
        }, 1000);

        // 在组件卸载时清除定时器
        return () => clearInterval(timerId);
    }, []); // 空依赖数组表示只在组件挂载和卸载时运行

    useEffect(() => {
        const currentUser = StoreUtil.getUser();
        setUser(currentUser.username);
    }, []);

    const logout = () =>{
        // 显示确认框
        Modal.confirm({
            content: '确定退出吗?',
            onOk: () => {
                console.info("logout ,remove user")
                StoreUtil.removeUser();
                memoryUtil.user = {}
                navigate('/login')
            }
        })
    }

    return (
        <div className='header'>
            <div className='header-top'>
                <span>欢迎你:{user}</span>
                <Button onClick={logout}>退出</Button>
            </div>
            <div className='header-bottom'>
                <div className='header-bottom-left'>{title}</div>
                <div className='header-bottom-right'>
                    <span>{currentTime}</span>
                    <span>{weather}</span>
                </div>
            </div>
        </div>)
}

export default Header;