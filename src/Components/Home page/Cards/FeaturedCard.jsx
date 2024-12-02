import React from 'react'
import Slider from 'react-slick'
import './FeaturedCard.css'
import { useState } from 'react'

const FeaturedCard = ({ product  , className }) => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: false,
        speed: 500,
        cssEase: "linear",
        slidesToScroll: 1,
        arrows: false
    }

   /*  ff = document.querySelector('.featuredCard')

    const [isGrid, setIsgrid] = useState(false)

    setIsgrid(className.includes('grid-products'))

    isGrid ? ff?.style = 'featuredCard:hover = ""' : null */


    return (
        <>
            <div className= {className}> {/* featuredCard grid-products my-4 */}
                <div className="hover-links-area">
                    <div className="hover-link"><a href="#"><i className="bi bi-cart2"></i></a></div>
                    <div className="hover-link fs-14"><i className="bi bi-heart"></i></div>
                    <div className="hover-link fs-14"><i className="bi bi-zoom-in"></i></div>
                </div>
                <div className='slider-container '>
                    <Slider {...settings}>
                        {product.img && product.img[0] && Object.values(product.img[0]).map((image, idx) => (
                            <div key={idx} className="featuredCardHeader">
                                <img src={image} alt={`product-image-${idx}`} />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="text-container mt-5 d-flex flex-column">
                    <h5 className="card-title text-center body-main-color">Cantilever chair</h5>
                    <p className="card-code text-center m-0">Code - Y523201</p>
                    <p className="card-price text-center">$42.00</p>
                </div>
            </div>
        </>

    )
}

export default FeaturedCard
