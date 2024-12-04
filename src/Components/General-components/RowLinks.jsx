import React from 'react'
import { Link } from 'react-router-dom'

const RowLinks = ({ data }) => {
    return (
        <section className='row-links-section'>
            <div className='main-width mx-auto row-links-container'> 
                <h3>{data}</h3>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/pages'}>. Pages</Link>
                    </li>
                    <li className='body-main-color'>. {data}</li>
                </ul>
                
            </div>
        </section>
    )
}

export default RowLinks