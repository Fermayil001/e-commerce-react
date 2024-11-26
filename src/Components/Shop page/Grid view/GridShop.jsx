import React from 'react'
import FeaturedCard from '../../Home page/Cards/FeaturedCard'
import './GridShop.css'

const GridShop = ({ products }) => {
    return (
        <div className="grid-products-container  main-width mx-auto">
            <div className='grid-product d-flex flex-wrap'>
                {products.map((product, index) => (
                    <FeaturedCard
                        className="featuredCard grid-products my-4"
                        key={index}
                        indexs={index
                        } product={product}
                    />
                ))}
            </div>
        </div>
    )
}

export default GridShop