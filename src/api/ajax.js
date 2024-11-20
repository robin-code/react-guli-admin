/*
能发送异步ajax请求的函数模块
封装axios库
函数的返回值是promise对象
1. 优化1: 统一处理请求异常?
    在外层包一个自己创建的promise对象
    在请求出错时, 不reject(error), 而是显示错误提示
2. 优化2: 异步得到不是reponse, 而是response.data
   在请求成功resolve时: resolve(response.data)
 */

import axios from 'axios'
import {message} from 'antd'

export default function ajax(url, data = {}, type = 'GET') {

    return new Promise((resolve) => {
            console.debug("request ", url, data)
            let promise
            // 1. 执行异步ajax请求
            switch (type) {
                case 'GET':
                    promise = axios.get(url, {params: data});
                    break;
                case 'POST':
                    promise = axios.post(url, data);
                    break;
                case 'PUT':
                    promise = axios.put(url, data);
                    break;
                case 'DELETE':
                    promise = axios.delete(url);
                    break;
                default:
                    console.error("unSupport method")
                    return;
            }
            // 2. 如果成功了, 调用resolve(value)
            promise.then(response => {
                resolve(response.data)
                // 3. 如果失败了, 不调用reject(reason), 而是提示异常信息
            }).catch(error => {
                // reject(error)
                message.error('请求出错了: ' + error.message)
            })
        }
    )
}
