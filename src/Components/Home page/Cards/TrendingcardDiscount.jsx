import React from 'react'

const TrendingcardDiscount = ( {img} ) => {
    return (
        <div className='discountCard'>
            <p>23% off in all products</p>
            <a className='body-main-color' href="#">Shop Now</a>
            <img src={img} alt="" />
        </div>
    )
}

export default TrendingcardDiscount