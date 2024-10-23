import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'antd/dist/antd.css';


// 读取local中保存user, 保存到内存中
import storageUtils from './utils/storeUtil.js'
import memoryUtils from './utils/memoryUtil.js'

const user = storageUtils.getUser()
memoryUtils.user = user


ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
        <App/>
    // </React.StrictMode>,
)
