import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Login from "./pages/login/login.jsx";
import './utils/storeUtil.js'
import Category from "./pages/category/index.jsx";
import Product from "./pages/product/index.jsx";
import Order from "./pages/orders/index.jsx";
import {BarChart} from "./pages/charts/BarChart.jsx";
import {LineChart} from "./pages/charts/Line.jsx";
import {PieChart} from "./pages/charts/PieChart.jsx";
import User from "./pages/user/index.jsx";
import Role from "./pages/role/index.jsx";
import Admin from "./pages/admin/index.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Admin/>}/>
                <Route path="/category" element={<Category/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/user" element={<User/>}/>
                <Route path="/role" element={<Role/>}/>
                <Route path="/order" element={<Order/>}/>
                <Route path="/charts/bar" element={<BarChart/>}/>
                <Route path="/charts/line" element={<LineChart/>}/>
                <Route path="/charts/pie" element={<PieChart/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
