import React from "react"
import Header from "../templates/Header"
import Footer from "../templates/Footer"
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Login from "../templates/Login"

export default function PageSignin() {
    return (
        <>  
            <HelmetProvider>
                <Helmet>
                    <title>Faça seu Login | NODOT</title>
                </Helmet>
            </HelmetProvider>
            <Header title="LOGIN" caption="Blog" href="Blog"/>
            <Login/>
            <Footer/>
        </>
    )
}