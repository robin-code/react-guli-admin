import {Component} from 'react';
import './index.css'

class index extends Component {

    state = {
        mouseEnter: false
    }
    handleMouseEnter = (mouseEnter) => {
        this.setState({"mouseEnter": mouseEnter})
    };


    render() {
        // eslint-disable-next-line react/prop-types
        const {item} = this.props;
        const {mouseEnter} = this.state;
        return (
            <li onMouseEnter={() => this.handleMouseEnter(true)} onMouseLeave={() => this.handleMouseEnter(false)}>
                <label>
                    {/* eslint-disable-next-line react/prop-types */}
                    <input type="checkbox" defaultChecked={item.done}/>
                    {/* eslint-disable-next-line react/prop-types */}
                    <span>{item.name}</span>
                </label>
                <button className="btn btn-danger" style={{display: mouseEnter ? "inline-block" : "none"}}>删除</button>
            </li>
        );
    }
}

export default index;