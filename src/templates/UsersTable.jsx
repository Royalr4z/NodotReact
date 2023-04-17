import React, { useState, useEffect } from "react"
import axios from 'axios'
import { BaseUrl } from '../BaseUrl'
import Error from './Error'

export default function UsersTable() {
    const token = localStorage.getItem('token');
    const params = new URLSearchParams(window.location.search);
    // const id = params.get('id');
    // const mode = params.get('mode');

    const [users, setUsers] = useState([]);
    const [error, setError] = useState(true);

    useEffect(() => {
        axios.get(`${BaseUrl}/users`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${token}`
            }
        })
            .then(response => {
                setError(true)
                setUsers(response.data);
            })
            .catch(error => {
                setError(false)
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
        }, [users]);

    return (
        <>
            <nav aria-label="..." className="mx-4">
                <ul className="pagination pagination-md">
                    <li className="page-item bg-dark" aria-current="page" >
                        <a className="page-link bg-dark" href="/blog-creation">Blogs</a>
                    </li>
                    <li className="page-item active">
                        <a className="page-link" href="/users-table">Usuários</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link bg-dark" href="/category-creation">Categorias</a>
                    </li>
                </ul>
            </nav>
            {!error ? <Error status="401"/> :
            <table id="table" className="table bg-dark text-light table-hover"
                style={{ borderTop: '5px solid #b3b3b3', borderBottom: '5px solid #b3b3b3' }}>
                <thead>
                    <tr>
                        <th data-column="0" data-type="string" data-order="ascending">ID <i className="bi bi-sort-up"></i></th>
                        <th data-column="1" data-type="string" data-order="ascending">Name <i className="bi bi-sort"></i></th>
                        <th data-column="2" data-type="string" data-order="ascending">Email <i className="bi bi-sort"></i></th>
                        <th data-column="3" data-type="string" data-order="ascending">Admin <i className="bi bi-sort"></i></th>
                        {/* <th data-column="4" data-type="string" data-order="ascending">Actions</th> */}
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.admin ? <i className="bi bi-check-square"></i> : <i className="bi bi-square"></i>}</td>
                            {/* <td>
                                <a href={`?id=${user.id}&mode=edit`} className="btn btn-warning text-dark"
                                    style={{ borderRadius: '10px', padding: '5px 10px', margin: '0px 5px' }}>
                                    <i className="bi bi-pencil"></i>
                                </a>
                                <a href={`?id=${user.id}&mode=delete`} className="btn btn-danger"
                                    style={{ borderRadius: '10px', padding: '5px 10px' }}>
                                    <i className="bi bi-trash"></i>
                                </a>
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
            }
        </>
    )
}