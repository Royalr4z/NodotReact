import React from "react"
import Header from "../templates/Header"
import Footer from "../templates/Footer"
import { Helmet, HelmetProvider } from 'react-helmet-async'
import ContactUs from "../templates/ContactUs"

export default function PageContact() {
    return (
        <>  
            <HelmetProvider>
                <Helmet>
                    <title>Entre em Contato | NODOT</title>
                </Helmet>
            </HelmetProvider>
            <Header title="CONTATE-NOS" caption="Contato" href="contact"/>
            <ContactUs/>
            <Footer/>
        </>
    )
}