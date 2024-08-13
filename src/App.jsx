import "./index.css"
import Header from "./components/Header";
import Footer from "./components/Footer/index.jsx";
import List from "./components/List/index.jsx";

function App() {

    return (
        <>
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header/>
                    <List/>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default App
