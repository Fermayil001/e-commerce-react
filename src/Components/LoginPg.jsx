import React from 'react'
import RowLinks from './General-components/RowLinks'
import Row from './Home page/Row'
import Footer from './Home page/Footer'
import SlotsSignIn from './Login Page/Login'

const LoginPg = () => {

    const rowData = 'My Account'



    return (
        <>
            <RowLinks data={rowData} />
            <SlotsSignIn/>
            <Row/>
            <Footer/>
        </>
    )
}

export default LoginPg