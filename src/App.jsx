import "./index.css"
import Header from "./components/Header";
import Footer from "./components/Footer/index.jsx";

function App() {

    return (
        <>
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header/>
                    <ul className="todo-main">
                        <li>
                            <label>
                                <input type="checkbox"/>
                                <span>xxxxx</span>
                            </label>
                            <button className="btn btn-danger" style={{display: "none"}}>删除</button>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox"/>
                                <span>yyyy</span>
                            </label>
                            <button className="btn btn-danger" style={{display: "none"}}>删除</button>
                        </li>
                    </ul>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default App
