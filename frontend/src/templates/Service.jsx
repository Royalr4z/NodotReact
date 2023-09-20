import React from "react";

export default function Service(props) {
    return (
    <div className={props.theme === 'dark'?
        'container-fluid py-5 wow fadeInUp bg-dark' :
        'container-fluid py-5 wow fadeInUp'} data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: '600px'}}>
                <h5 className="fw-bold text-primary text-uppercase">Serviços</h5>
                <h1 className={props.theme === 'dark'?
                    'mb-0 text-light' :
                    'mb-0 text-dark'}>
                Soluções de TI personalizadas para o seu negócio de sucesso</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="fa fa-shield-alt text-white"></i>
                        </div>
                        <h4 className="mb-3">Pentest</h4>
                        <p className="m-0">Utilizamos as melhores práticas e ferramentas para identificar e corrigir vulnerabilidades antes que elas sejam exploradas.</p>
                        <a className="btn btn-lg btn-primary rounded" href="pentest">
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="fa fa-chart-pie text-white"></i>
                        </div>
                        <h4 className="mb-3">Automação</h4>
                        <p className="m-0">Nossos especialistas usam scripts e ferramentas para automatizar tarefas repetitivas e complexas.</p>
                        <a className="btn btn-lg btn-primary rounded" href="auto-task">
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="fa fa-code text-white"></i>
                        </div>
                        <h4 className="mb-3">Desenvolvimento Web</h4>
                        <p className="m-0">Oferecemos soluções de design e desenvolvimento web personalizadas para atender às necessidades únicas de sua empresa.</p>
                        <a className="btn btn-lg btn-primary rounded" href="web-development">
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="bi bi-layers-fill text-white"></i>
                        </div>
                        <h4 className="mb-3">Infraestrutura</h4>
                        <p className="m-0">Construindo a base sólida para o crescimento do seu negócio - Nós somos a solução de infraestrutura para pequenas e médias empresas.</p>
                        <a className="btn btn-lg btn-primary rounded" href="infrastructure">
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                    <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-start text-center p-5">
                        <i className="bi bi-telephone-fill d-flex text-white display-6 mb-2"></i>
                        <h3 className="text-white mb-3 mt-2">Ligue-nos para cotação</h3>
                        <p className="text-white mb-3">Não perca mais tempo, entre em contato conosco agora mesmo!</p>
                        <h5 className="text-white mb-0">(61) 9 8303-5827</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                    <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-start text-center p-5">
                        <i className="bi bi-envelope-fill d-flex text-white display-6 mb-2"></i>       
                        <h3 className="text-white mb-3">Entre em contato pelo E-mail</h3>
                        <p className="text-white mb-3">Estamos à disposição para responder suas perguntas caso você precise.</p>
                        <h5 className="text-white mb-0">nodotenterprise@outlook.com</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}