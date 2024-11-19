import React from 'react'
import TrendingCard from './Cards/TrendingCard'
import TrendingcardDiscount from './Cards/TrendingcardDiscount'
import Clockimg from '../../assets/img/Discount/image 1162.png'
import Chairimg from '../../assets/img/Discount/image 1161.png'
import Executiveimg1 from '../../assets/img/Discount/Executive/Trnding products list-1.png'
import Executiveimg2 from '../../assets/img/Discount/Executive/Trnding products list-2.png'
import Executiveimg3 from '../../assets/img/Discount/Executive/Trnding products list.png'


const TrendingProducts = ({ products }) => {
    return (
        <section className='trending-product-section main-width mx-auto'>
            <h3 className='text-center title-color fs-1 fw-700 mt-5'>Trending Products</h3>
            <div className="trending-cards mt-4 d-flex flex-wrap">
                <TrendingCard product={products} />
                <TrendingCard product={products} />
                <TrendingCard product={products} />
                <TrendingCard product={products} />
                <div className="trending-card-discount d-flex">
                    <TrendingcardDiscount img = {Clockimg}/>
                    <TrendingcardDiscount img = {Chairimg}/>
                </div>
                <div className="executive">
                    {/* 3 Div komponent */}
                </div>
            </div>
        </section>
    )
}

export default TrendingProducts