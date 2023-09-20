import React from "react"
import Header from "../templates/Header"
import Footer from "../templates/Footer"
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Service from "../templates/Service"

export default function PageService() {
    return (
        <>  
            <HelmetProvider>
                <Helmet>
                    <title>Serviços | NODOT</title>
                </Helmet>
            </HelmetProvider>
            <Header title="Serviços" caption="Serviços" href="service"/>
            <Service/>
            <Footer/>
        </>
    )
}