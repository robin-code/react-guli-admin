import {Component} from 'react';
import "./index.css"
import PropTypes from "prop-types";

class index extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired
    }

    render() {
        const {todos} = this.props;
        const total = todos.length;
        const doneCount = todos.filter(e => e.done === true).length;
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox"/>
                </label>
                <span><span>已完成{doneCount}</span> / 全部{total}</span>
                <button className="btn btn-danger">清除已完成任务</button>
            </div>
        );
    }
}

export default index;