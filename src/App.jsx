import {Component} from 'react';
import Search from "./Component/Search/Search.jsx";
import List from "./Component/List/List.jsx";
import '/public/bootstrap.css'

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

