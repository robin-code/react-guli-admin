import {Component} from 'react';
import {Outlet} from "react-router-dom";

class Product extends Component {
    render() {
        return (
            <Outlet/>
        );
    }
}

export default Product;