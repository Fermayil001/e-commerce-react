// import { useState } from 'react'


import Navbar  from './Components/Home page/Navbar'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import Header from './Components/Home page/Header'
import Carousel from './Components/Home page/Carousel';
import Featured from './Components/Home page/Featured';

function App() {
  
  const products = [
    {
      name: "Cantilever chair",
      code: "Y523201",
      price: "65.00",
      discount: "43.00",
      img: [
        {
          default: "./assets/images/image 3.png",
          color1: "./assets/images/image 1167.png",
          color2: "./assets/images/image 1170.png"
        }
      ]
    },
    {
      name: "Cantilever chair",
      code: "Y523201",
      price: "43.00",
      img: [
        {
          default: "./assets/images/image 1167.png",
          color1: "./assets/images/image 1172.png",
          color2: "./assets/images/purepng 1.png"
        }
      ]
    },
    {
      name: "Cantilever chair",
      code: "Y523201",
      price: "42.00",
      img: [
        {
          default: "./assets/images/image 1168.png",
          color1: "./assets/images/purepng 1.png",
          color2: "./assets/images/12599809_6 1.png"
        }
      ]
    },
    {
      name: "Cantilever chair",
      code: "Y523201",
      price: "42.00",
      img: [
        {
          default: "./assets/images/image 1169.png",
          color1: "./assets/images/image 1170.png",
          color2: "./assets/images/image 1172.png"
        }
      ]
    },
    {
      name: "Cantilever chair",
      code: "Y523201",
      price: "42.00",
      img: [
        {
          default: "./assets/images/image 1170.png",
          color1: "./assets/images/image 1168.png",
          color2: "./assets/images/image 1170.png"
        }
      ]
    },
    {
      name: "Cantilever chair",
      code: "Y523201",
      price: "42.00",
      img: [
        {
          default: "./assets/images/image 1167.png",
          color1: "./assets/images/image 3.png",
          color2: "./assets/images/image 1170.png"
        }
      ]
    },
    {
      name: "Cantilever chair",
      code: "Y523201",
      price: "42.00",
      img: [
        {
          default: "./assets/images/image 1172.png",
          color1: "./assets/images/unnamed 1.png",
          color2: "./assets/images/image 1168.png"
        }
      ]
    },
    {
      name: "Cantilever chair",
      code: "Y523201",
      price: "42.00",
      img: [
        {
          default: "./assets/images/logitech-c920s 1.png",
          color1: "./assets/images/image 1169.png",
          color2: "./assets/images/image 1170.png"
        }
      ]
    },
    {
      name: "Cantilever chair",
      code: "Y523201",
      price: "42.00",
      img: [
        {
          default: "./assets/images/purepng 1.png",
          color1: "./assets/images/image 1169.png",
          color2: "./assets/images/image 1169.png"
        }
      ]
    },
    {
      name: "Cantilever chair",
      code: "Y523201",
      price: "42.00",
      img: [
        {
          default: "./assets/images/12599809_6 1.png",
          color1: "./assets/images/image 1170.png",
          color2: "./assets/images/image 1167.png"
        }
      ]
    },
    {
      name: "Cantilever chair",
      code: "Y523201",
      price: "42.00",
      img: [
        {
          default: "./assets/images/unnamed 1.png",
          color1: "./assets/images/image 1168.png",
          color2: "./assets/images/purepng 1.png"
        }
      ]
    },
  ]



  return (
    <>
      <Header/>
      <Navbar/>
      <Carousel/>
      <Featured products={products}/>
    </>
  )
}

export default App
