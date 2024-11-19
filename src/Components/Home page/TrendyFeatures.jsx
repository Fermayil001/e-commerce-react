import React from 'react'
import Trendyftrimage from '../../assets/img/Trendyftr/Group 153.png'

const TrendyFeatures = () => {
    return (
        <div>
            <section className='trendy-features mt-5'>
                <div className="trendftr d-flex main-width mx-auto py-4">
                    <div className="trendftrimg">
                        <img src={Trendyftrimage} alt="" />
                    </div>
                    <div className="trendftrtxt d-flex flex-column justify-content-evenly p-5">
                        <div className="trendftrtitle">
                            <h3 className='fw-bold'>Unique Features Of leatest & Trending Poducts</h3>
                        </div>
                        <div className="trendftrbody">
                            <ul>
                                <li>All frames constructed with hardwood solids and laminates</li>
                                <li>Reinforced with double wood dowels, glue, screw - nails corner
                                    blocks and machine nails</li>
                                <li>Arms, backs and seats are structurally reinforced</li>
                            </ul>
                        </div>
                        <div className="trendftrbtns">
                            <button style={{borderRadius: "2px"}} className="btn btn-dark border-none button-hover-color body-main-bg-color">Add To Card </button>
                            <div className="trendftrprice">
                                <p className='m-0'><a href="#">B&B Italian Sofa</a></p>
                                <span>$32</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TrendyFeatures