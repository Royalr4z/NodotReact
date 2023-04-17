import React from "react"
import Header from "../templates/Header"
import Footer from "../templates/Footer"
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Quote from "../templates/Quote"

export default function PageWebDevelopment() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Desenvolvimento web | NODOT</title>
                </Helmet>
            </HelmetProvider>
            <Header title="DESENVOLVIMENTO WEB" caption="Serviços" href="service" />
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto container" style={{maxWidth: '600px'}}>
                <h5 className="fw-bold text-primary text-uppercase" style={{textAlign: 'justify'}}> Desenvolvimento web é o processo de criação de sites, aplicativos e sistemas da web. </h5>
            </div>
            <div>
                <h5 className="position-relative pb-3 mb-5 mx-auto container" style={{textAlign: 'justify', maxWidth: '900px'}}>
                    Manter seu site atualizado com as tecnologias mais recentes é essencial para oferecer a melhor experiência possível aos seus usuários e manter-se competitivo em um mercado em constante evolução.
                </h5>
            </div>
            <Quote />
            <Footer />
        </>
    )
}