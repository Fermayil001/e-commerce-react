import React from 'react';
import Slider from 'react-slick';  // react-slick bileşenini import ediyoruz

const Carousel = () => {
  // Slider için görseller
  const carouselHdrPhotos = [
    "https://www.designnbuy.com/wp-content/uploads/2023/09/product-designer-banner-image-1024x392-1.jpg",
    "https://cleverharvey.com/wp-content/uploads/2022/07/Blog-Creatives_5-07-1024x492.jpg",
    "https://www.designnbuy.com/wp-content/uploads/2023/09/product-designer-banner-image-1024x392-1.jpg",
    "https://cleverharvey.com/wp-content/uploads/2022/07/Blog-Creatives_5-07-1024x492.jpg"
  ];

  // Slick carousel ayarları
  const settings = {
    dots: true,  // Dots (noktalı navigasyon) aktif
    infinite: true,  // Sonsuz kaydırma
    speed: 500,  // Kaydırma hızı (ms)
    fade: true,  // Fade geçiş efekti
    cssEase: 'linear',  // CSS geçiş efekti
    autoplay: true,  // Otomatik oynatma
    autoplaySpeed: 2000,  // Otomatik geçiş süresi (2 saniye)
  };

  return (
    <section className="section-carousel mb-5">
      <div className="carousel mb-5">
        {/* Slick Slider bileşeni ile carousel oluşturuluyor */}
        <Slider {...settings}>
          {carouselHdrPhotos.map((photo, index) => (
            <div key={index}>
              <img
                className="carousel-photo"
                src={photo}
                alt={`Slide ${index + 1}`}
                style={{ width: "80%", margin: "auto", borderRadius: "10px" }}  // Resim stilizasyonu
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
