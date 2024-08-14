// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';
import PropTypes from "prop-types";

import {nanoid} from 'nanoid';
import "./index.css"

class index extends Component {

    //对接收的props进行：类型、必要性的限制
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }
    keyupHandle = (event) => {
        const {keyCode, target} = event;
        if (keyCode === 13) {
            if (target.value === '') {
                return;
            }
            const todoObj = {id: nanoid(), name: target.value, done: false};
            this.props.addTodo(todoObj);
            target.value = ''
        }
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.keyupHandle} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        );
    }
}

export default index;