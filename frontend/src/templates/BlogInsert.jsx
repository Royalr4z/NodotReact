import React, { useState, useEffect } from "react"
import axios from 'axios'
import { BaseUrl } from '../BaseUrl'

export default function BlogInsert() {
    const token = localStorage.getItem('token');

    const [state, setState] = useState({
        msgError: {},
        boxSuccess: true,
        boxError: true,
        users: [],
        category: []
    });

    const { msgError, boxSuccess, boxError, users, category } = state;

    const options = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `bearer ${token}`
        }
    };

    useEffect(() => {
        // Obtendo os Usuários
        axios.get(`${BaseUrl}/users`, options)
          .then(response => response.data)
          .then(data => {
            
            setState(prevState => ({ ...prevState, users: data}));
          })
          .catch(err => console.log('Error 500'))

        // Obtendo as Categorias
        axios.get(`${BaseUrl}/category`, options)
          .then(response => response.data)
          .then(data => {
            
            setState(prevState => ({ ...prevState, category: data}));
          })
          .catch(err => console.log('Error 500'))
     }, []);

    const Send = async () => {
        const dataAtual = new Date();
        const dia = dataAtual.getDate();
        let mes = dataAtual.getMonth() + 1;
        const ano = dataAtual.getFullYear();
        
        if (mes === 1){mes = 'Jan'} if (mes === 2){mes = 'Fer'} 
        if (mes === 3){mes = 'Mar'} if (mes === 4){mes = 'Abr'} if (mes === 5){mes = 'Maio' }
        if (mes === 6){mes = 'Jun'} if (mes === 7){mes = 'Jul'} 
        if (mes === 8){mes = 'Ago'} if (mes === 9){mes = 'Set'} if (mes === 10){mes = 'Out' }
        if (mes === 11){mes = 'Nov'}if (mes === 12){mes = 'Dez'}

        const dataFormatada = `${dia}/${mes}/${ano}`;
        
        const dados = {
            date: dataFormatada,
            title: document.querySelector('#typeTitle').value,
            subtitle: document.querySelector('#typeSubtitle').value,
            imageUrl: document.querySelector('#typeImageUrl').value,
            content: document.querySelector('#typeContent').value,
            userId: document.querySelector('#typeUser').value,
            categoryId: document.querySelector('#typeCategory').value,
        }

        setState(prevState => ({ ...prevState, boxSuccess: true}));
        setState(prevState => ({ ...prevState, boxError: true}));
        
        try {
            const response = await axios.post(`${BaseUrl}/blogs`, dados, options);
            if (response.status === 204) {

                setState(prevState => ({ ...prevState, boxSuccess: false}));
                setState(prevState => ({ ...prevState, boxError: true}));
            
                document.querySelector('#typeUser').value = ''
                document.querySelector('#typeTitle').value = ''
                document.querySelector('#typeSubtitle').value = ''
                document.querySelector('#typeImageUrl').value = ''
                document.querySelector('#typeContent').value = ''
                document.querySelector('#typeCategory').value = ''
            
            }
        } catch (error) {
            setState(prevState => ({ ...prevState, boxError: false}));
           
            setState(prevState => ({ ...prevState, msgError: {
                msg: error.response.data,
                status: error.response.status,
            }}));
        }
    }

    const Cancel = () => {
        setState(prevState => ({ ...prevState, boxSuccess: true}));
        setState(prevState => ({ ...prevState, boxError: true}));
        document.querySelector('#typeUser').value = ''
        document.querySelector('#typeTitle').value = ''
        document.querySelector('#typeSubtitle').value = ''
        document.querySelector('#typeImageUrl').value = ''
        document.querySelector('#typeContent').value = ''
        document.querySelector('#typeCategory').value = ''
    }
    
    return (
        <>
            <nav aria-label="..." className="mx-4 mb-5">
                <ul className="pagination pagination-md">
                    <li className="page-item active" aria-current="page">
                        <a className="page-link" href="./blog-creation">Blogs</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link bg-dark" href="/users-table">Usuários</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link bg-dark" href="/category-creation">Categorias</a>
                    </li>
                </ul>
            </nav>

            <form className="m-4">
                <div className="mb-3">
                    <label className="col-form-label text-dark">Título:</label>
                    <input onKeyDown={(event) => {
                            if (event.keyCode === 13) {
                                document.getElementById('typeSubtitle').focus()
                            }
                        }} type="text" className="form-control border border-2 border-dark" id="typeTitle"/>
                </div>
                <div className="mb-3">
                    <label className="col-form-label text-dark">Descrição:</label>
                    <input onKeyDown={(event) => {
                            if (event.keyCode === 13) {
                                document.getElementById('typeImageUrl').focus()
                            }
                        }} type="text" className="form-control border border-2 border-dark" id="typeSubtitle"/>
                </div>
                <div className="mb-3">
                    <label className="col-form-label text-dark">Imagem (URL): <span style={{color: '#8b8b8b'}}>(Opcional)</span></label>
                    <input onKeyDown={(event) => {
                            if (event.keyCode === 13) {
                                document.getElementById('typeContent').focus()
                            }
                        }} type="text" className="form-control border border-2 border-dark" id="typeImageUrl"/>
                </div>
                <div className="mb-3">
                    <label className="col-form-label text-dark">Conteúdo: <span className="text-primary">(Coloque as tags no texto)</span></label>
                    <textarea className="form-control border border-2 border-dark" id="typeContent"></textarea>
                </div>
                <div className="col-12">
                    <span className="text-dark">Usuário:</span>
                    <select id="typeUser" className="form-select mb-3 mt-2 border border-2 border-dark" style={{height: '55px'}}>
                        <option defaultValue value="">Selecione o Usuário</option>
                        {users.map((user, index) => {
                            return (
                                <option key={user.id} value={user.id}>{user.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="col-12">
                    <span className="text-dark">Categoria:</span>
                    <select id="typeCategory" className="form-select mb-3 mt-2 border border-2 border-dark" style={{height: '55px'}}>
                        <option defaultValue value="">Selecione a Categoria</option>
                        {category.map((category, index) => {
                            return (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            )
                        })}
                    </select>
                </div>
            </form>

            {/* <!-- Success Start --> */}
            <div id="box-success" className={boxSuccess ? 'd-none' : 'd-flex justify-content-center py-1 my-2 mx-4 rounded-3 text-light bg-success'}>
                <i id="icon-success" className="bi bi-check"></i>
                <div id="msg-success">Blog enviada com sucesso!</div>
            </div>
            {/* <!-- Success End --> */}

            {/* <!-- Error Start --> */}
            <div className={boxError ? 'd-none' : 'd-flex justify-content-center py-1 my-2 mx-4 rounded-3 text-light bg-danger'}>
                <i className="bi bi-exclamation-triangle px-1"></i>
                <div>{msgError.msg}</div>
            </div>
            {/* <!-- Error End --> */}

            <div className="mx-4">
                <button className="btn btn-dark" onClick={Send} style={{borderRadius: '5px'}}>Enviar</button>
                <button className="btn mx-2" onClick={Cancel}
                    style={{borderRadius: '5px', background: '#adadad', color: '#fff'}}>Cancelar</button>
            </div>

        </>
    )
}