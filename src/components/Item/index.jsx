import {Component} from 'react';
import './index.css'
import PropTypes from "prop-types";

class index extends Component {

    static propTypes = {
        deleteTodo: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired
    }
    state = {
        mouseEnter: false
    }
    handleMouseEnter = (mouseEnter) => {
        this.setState({"mouseEnter": mouseEnter})
    };

    const
    handleDelete = (id) => {
        if (window.confirm("确定删除吗")) {
            this.props.deleteTodo(id);
        }

    }


    render() {
        const {item} = this.props;
        const {mouseEnter} = this.state;
        return (
            <li onMouseEnter={() => this.handleMouseEnter(true)} onMouseLeave={() => this.handleMouseEnter(false)}>
                <label>
                    <input type="checkbox" defaultChecked={item.done}/>
                    <span>{item.name}</span>
                </label>
                <button onClick={() => this.handleDelete(item.id)}  className="btn btn-danger"
                        style={{display: mouseEnter ? "inline-block" : "none"}}>删除
                </button>
            </li>
        );
    }
}

export default index;