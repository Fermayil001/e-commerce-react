import React from 'react'
import RowLinks from './General-components/RowLinks'
import CredentialsSignInPage from './Login Page/Login'
import Row from './Home page/Row'
import Footer from './Home page/Footer'

const LoginPg = () => {

    const rowData = 'My Account'



    return (
        <>
            <RowLinks data={rowData} />
            <CredentialsSignInPage/>
            <Row/>
            <Footer/>
        </>
    )
}

export default LoginPg