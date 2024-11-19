import React from 'react'
import Support24Hours from '../../assets/img/Offers/24-hours-support 1.png'
import PremiumQuality from '../../assets/img/Offers/premium-quality 1.png'
import CashBack from '../../assets/img/Offers/cashback 1.png'
import FreeDelivery from '../../assets/img/Offers/free-delivery 1.png'
import OffersCard from './Cards/OffersCard'
export const Offers = () => {
    return (
        <section className='offers'>
            <div className="main-width mx-auto">
                <h3 className="text-center fw-700 title-color mb-5 fs-1">What Shopex Offer!</h3>
                <div className="offers-cards d-flex">
                    <OffersCard img={FreeDelivery} />
                    <OffersCard img={CashBack} />
                    <OffersCard img={PremiumQuality} />
                    <OffersCard img={Support24Hours} />
                </div>
            </div>
        </section>
    )
}

export default Offers