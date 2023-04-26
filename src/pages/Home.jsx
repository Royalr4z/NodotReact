import React from "react";
import IndexHeader from "../templates/IndexHeader";
import About from "../templates/About";
import Features from "../templates/Features";
import Service from "../templates/Service";
import Quote from "../templates/Quote";
import IndexBlog from "../templates/IndexBlog";
import Footer from "../templates/Footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';

import INSS from'../img/INSS.png';
import IBSEC from '../img/IBSEC.jpg'
import DCPT from '../img/DCPT.png'

export default function Home() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>NODOT</title>
                </Helmet>
            </HelmetProvider>
            <IndexHeader/>
            <About/>
            <Features/>
            <Service theme="dark"/>
            <Quote/>
            <IndexBlog/>
            <h3 className="d-flex justify-content-center text-primary">PROFISSIONAIS RECONHECIDOS </h3>

            <div className="d-flex justify-content-center align-items-center mb-5 mt-4" data-wow-delay="0.1s">
                <div className="pb-5">
                    <img className="mx-4" src={DCPT} alt="DCPT-logo" style={{ minHeight: '100px', width: '250px' }}/>
                </div>
                <div className="pb-5">
                    <img className="mx-4" src={INSS} alt="INSS-logo" style={{ minHeight: '120px', width: '200px' }}/>
                </div>
                <div className="pb-5">
                    <img className="mx-4" src={IBSEC} alt="IBSEC-logo" style={{ minHeight: '120px', width: '200px' }}/>
                </div>
            </div>
            <Footer/>
        </>
    )
}