import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';

import Login from "./pages/login/login.jsx";
import Admin from "./pages/admin";


function App() {

    return (
        <Router>
            <Routes>
                {/*默认重定向到login*/}
                <Route path="/" element={<Navigate to='/login'/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/admin" element={<Admin/>}/>

            </Routes>
        </Router>
    )
}

export default App
