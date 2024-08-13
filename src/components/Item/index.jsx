import {Component} from 'react';
import './index.css'

class index extends Component {
    render() {
        return (
            <li>
                <label>
                    <input type="checkbox"/>
                    <span>first todo</span>
                </label>
                <button className="btn btn-danger" style={{display: "none"}}>删除</button>
            </li>
        );
    }
}

export default index;