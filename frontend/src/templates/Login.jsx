import React, { useState } from "react"
import axios from 'axios'
import { BaseUrl } from '../BaseUrl'

export default function Login() {

    const [msgError, setMsgError] = useState({});
    const [boxSuccess, setBoxSuccess] = useState(true);
    const [boxError, setBoxError] = useState(true);


    const connectUser = async () => { 

        const dados = {
            email: document.querySelector('#typeEmail').value,
            password: document.querySelector('#typePassword').value,
        };

        const options = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const response = await axios.post(`${BaseUrl}/signin`, dados, options);
            if (response.status === 200) {
                setBoxError(true)
                setBoxSuccess(false)

                document.querySelector('#typeEmail').value = ''
                document.querySelector('#typePassword').value = ''
                
                setTimeout(() => {
                    localStorage.setItem("admin", response.data.admin);
                    localStorage.setItem("email", response.data.email);
                    localStorage.setItem("exp", response.data.exp);
                    localStorage.setItem("iat", response.data.iat);
                    localStorage.setItem("id", response.data.id);
                    localStorage.setItem("name", response.data.name);
                    localStorage.setItem("token", response.data.token);
                    window.location.href = '/blog-creation'    
                }, 1500);
            } else {
                return 
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
        <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white" 
                            style={{borderRadius: '1rem',  
                            borderBottom: '3px solid #00b7ff', borderRight: '3px solid #00b7ff'}}>
                                <div className="card-body p-5 text-center">

                                    {/* <!-- SuccessMsg Start --> */}
                                    <div className={boxSuccess ? 'd-none' : 'text-light bg-success border-radius rounded-3 my-2 py-1'}>
                                        <i className="bi bi-check"></i>
                                        <span >Usuário Conectado Com Sucesso.</span>
                                    </div>
                                    {/* <!-- SuccessMsg End --> */}

                                    {/* <!-- ErrorMsg Start --> */}
                                    <div className={boxError ? 'd-none' : "text-light bg-danger border-radius rounded-3 my-2 py-1"}>
                                        <i className="bi bi-exclamation-triangle px-1"></i>
                                        <span>{msgError.msg}</span>
                                    </div>
                                    {/* <!-- ErrorMsg End --> */}

                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <a href="/" className="p-0 mb-5"
                                            style={{fontSize: '4rem'}}>
                                            <i className="bi bi-globe2 text-light"></i>
                                    </a>

                                    <h2 className="fw-bold mb-2 text-uppercase text-primary mt-3">Login</h2>
                                    <p className="text-light-50 mb-5">Por favor, digite seu login e senha!</p>

                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="typeEmail" className="form-control form-control-lg" placeholder="E-mail" />
                                    </div>

                                    <div className="form-outline form-white mb-4">
                                        <input type="password" id="typePassword" className="form-control form-control-lg" placeholder="Senha" />
                                    </div>

                                    {/* <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Esqueceu a senha?</a></p> */}

                                    <button onClick={connectUser} className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                                </div>
                                <div>
                                    <p className="mb-0">Não tem uma conta? <a href="signup" className="text-white-50 fw-bold">Inscrever-se</a>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}