import React from 'react'

const OffersCard = ({ img }) => {

    return (
        <div className="offer-card">
            <img src={img} alt="" />
            <div className="offer-card-text">
                <h6>24/7 Support</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
        </div>
    )
}

export default OffersCard