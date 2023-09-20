import React, { useState } from "react";
import { BaseUrl } from "../BaseUrl";
import axios from "axios";

export default function Quote() {

    const [msgError, setMsgError] = useState({});
    const [boxSuccess, setBoxSuccess] = useState(true);
    const [boxError, setBoxError] = useState(true);

    const registerData = async () =>{
        const dados = {
            name: document.querySelector('#typeName').value,
            email: document.querySelector('#typeEmail').value,
            service: document.querySelector('#typeService').value,
            message: document.querySelector('#typeMessage').value
        };

        const options = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        setBoxError(true)
        setBoxSuccess(true)
    
        try {
            const response = await axios.post(`${BaseUrl}/FreeQuote`, dados, options);
            if(response.status === 204){
                setBoxError(true)
                setBoxSuccess(false)

                document.querySelector('#typeName').value = ''
                document.querySelector('#typeEmail').value = ''
                document.querySelector('#typeService').value = ''
                document.querySelector('#typeMessage').value = ''

            }
        } catch (error) {
            setBoxError(false)
            
            setMsgError({
                msg: error.response.data,
                status: error.response.status,
            })
        }
    }

    return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s" id="quote">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-7">
                    <div className="section-title position-relative pb-3 mb-5">
                        <h5 className="fw-bold text-primary text-uppercase">Solicite um orçamento</h5>
                        <h1 className="mb-0">Precisa de um orçamento gratuito? Sinta-se à vontade para entrar em contato conosco</h1>
                    </div>
                    <div className="row gx-3">
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                            <h5 className="mb-4"><i className="fa fa-reply text-primary me-3"></i>Resposta dentro de 24 horas</h5>
                        </div>
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                            <h5 className="mb-4"><i className="fa fa-phone-alt text-primary me-3"></i>suporte telefônico 24h</h5>
                        </div>
                    </div>
                    <p className="mb-4" style={{textAlign: 'justify'}}>Faça um orçamento conosco e descubra por que somos a escolha certa para suas necessidades: oferecemos produtos e serviços de alta qualidade, equipe altamente capacitada e dedicada, preços competitivos e suporte inigualável. Não perca a oportunidade de ter o melhor para o seu negócio.</p>
                    <div className="d-flex align-items-center mt-2 wow zoomIn" data-wow-delay="0.6s">
                        <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: '60px', height: '60px'}}>
                            <i className="fa fa-phone-alt text-white"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="mb-2">Ligue para tirar qualquer dúvida</h5>
                            <h4 className="text-primary mb-0">(61) 9 8303-5827</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn" data-wow-delay="0.9s">
                        <form>

                            {/* <!-- Success Start --> */}
                            <div className={boxSuccess ? 'd-none' : 'd-flex justify-content-center py-1 my-2 bg-success text-light'} 
                                style={{borderRadius: '5px'}}>
                                <i className="bi bi-check"></i>
                                <div>Mensagem enviada com sucesso!</div>
                            </div>
                            {/* <!-- Success End --> */}

                            {/* <!-- Error Start --> */}
                            <div className={boxError ? 'd-none' : 'd-flex justify-content-center text-danger py-1 my-2 bg-danger text-light'}
                                style={{borderRadius: '5px'}}>
                                <i className="bi bi-exclamation-triangle px-1"></i>
                                <div>{msgError.msg}</div>
                            </div>
                            {/* <!-- Error End --> */}

                            <div className="row g-3">
                                <div className="col-xl-12">
                                    <input id="typeName" type="text" className="form-control bg-light border-0" placeholder="Seu Nome" style={{height: '55px'}}/>
                                </div>
                                <div className="col-12">
                                    <input id="typeEmail" type="email" className="form-control bg-light border-0" placeholder="Seu E-mail" style={{height: '55px'}}/>
                                </div>
                                <div className="col-12">
                                    <select id="typeService" className="form-select bg-light border-0" style={{height: '55px'}}>
                                        <option defaultValue value="">Selecione um serviço</option>
                                        <option value="Pentest">Pentest</option>
                                        <option value="Automação de Tarefas">Automação de Tarefas</option>
                                        <option value="Desenvolvimento web">Desenvolvimento web</option>
                                        <option value="Infraestrutura">Infraestrutura</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <textarea id="typeMessage" className="form-control bg-light border-0" rows="3" placeholder="Mensagem"></textarea>
                                </div>
                                <div className="col-12">
                                    <button onClick={registerData} className="btn btn-dark w-100 py-3" type="button">Solicite um orçamento</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}