import {Component} from 'react';
import "./index.css"
import PropTypes from "prop-types";

class index extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        handleCheckAll: PropTypes.func.isRequired,
        handleClearDone: PropTypes.func.isRequired
    }

    handleCheckAll = (event) => {
        this.props.handleCheckAll(event.target.checked)
    }

    handleClearDone = () => {
        this.props.handleClearDone()
    }

    render() {
        const {todos} = this.props;
        const total = todos.length;
        // const doneCount = todos.filter(e => e.done === true).length;
        const doneCount = todos.reduce((pre, current) => pre + (current.done === true ? 1 : 0), 0);
        const allDone = total === doneCount;
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={allDone} onChange={this.handleCheckAll}/>
                </label>
                <span><span>已完成{doneCount}</span> / 全部{total}</span>
                <button className="btn btn-danger" onClick={this.handleClearDone}>清除已完成任务</button>
            </div>
        );
    }

}

export default index;