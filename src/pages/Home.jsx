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
            <Service style="dark"/>
            <Quote/>
            <IndexBlog/>
            <h3 className="d-flex justify-content-center text-primary">PROFISSIONAIS RECONHECIDOS </h3>

            <div className="d-flex justify-content-center" data-wow-delay="0.1s">
                <div className="pb-5 mb-5 ">
                    <img className="mt-3" src={INSS} alt="" style={{ minHeight: '120px', width: '200px' }}/>
                </div>
            </div>
            <Footer/>
        </>
    )
}