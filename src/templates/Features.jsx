import React from "react";
import imgFeature from '../img/feature.jpg'
import { BsFillAwardFill, BsPeopleFill, BsFillTelephoneFill } from "react-icons/bs";
import { FaCubes } from 'react-icons/fa';

export default function Features() {
    return (
        <>
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: '600px'}}>
                        <h5 className="fw-bold text-primary text-uppercase">Porque Nos Escolher</h5>
                        <h1 className="mb-0">Estamos aqui para fazer seu negócio crescer exponencialmente</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4">
                            <div className="row g-5">
                                <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
                                    <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                                        <i className="text-white"><FaCubes/></i>
                                    </div>
                                    <h4>Melhor da indústria</h4>
                                    <p className="mb-0">Se destacamos pela equipe altamente capacitada e compromisso com o sucesso de nossos clientes.</p>
                                </div>
                                <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
                                    <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                                        <i className="text-white"><BsFillAwardFill/></i>
                                    </div>
                                    <h4>Dedicado</h4>
                                    <p className="mb-0">Dedicados em proporcionar soluções excepcionais e satisfação aos nossos clientes.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4  wow zoomIn" data-wow-delay="0.9s" style={{minHeight: '350px'}}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s" src={imgFeature} style={{objectFit: 'cover'}} />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="row g-5">
                                <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
                                    <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                                        <i className="text-white"><BsPeopleFill/></i>
                                    </div>
                                    <h4>Pessoal profissional</h4>
                                    <p className="mb-0">Nossa equipe altamente capacitada e comprometida.</p>
                                </div>
                                <div className="col-12 wow zoomIn" data-wow-delay="0.8s">
                                    <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                                        <i className="text-white"><BsFillTelephoneFill/></i>
                                    </div>
                                    <h4>Suporte 24/7</h4>
                                    <p className="mb-0">Estamos sempre disponíveis para atender às necessidades de nossos clientes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}