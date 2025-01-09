import React, { useEffect } from 'react'
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



const Home = ({ products, data }) => {

    


    return (
        <>
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