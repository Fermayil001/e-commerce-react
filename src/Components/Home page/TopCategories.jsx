import React from 'react'
import Slider from 'react-slick'

const TopCategories = ( { products } ) => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    autoplay: false,
    speed: 500,
    cssEase: "linear",
    slidesToScroll: 4,
    arrows: false
  }


  return (
    <section className='top-categories-section'>
        <div className="topCategoriesContainer main-width mx-auto my-5">
            <h3 className="title-color text-center fs-2 fw-700">Top Categories</h3>
            <div className="top-categories-cards">
               <Slider {...settings}>
                 {products.map((product, index) => (
                   <div key={index} className="top-categories-card">
                     <img src={product.img[0].default} alt={product.name} />
                     <h5 className='text-center mt-3'>{product.name}</h5>
                     <p className='text-center'>${product.price}</p>
                   </div>
                 ))}
               </Slider>
            </div>
        </div>
    </section>
  )
}

export default TopCategories