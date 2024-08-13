import {Component} from 'react';
import './index.css'
import Item from "../Item/index.jsx";

class index extends Component {
    render() {
        return (
            <ul className="todo-main">
                <Item/>
            </ul>
        );
    }
}

export default index;