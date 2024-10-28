import './index.less'
import {Button} from "antd";
import {useEffect, useState} from "react";
import dayjs from "dayjs";

const Header = () => {

    const [currentTime,setCurrentTime] = useState(dayjs().format('YYYY-MM-DD HH:mm:ss'))


    useEffect(() => {
        // 在组件挂载时设置定时器，每秒更新一次时间
        const timerId = setInterval(() => {
            setCurrentTime(dayjs().format('YYYY-MM-DD HH:mm:ss'));
        }, 1000);

        // 在组件卸载时清除定时器
        return () => clearInterval(timerId);
    }, []); // 空依赖数组表示只在组件挂载和卸载时运行

    return (
        <div className='header'>
            <div className='header-top'>
                <span>欢迎你，admin</span>
                <Button>退出</Button>
            </div>
            <div className='header-bottom'>
                <div className='header-bottom-left'>首页</div>
                <div className='header-bottom-right'>
                    <span>{currentTime}</span>
                    <img alt='weather'></img>
                    <span>晴</span>
                </div>
            </div>
        </div>)
}

export default Header;