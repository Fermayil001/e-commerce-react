import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import Home from "./Components/Home";
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import ProductsPg from "./Components/ProductsPg";
import Navbar from "./Components/Home page/Navbar";
import Header from "./Components/Home page/Header";
import Login from "./Components/LoginPg";

function App() {


  return (
    <Router>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPg />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
