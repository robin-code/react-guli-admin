import {Component} from 'react';
import Search from "./Component/Search";
import List from "./Component/List";
import './bootstrap.css'
class App extends Component {

    render() {
        return (
            <div className="container">
                <Search/>
                <List/>
            </div>
        );
    }
}


export default App;

