import React from 'react'

const TrendingCard = ({ product }) => {


    return (

        <div className='trending-card text-center'>
            <img src="https://fakeimg.pl/247x244/F5F6F8/909090?font=bebas" alt="product-image" />
            <h5 className='pt-3'>Cantilever chair</h5>
            <p>$26.00  <span>$42.00</span></p>
        </div>
    )
}

export default TrendingCard