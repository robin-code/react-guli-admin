import "./index.css"
import Header from "./components/Header";
import Footer from "./components/Footer/index.jsx";
import List from "./components/List/index.jsx";
import {useState} from "react";

function App() {

    const [todos, setTodos] = useState([{id: 0, name: 'one', done: true}, {id: 1, name: 'two', done: false}])

    const addTodo = (todoObj) => {
        console.info("add todo ", todoObj)
        setTodos([todoObj, ...todos])
    }
    const deleteTodo = (id) => {
        console.info("delete todo", id)
        const newTodos = todos.filter(e => e.id !== id)
        setTodos(newTodos)
    }
    return (
        <>
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={addTodo}/>
                    <List todos={todos} deleteTodo={deleteTodo}/>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default App
