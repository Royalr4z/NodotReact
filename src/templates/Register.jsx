import React from "react"

export default function Register() {
    return (
        <section class="vh-100 gradient-custom mb-5 pb-5">
            <div class="container py-0 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card bg-dark text-white" 
                        style={{borderRadius: '1rem',  
                        borderBottom: '3px solid #00b7ff', borderRight: '3px solid #00b7ff'}}>
                            <div class="card-body p-5 text-center">

                                {/* <!-- SuccessMsg Start --> */}
                                <div id="box-success" class="text-light bg-success border-radius rounded-3 my-1 d-none">
                                    <i class="bi bi-check"></i>
                                    <span>Usuário Cadastrado Com Sucesso.</span>
                                </div>
                                {/* <!-- SuccessMsg End --> */}

                                {/* <!-- ErrorMsg Start --> */}
                                <div id="box-error" class="text-light bg-danger border-radius rounded-3 my-1 d-none">
                                    <i class="bi bi-exclamation-triangle px-1"></i>
                                    <span id="text-error"></span>
                                </div>
                                {/* <!-- ErrorMsg End --> */}

                                <div class="mb-md-5 mt-md-4 pb-5">
                                    <a href="../index" class="p-0 mb-5"
                                        style={{fontSize: '4rem'}}>
                                        <i class="bi bi-globe2 text-light"></i>
                                </a>

                                <h2 class="fw-bold mb-2 text-uppercase text-primary mt-0">Cadastre-se</h2>
                                <p class="text-light-50 mb-3">Por favor, digite seu nome, E-mail e senha!</p>

                                <div class="form-outline form-white mb-4">
                                    <input type="name" id="typeName" class="form-control form-control-lg" placeholder="Nome" />
                                </div>

                                <div class="form-outline form-white mb-4">
                                    <input type="email" id="typeEmail" class="form-control form-control-lg" placeholder="E-mail" />
                                </div>

                                <div class="form-outline form-white mb-4">
                                    <input type="password" id="typePassword" class="form-control form-control-lg" placeholder="Senha" />
                                </div>

                                <div class="form-outline form-white mb-4">
                                    <input type="password" id="typeConfirmPassword" class="form-control form-control-lg" placeholder="Confirmação de senha" />
                                </div>

                                <button onclick="registerData()" class="btn btn-outline-light btn-lg px-5 mt-2" type="submit">Cadastre-se</button>
                            </div>

                            <div>
                                <p class="mb-0">Já tem uma conta?
                                    <a href="./signin" class="text-white-50 fw-bold"> Login</a>
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