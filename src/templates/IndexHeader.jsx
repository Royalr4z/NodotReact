import React from "react";
import Home1 from '../img/home1.png';
import Home2 from '../img/home2.png';

export default function IndexHeader() {
    return (
    <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
            <a href="/" className="navbar-brand p-0">
                <h1 className="m-0 fst-italic text-light"><span className="text-danger">// </span>NODOT</h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <a href="/" className="nav-item nav-link active">Início</a>
                    <a href="/#about-us" className="nav-item nav-link">Sobre</a>
                    <a href="service" className="nav-item nav-link">Serviços</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blog</a>
                        <div className="dropdown-menu m-0">
                            <a href="blog" className="dropdown-item">Blog Recente</a>
                        </div>
                    </div>
                </div>
                <a href="contact" className="btn btn-primary py-2 px-4 ms-3">Entre em contato</a>
            </div>
        </nav>

        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" style={{minHeight: '100vh', maxHeight: '100vh'}} src={Home1} alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: '100%'}}>
                            <h5 className="text-white text-uppercase mb-3 animated slideInDown">INFRAESTRUTURA & SEGURANÇA</h5>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">NODOT</h1>
                            <a href="#about-us" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Sobre Nós</a>
                            <a href="contact" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contate-nos </a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" style={{minHeight: '100vh', maxHeight: '100vh'}} src={Home2} alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: '100%'}}>
                            <h2 className="display-1 text-white mb-md-4 animated zoomIn"></h2>
                            <h5 className="text-white text-uppercase mb-3 animated slideInDown container">oferecemos serviços de tecnologia excepcionais para ajudá-lo a alcançar seus objetivos de negócios com segurança.</h5>
                            </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    )
}