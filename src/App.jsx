import React from "react";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsPg from "./Components/ProductsPg";
import Navbar from "./Components/Home page/Navbar";
import Header from "./Components/Home page/Header";
import Login from "./Components/LoginPg";
import ShopPg from "./Components/ShopPg";
import NotFound from "./Components/404 page/NotFound";
import Admin from "./Components/Admin";
import SignUp from "./Components/Sign Up/SignUp";
import AdminLayout from "./Components/Admin Panel/AdminLayout";
import Dashboard from "./Components/Admin Panel/Dashboard";
import ProductManagement from "./Components/Admin Panel/ProductManagement";
import OrderManagement from "./Components/Admin Panel/OrderManagement";
import Logout from "./Components/Logout pg/Logout";
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from "./redux/Api-data/getAllProducts";
function App() {
    const products = [
        {
            name: "Cantilever chair",
            code: "Y523201",
            price: "65.00",
            discount: "43.00",
            img: [
                {
                    default: "src/assets/img/image 1167.png",
                    color1: "src/assets/img/image 1168.png",
                    color2: "src/assets/img/image 1170.png"
                }
            ]
        },
        {
            name: "Cantilever chair",
            code: "Y523201",
            price: "65.00",
            discount: "43.00",
            img: [
                {
                    default: "src/assets/img/image 1167.png",
                    color1: "src/assets/img/image 1172.png",
                    color2: "src/assets/img/purepng 1.png"
                }
            ]
        },
        {
            name: "Cantilever chair",
            code: "Y523201",
            price: "65.00",
            discount: "43.00",
            img: [
                {
                    default: "src/assets/img/image 1168.png",
                    color1: "src/assets/img/purepng 1.png",
                    color2: "src/assets/img/12599809_6 1.png"
                }
            ]
        },
        {
            name: "Cantilever chair",
            code: "Y523201",
            price: "65.00",
            discount: "43.00",
            img: [
                {
                    default: "src/assets/img/image 1169.png",
                    color1: "src/assets/img/image 1170.png",
                    color2: "src/assets/img/image 1172.png"
                }
            ]
        },
        {
            name: "Cantilever chair",
            code: "Y523201",
            price: "65.00",
            discount: "43.00",
            img: [
                {
                    default: "src/assets/img/image 1170.png",
                    color1: "src/assets/img/image 1168.png",
                    color2: "src/assets/img/image 1170.png"
                }
            ]
        },
        {
            name: "Cantilever chair",
            code: "Y523201",
            price: "65.00",
            discount: "43.00",
            img: [
                {
                    default: "src/assets/img/image 1167.png",
                    color1: "src/assets/img/image 3.png",
                    color2: "src/assets/img/image 1170.png"
                }
            ]
        },
        {
            name: "Cantilever chair",
            code: "Y523201",
            price: "65.00",
            discount: "43.00",
            img: [
                {
                    default: "src/assets/img/image 1172.png",
                    color1: "src/assets/img/unnamed 1.png",
                    color2: "src/assets/img/image 1168.png"
                }
            ]
        },
        {
            name: "Cantilever chair",
            code: "Y523201",
            price: "65.00",
            discount: "43.00",
            img: [
                {
                    default: "src/assets/img/logitech-c920s 1.png",
                    color1: "src/assets/img/image 1169.png",
                    color2: "src/assets/img/image 1170.png"
                }
            ]
        },
        {
            name: "Cantilever chair",
            code: "Y523201",
            price: "65.00",
            discount: "43.00",
            img: [
                {
                    default: "src/assets/img/purepng 1.png",
                    color1: "src/assets/img/image 1169.png",
                    color2: "src/assets/img/image 1169.png"
                }
            ]
        },
        {
            name: "Cantilever chair",
            code: "Y523201",
            price: "65.00",
            discount: "43.00",
            img: [
                {
                    default: "src/assets/img/12599809_6 1.png",
                    color1: "src/assets/img/image 1170.png",
                    color2: "src/assets/img/image 1167.png"
                }
            ]
        },
        {
            name: "Cantilever chair",
            code: "Y523201",
            price: "65.00",
            discount: "43.00",
            img: [
                {
                    default: "src/assets/img/unnamed 1.png",
                    color1: "src/assets/img/image 1168.png",
                    color2: "src/assets/img/purepng 1.png"
                }
            ]
        },
    ]

    const token = localStorage.getItem('token');



    const { product } = useSelector(state => state.allProducts);

    const dispatch = useDispatch()
    dispatch(getAllProducts())


    console.log(product); 
    

    let data = [];
    products?.map((product, index) => (
        data.push(product)
    ))

    const [isAdminMode, setIsAdminMode] = useState(false)


    useEffect(() => {
        window.location.pathname.startsWith("/admin")
            ? setIsAdminMode(true)
            : setIsAdminMode(false);
    }, [window.location.pathname])

    const [isSuccessLogin, setIsSuccessLogin] = useState(false)


    return (
        <Router>
            {!isAdminMode && <Header />}
            {!isAdminMode && <Navbar />}
            <Routes>
                <Route path="/" element={<Home products={products} data={data} />} />
                <Route path="/products" element={<ProductsPg />} />
                <Route path="/shop" element={<ShopPg products={products} />} />
                <Route path="/login" element={isSuccessLogin ? <Logout /> : <Login setIsSuccessLogin={setIsSuccessLogin} />} />
                <Route path="/*" element={<NotFound />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/admin/*" element={<AdminLayout />}>
                    <Route index path="dashboard" element={<Dashboard />} />
                    <Route path="productsmanagement" element={<ProductManagement />} />
                    <Route path="ordermanagement" element={<OrderManagement />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
