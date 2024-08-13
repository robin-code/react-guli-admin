import {Component} from 'react';
import './index.css'
import Item from "../Item/index.jsx";
import PropTypes from "prop-types";

class index extends Component {

    static propTypes = {
        todos: PropTypes.array.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }

    render() {
        const {todos} = this.props;
        return (
            <ul className="todo-main">
                {todos.map(e =>
                    <Item key={e.id} item={e} deleteTodo={this.props.deleteTodo}/>
                )}
            </ul>
        );
    }
}

export default index;