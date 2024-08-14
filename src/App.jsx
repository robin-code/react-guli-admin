import {Component} from 'react';
import axios from 'axios'

class App extends Component {

    getStudentData = () => {
        axios.get('http://localhost:8080/api2/search/users2').then(
            response => {
                console.log('成功了', response.data);
            },
            error => {
                console.log('失败了', error);
            }
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>点我获取学生数据</button>
            </div>
        );
    }
}


export default App;

