import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Login from "./pages/login/login.jsx";
import './utils/storeUtil.js'
import Category from "./pages/category/index.jsx";
import Admin from "./pages/admin/index.jsx";
import Product from "./pages/product/index.jsx";


function App() {
    return (
        <Router>
            <Routes>
                {/*默认重定向到login*/}
                <Route path="/" element={<Admin/>}>
                    <Route path="/category" element={<Category/>}/>
                    <Route path="/product" element={<Product/>}/>
                </Route>
                <Route path="/login" element={<Login/>}/>

            </Routes>
        </Router>
    )
}

export default App
