import React from "react";
import { BsCheck, BsFillTelephoneFill, BsEnvelopeFill } from "react-icons/bs";
import imgAbout from '../img/about.jpg'

export default function About() {
    return (
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s" id="about-us">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-7">
                    <div className="section-title position-relative pb-3 mb-5">
                        <h5 className="fw-bold text-primary text-uppercase">Sobre nós</h5>
                        <h1 className="mb-0">A melhor solução de TI </h1>
                    </div>
                    <p className="mb-4">Com uma equipe altamente capacitada, soluções inovadoras e personalizadas, e comprometimento com a excelência, somos a melhor escolha em tecnologia, oferecendo aos nossos clientes uma vantagem competitiva no mercado.</p>
                    <div className="row g-0 mb-3">
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                            <h5 className="mb-3"><i className="text-primary me-3"><BsCheck/></i>Qualificado</h5>
                            <h5 className="mb-3"><i className="text-primary me-3"><BsCheck/></i>Pessoal profissional</h5>
                        </div>
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                            <h5 className="mb-3"><i className="text-primary me-3"><BsCheck/></i>Suporte 24/7</h5>
                            <h5 className="mb-3"><i className="text-primary me-3"><BsCheck/></i>Preços justos</h5>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
                        <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: '60px', height: '60px'}}>
                            <i className="text-white"><BsFillTelephoneFill/></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="mb-2">Ligue para tirar qualquer dúvida</h5>
                            <h4 className="text-primary mb-0">(61) 9 8303-5827</h4>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
                        <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: '60px', height: '60px'}}>
                            <i className="text-white"><BsEnvelopeFill/></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="mb-2">E-mail</h5>
                            <h4 className="text-primary mb-0">nodotenterprise@outlook.com</h4>
                        </div>
                    </div>
                    <a href="#quote" className="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Solicite um Orçamento</a>
                </div>
                <div className="col-lg-5" style={{minHeight: '500px'}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src={imgAbout} style={{objectFit: 'cover'}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}