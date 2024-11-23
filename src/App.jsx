// import { useState } from 'react'


import Navbar from './Components/Home page/Navbar'
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
import Leatest from './Components/Home page/Leatest';
import Offers from './Components/Home page/Offers';
import TrendyFeatures from './Components/Home page/TrendyFeatures';
import TrendingProducts from './Components/Home page/TrendingProducts';
import TopCategories from './Components/Home page/TopCategories';
import Subscribe from './Components/Home page/Subscribe';
import Row from './Components/Home page/Row';
import Footer from './Components/Home page/Footer';

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
  let data = [];
  products.map((product, index) => (
    data.push(product)
  ))

  return (
    <>
      <Header />
      <Navbar />
      <Carousel />
      <Featured products={products} />
      <Leatest product={products} />
      <Offers />
      <TrendyFeatures />
      <TrendingProducts products={products} />
      <TopCategories products={data} />
      <Subscribe/>
      <Row/>
      <Footer/>
    </>
  )
}

export default App
