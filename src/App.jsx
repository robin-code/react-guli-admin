import "./index.css"
import Header from "./components/Header";
import Footer from "./components/Footer/index.jsx";
import List from "./components/List/index.jsx";
import {useState} from "react";

function App() {

    const [todos, setTodos] = useState([{id: 0, name: 'one', done: true}, {id: 1, name: 'two', done: false}, {
        id: 3,
        name: 'three',
        done: true
    }])

    const addTodo = (todoObj) => {
        setTodos([todoObj, ...todos])
    }
    const deleteTodo = (id) => {
        const newTodos = todos.filter(e => e.id !== id)
        setTodos(newTodos)
    }

    const updateTodo = (id, done) => {
        const newTodos = todos.map(e => {
            if (e.id === id) {
                return {...e, done}
            } else {
                return e;
            }
        })
        setTodos(newTodos);
    }


    const handleCheckAll = (done) => {
        const newTodos = todos.map(e => {
            return {...e, done}
        })
        setTodos(newTodos);
    }

    const handleClearDone = () => {
        const newTodos = todos.filter(e => e.done === false)
        setTodos(newTodos)
    }
    return (
        <>
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={addTodo}/>
                    <List todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
                    <Footer todos={todos} handleCheckAll={handleCheckAll} handleClearDone={handleClearDone}/>
                </div>
            </div>
        </>
    )
}

export default App
