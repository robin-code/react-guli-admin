import {Component} from 'react';
import './index.css'

class index extends Component {
    render() {
        return (
            <ul className="todo-main">
                <li>
                    <label>
                        <input type="checkbox"/>
                        <span>abc</span>
                    </label>
                    <button className="btn btn-danger" style={{display: "none"}}>删除</button>
                </li>
                <li>
                    <label>
                        <input type="checkbox"/>
                        <span>yyyy</span>
                    </label>
                    <button className="btn btn-danger" style={{display: "none"}}>删除</button>
                </li>
            </ul>
        );
    }
}

export default index;