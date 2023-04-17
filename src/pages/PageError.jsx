import React from "react"
import Header from "../templates/Header"
import Footer from "../templates/Footer"
import Error from "../templates/Error"
import { Helmet, HelmetProvider } from 'react-helmet-async'

export default function PageError() {

    const status = 404

    return (
        <>  
            <HelmetProvider>
                <Helmet>
                    <title>{`Error ${status}`} | NODOT</title>
                </Helmet>
            </HelmetProvider>
            <Header title={`Error ${status}`} caption="Contato" href="contact"/>
            <div className="mx-4">
                <Error status={status}/>
            </div>
            <Footer/>
        </>
    )
}