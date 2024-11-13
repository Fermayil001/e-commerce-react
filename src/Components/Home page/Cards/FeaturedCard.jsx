import React from 'react'
import Slider from 'react-slick'

const FeaturedCard = () => {


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


    return (
        <div className="featuredCard  my-4">
            <div className="hover-links-area">
                <div className="hover-link"><a href="#"><i className="bi bi-cart2"></i></a></div>
                <div className="hover-link fs-14"><i className="bi bi-heart"></i></div>
                <div className="hover-link fs-14"><i className="bi bi-zoom-in"></i></div>
            </div>
            <div className='slider-container '>
                <Slider {...settings}>
                    <div className="featuredCardHeader">
                        <img src="https://s3-alpha-sig.figma.com/img/1ade/62f0/6db0a7630b347e6423288fc09447f1a8?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=THweoBcmJuJlAMrHhtle1DTgjv7TsGbLOaK91IDZP4VFQOR495GRr5uLKdw2nkZRzPblZaXgnIu76kGFim7sQGTobpMm6F8IUdFaRbc2McFhB1ENwvzODyUJZwNYGLp4oZY5jZ463LDkG0E5RodRX9au4RQcl7lOG8Mh3UG8qgXGxhQvq~nbRPeg1EixXNBfKQszhuA-1YI7vjinl6HtehsPZqBZ7di-VbKTag3IVdy2tfyiH2JBJdzvYZBZEiiZo0NGcu9lQrrSsfe43D-PhNsTs3s48Tc067n-fmSdCEau69xqpHBMAX1tndexvfGQ7zMFhVV8XiyPvtITr1jy3w__" alt="" />
                    </div>
                    <div className="featuredCardHeader">
                        <img src="https://s3-alpha-sig.figma.com/img/1ade/62f0/6db0a7630b347e6423288fc09447f1a8?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=THweoBcmJuJlAMrHhtle1DTgjv7TsGbLOaK91IDZP4VFQOR495GRr5uLKdw2nkZRzPblZaXgnIu76kGFim7sQGTobpMm6F8IUdFaRbc2McFhB1ENwvzODyUJZwNYGLp4oZY5jZ463LDkG0E5RodRX9au4RQcl7lOG8Mh3UG8qgXGxhQvq~nbRPeg1EixXNBfKQszhuA-1YI7vjinl6HtehsPZqBZ7di-VbKTag3IVdy2tfyiH2JBJdzvYZBZEiiZo0NGcu9lQrrSsfe43D-PhNsTs3s48Tc067n-fmSdCEau69xqpHBMAX1tndexvfGQ7zMFhVV8XiyPvtITr1jy3w__" alt="" />
                        {/* <h6 className="card-title text-center">Cantilever chair</h6> */}
                    </div>
                    <div className="featuredCardHeader">
                        <img src="https://s3-alpha-sig.figma.com/img/1ade/62f0/6db0a7630b347e6423288fc09447f1a8?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=THweoBcmJuJlAMrHhtle1DTgjv7TsGbLOaK91IDZP4VFQOR495GRr5uLKdw2nkZRzPblZaXgnIu76kGFim7sQGTobpMm6F8IUdFaRbc2McFhB1ENwvzODyUJZwNYGLp4oZY5jZ463LDkG0E5RodRX9au4RQcl7lOG8Mh3UG8qgXGxhQvq~nbRPeg1EixXNBfKQszhuA-1YI7vjinl6HtehsPZqBZ7di-VbKTag3IVdy2tfyiH2JBJdzvYZBZEiiZo0NGcu9lQrrSsfe43D-PhNsTs3s48Tc067n-fmSdCEau69xqpHBMAX1tndexvfGQ7zMFhVV8XiyPvtITr1jy3w__" alt="" />
                        {/* <h6 className="card-title text-center">Cantilever chair</h6> */}
                    </div>
                </Slider>
            </div>
            <div className="text-container mt-5 d-flex flex-column">
                <h5 className="card-title text-center body-main-color">Cantilever chair</h5>
                <p className="card-code text-center m-0">Code - Y523201</p>
                <p className="card-price text-center">$42.00</p>
            </div>

        </div>


    )
}

export default FeaturedCard
{/* <div className="featuredCardHeader">
    <img style={{width: "150px", height: "150px"}} src="https://s3-alpha-sig.figma.com/img/1ade/62f0/6db0a7630b347e6423288fc09447f1a8?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=THweoBcmJuJlAMrHhtle1DTgjv7TsGbLOaK91IDZP4VFQOR495GRr5uLKdw2nkZRzPblZaXgnIu76kGFim7sQGTobpMm6F8IUdFaRbc2McFhB1ENwvzODyUJZwNYGLp4oZY5jZ463LDkG0E5RodRX9au4RQcl7lOG8Mh3UG8qgXGxhQvq~nbRPeg1EixXNBfKQszhuA-1YI7vjinl6HtehsPZqBZ7di-VbKTag3IVdy2tfyiH2JBJdzvYZBZEiiZo0NGcu9lQrrSsfe43D-PhNsTs3s48Tc067n-fmSdCEau69xqpHBMAX1tndexvfGQ7zMFhVV8XiyPvtITr1jy3w__" alt="" />
</div>
<div className="featuredCardText">
    <p>SA</p>
    <p>SA</p>
</div> */}