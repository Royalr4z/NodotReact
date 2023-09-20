import React, { useState }  from "react"
import axios from "axios";
import { BaseUrl } from '../BaseUrl'
import Iframe from 'react-iframe'

export default function ContactUs() {

    const [msgError, setMsgError] = useState({});
    const [boxSuccess, setBoxSuccess] = useState(true);
    const [boxError, setBoxError] = useState(true);

    const Send = async () => { 

        const dados = {
            name: document.querySelector('#typeUser').value,
            email: document.querySelector('#typeEmail').value,
            subject: document.querySelector('#typeSubject').value,
            content: document.querySelector('#typeContent').value,
        };

        const options = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const response = await axios.post(`${BaseUrl}/message`, dados, options);
            if (response.status === 204) {
                setBoxError(true)
                setBoxSuccess(false)

                document.querySelector('#typeUser').value = ''
                document.querySelector('#typeEmail').value = ''
                document.querySelector('#typeSubject').value = ''
                document.querySelector('#typeContent').value = ''

                setTimeout(() => {
                window.location.href = './contact';
                }, 2000);
            }
          } catch (error) {
            setBoxError(false)
           
            setMsgError({
                msg: error.response.data,
                status: 400
            })
            }
        }


    return (
        <>
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: '600px'}}>
                        <h5 className="fw-bold text-primary text-uppercase">Contate-nos</h5>
                        <h1 className="mb-0">Se você tiver alguma dúvida, sinta-se à vontade para entrar em contato conosco</h1>
                    </div>
                    <div className="row g-5 mb-5">
                        <div className="col-lg-4">
                            <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.1s">
                                <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: '60px', height: '60px'}}>
                                    <i className="fa fa-phone-alt text-white"></i>
                                </div>
                                <div className="ps-4">
                                    <h5 className="mb-2">Ligue para tirar qualquer dúvida</h5>
                                    <h4 className="text-primary mb-0">(61) 9 8303-5827</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.4s">
                                <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: '60px', height: '60px'}}>
                                    <i className="fa fa-envelope-open text-white"></i>
                                </div>
                                <div className="ps-4">
                                    <h5 className="mb-2">E-mail</h5>
                                    <div className="text-primary mb-0" style={{fontWeight: '500', fontSize: '1.06rem'}}>nodotenterprise@outlook.com</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.8s">
                                <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: '60px', height: '60px'}}>
                                    <i className="fa fa-map-marker-alt text-white"></i>
                                </div>
                                <div className="ps-4">
                                    <h5 className="mb-2">Visite nosso escritório</h5>
                                    <h4 className="text-danger mb-0">Em breve</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">

                            {/* <!-- SuccessMsg Start --> */}
                            <div className={boxSuccess ? 'd-none' : 'text-light bg-success border-radius rounded-3 my-2'}>
                                <i className="bi bi-check mx-2"></i>
                                <span>Usuário Conectado Com Sucesso.</span>
                            </div>
                            {/* <!-- SuccessMsg End --> */}

                            {/* <!-- ErrorMsg Start --> */}
                            <div  className={boxError ? 'd-none' : 'text-light bg-danger border-radius rounded-3 my-2'}>
                                <i className="bi bi-exclamation-triangle px-1 mx-2"></i>
                                <span>{msgError.msg}</span>
                            </div>
                            {/* <!-- ErrorMsg End --> */}

                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <input type="text" id="typeUser" className="form-control border-0 bg-light px-4" placeholder="Seu Nome" style={{height: '55px'}}/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" id="typeEmail" className="form-control border-0 bg-light px-4" placeholder="Seu E-mail" style={{height: '55px'}}/>
                                    </div>
                                    <div className="col-12">
                                        <input type="text" id="typeSubject" className="form-control border-0 bg-light px-4" placeholder="Assunto" style={{height: '55px'}}/>
                                    </div>
                                    <div className="col-12">
                                        <textarea className="form-control border-0 bg-light px-4 py-3" id="typeContent" rows="4" placeholder="Mensagem"></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="button" onClick={Send}>Mandar Mensagem</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
                            <Iframe className="position-relative rounded w-100 h-100"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245795.56249609025!2d-48.077786570030675!3d-15.721717263587397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3d18df9ae275%3A0x738470e469754a24!2zQnJhc8OtbGlhLCBERg!5e0!3m2!1spt-BR!2sbr!4v1677866190554!5m2!1spt-BR!2sbr"
                                frameborder="0" style={{minHeight: '350px', border: '0'}} allowfullscreen="" aria-hidden="false"
                                tabindex="0"></Iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}