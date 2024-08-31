import {Component} from 'react';
import memoryUtil from "../../utils/memoryUtil.js";
import {useNavigate} from "react-router-dom";

class Index extends Component {
    render() {
        const user = memoryUtil.user
        console.log("user ", user)
        if (!user || !user._id) {
            const navigate = useNavigate;
            navigate('/login');
        }
        return (
            <div>
                用户id :{user._id} {<br/>}
                用户名： {user.username}
            </div>
        );
    }
}

export default Index;