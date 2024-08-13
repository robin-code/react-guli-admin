import {Component} from 'react';
import './index.css'
import Item from "../Item/index.jsx";
import PropTypes from "prop-types";

class index extends Component {

    static propTypes = {
        todos: PropTypes.array.isRequired
    }

    render() {
        const {todos} = this.props;
        return (
            <ul className="todo-main">
                {/* eslint-disable-next-line react/prop-types */}
                {todos.map(e =>
                    <Item key={e.id} item={e}/>
                )}
            </ul>
        );
    }
}

export default index;