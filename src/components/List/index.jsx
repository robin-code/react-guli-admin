import {Component} from 'react';
import './index.css'
import Item from "../Item/index.jsx";

class index extends Component {

    render() {
        // eslint-disable-next-line react/prop-types
        const {todos} = this.props;
        console.info("todo props", todos)
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