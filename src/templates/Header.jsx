import React from "react";

export default function Header(props) {
    return(
    <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
            <a href="/" className="navbar-brand p-0">
                <h1 className="m-0 fst-italic"><span className="text-danger">// </span>NODOT</h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <a href="/" className="nav-item nav-link">Início</a>
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

        <div className="container-fluid bg-primary py-5 bg-header" style={{marginBottom: '90px'}}>
            <div className="row py-5">
                <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                    <h1 className="display-4 text-white animated zoomIn">{props.title}</h1>
                    <a href="/" className="h5 text-white">Início</a>
                    <i className="far fa-circle text-white px-2"></i>
                    <a href={props.href} className="h5 text-white">{props.caption}</a>
                </div>
            </div>
        </div>
    </div>
    )
}