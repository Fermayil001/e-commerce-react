import React from 'react'
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FeaturedCard from './Cards/FeaturedCard';

function Featured( { products } ) {
    
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="mt-5 featured-products" style={{ marginTop: '100px' }}>
      <div className="main-width mx-auto">
        <h3 className="text-center fw-700 title-color mb-5 fs-1">Featured Products</h3>
        <div className="featuredCards pb-5">
          <Slider {...settings}>
            {products.map((product , index) => (
              <FeaturedCard className = "featuredCard my-4" key={index} indexs={index} product={product} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
    
}

export default Featured