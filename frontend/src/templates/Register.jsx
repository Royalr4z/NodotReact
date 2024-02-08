import React, { useState } from "react";
import axios from "axios";
import { BaseUrl } from "../BaseUrl"

export default function Register() {

    const [msgError, setMsgError] = useState({});
    const [boxSuccess, setBoxSuccess] = useState(true);
    const [boxError, setBoxError] = useState(true);

    const registerData = async () => {

        const dados = {
          name: document.querySelector('#typeName').value,
          email: document.querySelector('#typeEmail').value,
          password: document.querySelector('#typePassword').value,
          confirmPassword: document.querySelector('#typeConfirmPassword').value
        };

        const options = {
          headers: {
            'Content-Type': 'application/json'
          }
        };

        try {
        const response = await axios.post(`${BaseUrl}/signup`, dados, options);
            if(response.status === 204){
                setBoxError(true)
                setBoxSuccess(false)
      
                document.querySelector('#typeName').value = ''
                document.querySelector('#typeEmail').value = ''
                document.querySelector('#typePassword').value = ''
                document.querySelector('#typeConfirmPassword').value = ''
        
                setTimeout(() => {
                    window.location.href = './signin';
                }, 2000);
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
        <section className="vh-100 gradient-custom mb-5 pb-5">
            <div className="container py-0 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" 
                        style={{borderRadius: '1rem',  
                        borderBottom: '3px solid #00b7ff', borderRight: '3px solid #00b7ff'}}>
                            <div className="card-body p-5 text-center">

                                {/* <!-- SuccessMsg Start --> */}
                                <div className={boxSuccess ? 'd-none' : 'text-light bg-success border-radius rounded-3 my-1'}>
                                    <i className="bi bi-check"></i>
                                    <span>Usuário Cadastrado Com Sucesso.</span>
                                </div>
                                {/* <!-- SuccessMsg End --> */}

                                {/* <!-- ErrorMsg Start --> */}
                                <div className={boxError ? 'd-none' : 'text-light bg-danger border-radius rounded-3 my-1'}>
                                    <i className="bi bi-exclamation-triangle px-1"></i>
                                    <span>{msgError.msg}</span>
                                </div>
                                {/* <!-- ErrorMsg End --> */}

                                <div className="mb-md-5 mt-md-4 pb-5">
                                    <a href="/" className="p-0 mb-5"
                                        style={{fontSize: '4rem'}}>
                                        <i className="bi bi-globe2 text-light"></i>
                                </a>

                                <h2 className="fw-bold mb-2 text-uppercase text-primary mt-0">Cadastre-se</h2>
                                <p className="text-light-50 mb-3">Por favor, digite seu nome, E-mail e senha!</p>

                                <div className="form-outline form-white mb-4">
                                    <input type="name" id="typeName" className="form-control form-control-lg" placeholder="Nome"
                                        onKeyDown={(event) => {
                                            if (event.keyCode === 13) {
                                                document.getElementById('typeEmail').focus()
                                            }
                                        }}/>
                                </div>

                                <div className="form-outline form-white mb-4">
                                    <input type="email" id="typeEmail" className="form-control form-control-lg" placeholder="E-mail"
                                        onKeyDown={(event) => {
                                            if (event.keyCode === 13) {
                                                document.getElementById('typePassword').focus()
                                            }
                                        }}/>
                                </div>

                                <div className="form-outline form-white mb-4">
                                    <input type="password" id="typePassword" className="form-control form-control-lg" placeholder="Senha"
                                        onKeyDown={(event) => {
                                            if (event.keyCode === 13) {
                                                document.getElementById('typeConfirmPassword').focus()
                                            }
                                        }}/>
                                </div>

                                <div className="form-outline form-white mb-4">
                                    <input type="password" id="typeConfirmPassword" className="form-control form-control-lg" placeholder="Confirmação de senha"
                                        onKeyDown={(event) => {
                                            if (event.keyCode === 13) {
                                                registerData()
                                            }
                                        }}/>
                                </div>

                                <button onClick={registerData} className="btn btn-outline-light btn-lg px-5 mt-2" type="submit">Cadastre-se</button>
                            </div>

                            <div>
                                <p className="mb-0">Já tem uma conta?
                                    <a href="/signin" className="text-white-50 fw-bold"> Login</a>
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