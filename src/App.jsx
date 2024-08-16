import {Component} from 'react';
import Search from "./Component/Search/Search.jsx";
import List from "./Component/List/List.jsx";
import '/public/bootstrap.css'

class App extends Component {

    state ={
        users:[],
        isFirst:true,
        isLoading:false,
        err:''
    }
    updateAppState = (stateObj) => {
        this.setState(stateObj)
    }

    render() {
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState}/>
                <List {...this.state}/>
            </div>
        );
    }
}


export default App;

