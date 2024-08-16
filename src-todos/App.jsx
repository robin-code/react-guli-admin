import "./index.css"
import Header from "./components/Header";
import Footer from "./components/Footer/index.jsx";
import List from "./components/List";
import {useState} from "react";

function App() {

    const [todos, setTodos] = useState([
        {id:'001',name:'吃饭',done:true},
        {id:'002',name:'睡觉',done:true},
        {id:'003',name:'打代码',done:false},
        {id:'004',name:'逛街',done:false}
    ])

    //添加一个todo
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
