import React from "react";
import { useRouterValue } from '../main/Context';

export default function Footer(props) {
    const routerValue = useRouterValue();
    
    return (
    <>
    <div className="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-4 col-md-6 footer-about">
                    <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
                        <a href="/" className="navbar-brand">
                            <h1 className="m-0 text-white fst-italic"><span className="text-danger">// </span>NODOT</h1>
                        </a>
                        <p className="mt-3 mb-4">Nosso objetivo é ajudar outras empresas a se estabelecerem online e a alcançarem seus objetivos comerciais através da internet.</p>
                    </div>
                </div>
                <div className="col-lg-8 col-md-6">
                    <div className="row gx-5">
                        <div className="col-lg-4 col-md-12 pt-5 mb-5">
                            <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 className="text-light mb-0">Entrar em contato</h3>
                            </div>
                            <div className="d-flex mb-2">
                                <i className="bi bi-geo-alt text-primary me-2"></i>
                                <p className="mb-0">Luziânia - GO</p>
                            </div>
                            <div className="d-flex mb-2">
                                <i className="bi bi-envelope-open text-primary me-2"></i>
                                <p className="mb-0">nodotenterprise@outlook.com</p>
                            </div>
                            <div className="d-flex mb-2">
                                <i className="bi bi-telephone text-primary me-2"></i>
                                <p className="mb-0">(61) 9 8303-5827</p>
                            </div>
                            <div className="d-flex mt-4">
                                {/* <!-- <a className="btn btn-primary btn-square me-2" href="http://twitter.com"><i className="fab fa-twitter fw-normal"></i></a> -->
                                <!-- <a className="btn btn-primary btn-square me-2" href="https://facebook.com"><i className="fab fa-facebook-f fw-normal"></i></a> --> */}
                                <a className="btn btn-primary btn-square me-2" href="https://www.linkedin.com/company/nodotcompany"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                <a className="btn btn-primary btn-square me-2" href="https://instagram.com"><i className="fab fa-instagram fw-normal"></i></a>
                                {routerValue ?  <a className="btn btn-success border border-light btn-square" href="/blog-creation"><i className="bi bi-gear"></i></a> :
                                <a className="btn btn-success border border-light" href="/signin">Entrar</a>
                                }
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                            <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 className="text-light mb-0">Links Rápidos</h3>
                            </div>
                            <div className="link-animated d-flex flex-column justify-content-start">
                                <a className="text-light mb-2" href="/"><i className="bi bi-arrow-right text-primary me-2"></i>Início</a>
                                <a className="text-light mb-2" href="service"><i className="bi bi-arrow-right text-primary me-2"></i>Serviços</a>
                                <a className="text-light mb-2" href="blog"><i className="bi bi-arrow-right text-primary me-2"></i>Blog mais recente</a>
                                <a className="text-light" href="contact"><i className="bi bi-arrow-right text-primary me-2"></i>Contate-nos</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                            <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 className="text-light mb-0">Serviços</h3>
                            </div>
                            <div className="link-animated d-flex flex-column justify-content-start">
                                <a className="text-light mb-2" href="pentest"><i className="bi bi-arrow-right text-primary me-2"></i>Pentest</a>
                                <a className="text-light mb-2" href="auto-task"><i className="bi bi-arrow-right text-primary me-2"></i>Automação de Tarefas</a>
                                <a className="text-light mb-2" href="web-design"><i className="bi bi-arrow-right text-primary me-2"></i>Desenvolvimento web</a>
                                <a className="text-light" href="environment"><i className="bi bi-arrow-right text-primary me-2"></i>Infraestrutura</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid text-white" style={{background: '#061429'}}>
        <div className="container text-center">
            <div className="row justify-content-end">
                <div className="col-lg-8 col-md-6">
                    <div className="d-flex align-items-center justify-content-center" style={{height: '75px'}}>
                        <p className="mb-0">&copy; <a className="text-white border-bottom" href="/">NODOT</a>. All Rights Reserved. 
						Designed by <a className="text-white border-bottom" href="https://htmlcodex.com">HTML Codex</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}