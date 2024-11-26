import React from 'react'
/* import Header from './Home page/Header'
import Navbar from './Home page/Navbar' */
import Carousel from './Home page/Carousel';
import Featured from './Home page/Featured';
import Leatest from './Home page/Leatest';
import Offers from './Home page/Offers';
import TrendyFeatures from './Home page/TrendyFeatures';
import TrendingProducts from './Home page/TrendingProducts';
import TopCategories from './Home page/TopCategories';
import Subscribe from './Home page/Subscribe';
import Row from './Home page/Row';
import Footer from './Home page/Footer';

const Home = ({ products , data }) => {

    // const products = [
    //     {
    //         name: "Cantilever chair",
    //         code: "Y523201",
    //         price: "65.00",
    //         discount: "43.00",
    //         img: [
    //             {
    //                 default: "src/assets/img/image 1167.png",
    //                 color1: "src/assets/img/image 1168.png",
    //                 color2: "src/assets/img/image 1170.png"
    //             }
    //         ]
    //     },
    //     {
    //         name: "Cantilever chair",
    //         code: "Y523201",
    //         price: "65.00",
    //         discount: "43.00",
    //         img: [
    //             {
    //                 default: "src/assets/img/image 1167.png",
    //                 color1: "src/assets/img/image 1172.png",
    //                 color2: "src/assets/img/purepng 1.png"
    //             }
    //         ]
    //     },
    //     {
    //         name: "Cantilever chair",
    //         code: "Y523201",
    //         price: "65.00",
    //         discount: "43.00",
    //         img: [
    //             {
    //                 default: "src/assets/img/image 1168.png",
    //                 color1: "src/assets/img/purepng 1.png",
    //                 color2: "src/assets/img/12599809_6 1.png"
    //             }
    //         ]
    //     },
    //     {
    //         name: "Cantilever chair",
    //         code: "Y523201",
    //         price: "65.00",
    //         discount: "43.00",
    //         img: [
    //             {
    //                 default: "src/assets/img/image 1169.png",
    //                 color1: "src/assets/img/image 1170.png",
    //                 color2: "src/assets/img/image 1172.png"
    //             }
    //         ]
    //     },
    //     {
    //         name: "Cantilever chair",
    //         code: "Y523201",
    //         price: "65.00",
    //         discount: "43.00",
    //         img: [
    //             {
    //                 default: "src/assets/img/image 1170.png",
    //                 color1: "src/assets/img/image 1168.png",
    //                 color2: "src/assets/img/image 1170.png"
    //             }
    //         ]
    //     },
    //     {
    //         name: "Cantilever chair",
    //         code: "Y523201",
    //         price: "65.00",
    //         discount: "43.00",
    //         img: [
    //             {
    //                 default: "src/assets/img/image 1167.png",
    //                 color1: "src/assets/img/image 3.png",
    //                 color2: "src/assets/img/image 1170.png"
    //             }
    //         ]
    //     },
    //     {
    //         name: "Cantilever chair",
    //         code: "Y523201",
    //         price: "65.00",
    //         discount: "43.00",
    //         img: [
    //             {
    //                 default: "src/assets/img/image 1172.png",
    //                 color1: "src/assets/img/unnamed 1.png",
    //                 color2: "src/assets/img/image 1168.png"
    //             }
    //         ]
    //     },
    //     {
    //         name: "Cantilever chair",
    //         code: "Y523201",
    //         price: "65.00",
    //         discount: "43.00",
    //         img: [
    //             {
    //                 default: "src/assets/img/logitech-c920s 1.png",
    //                 color1: "src/assets/img/image 1169.png",
    //                 color2: "src/assets/img/image 1170.png"
    //             }
    //         ]
    //     },
    //     {
    //         name: "Cantilever chair",
    //         code: "Y523201",
    //         price: "65.00",
    //         discount: "43.00",
    //         img: [
    //             {
    //                 default: "src/assets/img/purepng 1.png",
    //                 color1: "src/assets/img/image 1169.png",
    //                 color2: "src/assets/img/image 1169.png"
    //             }
    //         ]
    //     },
    //     {
    //         name: "Cantilever chair",
    //         code: "Y523201",
    //         price: "65.00",
    //         discount: "43.00",
    //         img: [
    //             {
    //                 default: "src/assets/img/12599809_6 1.png",
    //                 color1: "src/assets/img/image 1170.png",
    //                 color2: "src/assets/img/image 1167.png"
    //             }
    //         ]
    //     },
    //     {
    //         name: "Cantilever chair",
    //         code: "Y523201",
    //         price: "65.00",
    //         discount: "43.00",
    //         img: [
    //             {
    //                 default: "src/assets/img/unnamed 1.png",
    //                 color1: "src/assets/img/image 1168.png",
    //                 color2: "src/assets/img/purepng 1.png"
    //             }
    //         ]
    //     },
    // ]
    // let data = [];
    // products.map((product, index) => (
    //     data.push(product)
    // ))

    return (
        <>
            {/* <Header />
            <Navbar /> */}
            <Carousel />
            <Featured products={products} />
            <Leatest product={products} />
            <Offers />
            <TrendyFeatures />
            <TrendingProducts products={products} />
            <TopCategories products={data} />
            <Subscribe />
            <Row />
            <Footer />
        </>
    )
}

export default Home