import React from 'react'
import RowLinks from '../General-components/RowLinks'
import Footer from '../Home page/Footer'
import NotFoundPic from '../../assets/img/Notfound404/NotFound.png'

const NotFound = () => {

  const rowData = '404 Not Found'

  const handleClick = () => {
    window.location.href = '/'
  }

  return (
    <div className='not-found text-center'>
      <RowLinks data={rowData} />
      <div className='not-found-pic mx-auto main-width'>
        <img src={NotFoundPic} alt='Not Found' />
        <button onClick={handleClick} style={{ borderRadius: "2px" }} className="btn btn-dark border-none button-hover-color body-main-bg-color">Back To Home</button>
      </div>

      <Footer />
    </div>
  )
}

export default NotFound