import {Component} from 'react';
import './index.css'

class index extends Component {
    render() {
        // eslint-disable-next-line react/prop-types
        const {item} = this.props;
        return (
            <li>
                <label>
                    <input type="checkbox"/>
                    {/* eslint-disable-next-line react/prop-types */}
                    <span>{item.name}</span>
                </label>
                <button className="btn btn-danger" style={{display: "none"}}>删除</button>
            </li>
        );
    }
}

export default index;