import React from 'react';
import Slider from 'react-slick';  

const Carousel = () => {
  const carouselHdrPhotos = [
    "https://www.designnbuy.com/wp-content/uploads/2023/09/product-designer-banner-image-1024x392-1.jpg",
    "https://cleverharvey.com/wp-content/uploads/2022/07/Blog-Creatives_5-07-1024x492.jpg",
    "https://www.designnbuy.com/wp-content/uploads/2023/09/product-designer-banner-image-1024x392-1.jpg",
    "https://cleverharvey.com/wp-content/uploads/2022/07/Blog-Creatives_5-07-1024x492.jpg"
  ];

  // Slick carousel settings
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500,  
    fade: true,  
    cssEase: 'linear',  
    autoplay: true,  
    autoplaySpeed: 2000,  
  };

  return (
    <section className="section-carousel mb-5">
      <div className="carousel mb-5">
        <Slider {...settings}>
          {carouselHdrPhotos.map((photo, index) => (
            <div key={index}>
              <img
                className="carousel-photo"
                src={photo}
                alt={`Slide ${index + 1}`}
                style={{ width: "80%", margin: "auto", borderRadius: "10px" }} 
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
