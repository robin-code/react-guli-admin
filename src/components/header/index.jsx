import {Component} from 'react';
import './index.less'
class index extends Component {
    render() {
        return (
            <div className='header'>
                <div className='header-top'>
                    <span>欢迎你，admin</span>
                    <a href=":javascript">退出</a>
                </div>
                <div className='header-bottom'>
                   <div className='header-bottom-left'>首页</div>
                   <div className='header-bottom-right'>
                       <span>2024-10-23 21:49:58</span>
                       <img alt='weather'></img>
                       <span>晴</span>
                   </div>
                </div>
            </div>
        );
    }
}

export default index;