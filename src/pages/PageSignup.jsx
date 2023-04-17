import React from "react"
import Header from "../templates/Header"
import Footer from "../templates/Footer"
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Register from "../templates/Register"

export default function PageSignup() {
    return (
        <>  
            <HelmetProvider>
                <Helmet>
                    <title>Faça seu Cadastro | NODOT</title>
                </Helmet>
            </HelmetProvider>
            <Header title="CADASTRO" caption="Blog" href="Blog"/>
            <Register/>
            <Footer/>
        </>
    )
}