import {Component} from 'react';
import Search from "./Component/Search/Search.jsx";
import List from "./Component/List/List.jsx";
import '/public/bootstrap.css'

class App extends Component {

    state ={
        users:[]
    }
    updateAppState = (value) => {
        console.log("value",value)
        this.setState({users:value.users})
    }

    render() {
        const {users} = this.state;
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState}/>
                <List users={users}/>
            </div>
        );
    }
}


export default App;

