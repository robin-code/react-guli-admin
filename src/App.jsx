import "./index.css"
import Header from "./components/Header";
import Footer from "./components/Footer/index.jsx";
import List from "./components/List/index.jsx";
import {useState} from "react";

function App() {

    const [todos] = useState([{id: 0, name: 'one'}, {id: 1, name: 'two'}])

    return (
        <>
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header/>
                    <List todos={todos}/>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default App
