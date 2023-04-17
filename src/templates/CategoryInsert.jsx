import React, { useState, useEffect } from "react"
import axios from 'axios'
import { BaseUrl } from '../BaseUrl'

export default function CategoryInsert() {
    const token = localStorage.getItem('token');
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const mode = params.get('mode');

    const msgSuccess= document.querySelector('#msg-success');
    
    const [msgError, setMsgError] = useState({});
    const [boxSuccess, setBoxSuccess] = useState(true);
    const [boxError, setBoxError] = useState(true);

    const editar = async () => {
        const dadosEditados = {
          id: id,
          name: document.querySelector('#typeName').value,
          subtitle: document.querySelector('#typeSubtitle').value,
        };
      
        const options = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`
          }
        };
      
        setBoxError(true)
        setBoxSuccess(true)

        try {
            const response = await axios.put(`${BaseUrl}/category/${id}`, dadosEditados, options)
            if (response.status === 204) {
                setBoxError(true)
                setBoxSuccess(false)
        
                msgSuccess.innerHTML = 'Editado com Sucesso!'
                document.getElementById("typeName").value = ''
                document.querySelector('#typeSubtitle').value = ''
                setTimeout(() => {
                    window.location.href = '/category-creation' 
                }, 3000);
        
            }
        } catch (error) {
            setBoxError(false)
            
            setMsgError({
                msg: error.response.data,
                status: error.response.status,
            })
        }
      }

    const deletar = async () => {
        const dadosDeletados = {
            id: id,
            name: document.querySelector('#typeName').value,
            subtitle: document.querySelector('#typeSubtitle').value,
        };

        const options = {
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`
            }
        };

        setBoxSuccess(true)
        setBoxError(true)
    
        try {
            const response = await axios.delete(`${BaseUrl}/category/${id}`, dadosDeletados, options);
            if (response.status === 204) {
                    setBoxError(true)
                    setBoxSuccess(false)
            
                    msgSuccess.innerHTML = 'Deletado com Sucesso!'
                    document.getElementById("typeName").value = ''
                    document.querySelector('#typeSubtitle').value = ''
            
                    setTimeout(() => {
                        window.location.href = '/category-creation' 
                    }, 1500);
            
            }
        } catch (error) {
            setBoxError(false)
            
            setMsgError({
                msg: error.response.data,
                status: error.response.status,
            })
        }
    }

    const Send = async () => {
        const dados = {
          name: document.querySelector('#typeName').value,
          subtitle: document.querySelector('#typeSubtitle').value,
        };
    
        const options = {
          body: JSON.stringify(dados),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`
          }
        };
        
        setBoxSuccess(true)
        setBoxError(true)
    
        try {
            const response = await axios.post(`${BaseUrl}/category`, dados, options);
            if (response.status === 204) {
                setBoxError(true)
                setBoxSuccess(false)
            
                document.getElementById("typeName").value = ''
                document.querySelector('#typeSubtitle').value = ''
            
                window.location.href = '/category-creation' 
            
            }
        } catch (error) {
            setBoxError(false)
           
            setMsgError({
                msg: error.response.data,
                status: error.response.status,
            })
        }
    }

    const Cancel = () => {
        if(id && mode) { 
            setBoxSuccess(true)
            setBoxError(true)
            document.querySelector('#typeName').value = ''
            document.querySelector('#typeSubtitle').value = ''
            window.location.href = '/category-creation' 
        } else {
            setBoxSuccess(true)
            setBoxError(true)
            document.querySelector('#typeName').value = ''
            document.querySelector('#typeSubtitle').value = ''
        }
    }

    if (id && mode == 'edit') {
        axios.get(`${BaseUrl}/category/${id}`)
          .then(category => { 
            document.querySelector('#typeName').value = category.data.name
            document.querySelector('#typeSubtitle').value = category.data.subtitle
          })
          .catch(err => console.log(err))
    } if (id && mode == 'delete') {
        axios.get(`${BaseUrl}/category/${id}`)
          .then(category => { 
            document.querySelector('#typeName').value = category.data.name
            document.querySelector('#typeSubtitle').value = category.data.subtitle
      
            document.querySelector('#typeSubtitle').setAttribute("disabled", '');
            document.querySelector('#typeName').setAttribute("disabled", '');
          })
          .catch(err => console.log(err))
    }

    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get(`${BaseUrl}/category`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${token}`
            }
        })
            .then(response => {
                setCategory(response.data);
            })
            .catch(error => {
                window.location.href = '/Error404'
            });
    }, []);

    useEffect(() => {
        const table = $('table');
        const headers = table.find('th');
        const rows = table.find('tbody tr');
    
        let currentSortColumn = headers.eq(0).attr('data-column');
        let currentSortOrder = headers.eq(0).attr('data-order');
        let currentSortIcon = headers.eq(0).find('i');
        
        const getComparator = (type, order) => {
          if (type === 'number') {
            return (a, b) => (order === 'ascending') ?
              Number(a.cells[currentSortColumn].textContent) - Number(b.cells[currentSortColumn].textContent) :
              Number(b.cells[currentSortColumn].textContent) - Number(a.cells[currentSortColumn].textContent);
          } else {
            return (a, b) => (order === 'ascending') ?
              a.cells[currentSortColumn].textContent.localeCompare(b.cells[currentSortColumn].textContent) :
              b.cells[currentSortColumn].textContent.localeCompare(a.cells[currentSortColumn].textContent);
          }
        };
        
        const sortTable = () => {
          const comparator = getComparator(headers.eq(currentSortColumn).attr('data-type'), currentSortOrder);
          const sortedRows = rows.sort(comparator)
            .map((index, row) => row.outerHTML)
            .toArray();
        
          table.find('tbody').html(sortedRows.join(''));
        };
        
        const toggleSortIcon = () => {
          currentSortIcon.removeClass('bi bi-sort-up bi-sort-down');
          if (currentSortOrder === 'ascending') {
            currentSortIcon.addClass('bi-sort-up');
          } else {
            currentSortIcon.addClass('bi-sort-down');
          }
        };
        
        headers.click(function() {
          const clickedColumn = $(this).attr('data-column');
          if (clickedColumn === currentSortColumn) {
            currentSortOrder = (currentSortOrder === 'ascending') ? 'descending' : 'ascending';
          } else {
            currentSortColumn = clickedColumn;
            currentSortOrder = 'ascending';
            currentSortIcon = $(this).find('i');
          }
          toggleSortIcon();
          sortTable();
        });
        
        sortTable();
        toggleSortIcon();
        }, [category]);

    return (
        <>
            <nav aria-label="..." className="mx-4">
                <ul className="pagination pagination-md">
                    <li className="page-item" aria-current="page" >
                        <a className="page-link bg-dark" href="/blog-creation">Blogs</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link bg-dark" href="/users-table">Usuários</a>
                    </li>
                    <li className="page-item active">
                        <a className="page-link" href="/category-creation">Categorias</a>
                    </li>
                </ul>
            </nav>

            {/* <!-- Success Start --> */}
            <div className={boxSuccess ? 'd-none' : 'd-flex justify-content-center py-1 my-2 mx-4 rounded-3 text-light bg-success'}>
                <i className="bi bi-check"></i>
                <div id="msg-success">Categoria enviada com sucesso!</div>
            </div>
            {/* <!-- Success End --> */}

            {/* <!-- Error Start --> */}
            <div className={boxError ? 'd-none' : 'd-flex justify-content-center py-1 my-2 mx-4 rounded-3 text-light bg-danger'}>
                <i className="bi bi-exclamation-triangle px-1"></i>
                <div>{msgError.msg}</div>
            </div>
            {/* <!-- Error End --> */}

            <form className="m-4">
                <div className="mb-3">
                    <label className="col-form-label text-dark">Nome:</label>
                    <input type="text" className="form-control" id="typeName"/>
                </div>
                <div className="mb-3">
                    <label className="col-form-label text-dark">Descrição:
                        <span className="text-danger">(Limite - 250 caracteres)</span></label>
                    <textarea className="form-control" id="typeSubtitle"></textarea>
                </div>
            </form>

            <div className="mx-4">
                {mode ? 
                    <button className={mode === 'edit' ? 'btn btn-warning' : 'btn btn-danger'}
                    style={{borderRadius: '5px'}} 
                    onClick={mode === 'edit' ? editar : deletar}>
                        {mode === 'edit' ? 'Editar' : 'Deletar'}</button>
                    : 
                    <button className="btn btn-dark" id="button-config"
                    style={{borderRadius: '5px'}} onClick={Send}>Enviar</button>
                }
                <button className="btn mx-2" onClick={Cancel}
                    style={{borderRadius: '5px', background: '#adadad', color: '#fff'}}>Cancelar</button>
            </div>

            {/* <!-- Form End --> */}

            {/* <!-- Table Start --> */}

            <table id="table" className="table bg-dark text-light table-hover mt-5"
                style={{borderTop: '5px solid #b3b3b3',
                        borderBottom: '5px solid #b3b3b3'}}>
                <thead>
                    <tr>
                        <th scope="col" style={{cursor: 'pointer'}} className="px-2"
                            data-column="0" data-type="number" data-order="ascending">
                            ID<i className="bi bi-sort-down mx-0"></i></th>
                        <th scope="col">
                            Categoria</th>
                        <th scope="col">
                            Descrição</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                {category.map((category, index) => (
                        <tr key={index}>
                            <td>{category.id}</td>
                            <td>{category.name}</td>
                            <td>{category.subtitle}</td>
                            <td>
                                <a href={`?id=${category.id}&mode=edit`} className="btn btn-warning text-dark my-1"
                                    style={{ borderRadius: '10px', padding: '5px 10px', margin: '0px 5px' }}>
                                    <i className="bi bi-pencil"></i>
                                </a>
                                <a href={`?id=${category.id}&mode=delete`} className="btn btn-danger m-1"
                                    style={{ borderRadius: '10px', padding: '5px 10px' }}>
                                    <i className="bi bi-trash"></i>
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    )
}
