import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';

import Login from "./pages/login/login.jsx";
import Admin from "./pages/admin";


function App() {

    return (
        <Router>

            <Link to="/login">Login</Link> <br/>
            <Link to="/admin">Admin</Link>

            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/admin" element={<Admin/>}/>
            </Routes>
        </Router>
    )
}

export default App
