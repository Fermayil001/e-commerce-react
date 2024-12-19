import React from 'react'
import RowLinks from './General-components/RowLinks'
import Row from './Home page/Row'
import Footer from './Home page/Footer'
import SlotsSignIn from './Login Page/Login'


const LoginPg = ({setIsSuccessLogin}) => {
    const rowData = 'My Account'


    return (
        <>
            <RowLinks data={rowData} />
            <SlotsSignIn  setIsSuccessLogin = {setIsSuccessLogin}/>
            <Row />
            <Footer />
        </>
    )
}

export default LoginPg