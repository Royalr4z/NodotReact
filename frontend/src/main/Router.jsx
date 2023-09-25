
//   Copyright Vinícius Viana Pereira

//   Licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter mais detalhes.

// --------------------------------------------------------------------------------------------

import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import axios from "axios";
import { BaseUrl } from "../BaseUrl";

import Home from "../pages/Home";
import PageService from "../pages/PageService";
import PageBlog from "../pages/PageBlog";
import PageDetail from "../pages/PageDetail";
import PageContact from "../pages/PageContact";
import PagePentest from "../pages/PagePentest";
import PageAutoTask from "../pages/PageAutoTask";
import PageWebDevelopment from "../pages/PageWebDevelopment";
import PageInfrastructure from "../pages/PageInfrastructure";
import PageSignin from "../pages/PageSignin";
import PageSignup from "../pages/PageSignup";
import PageBlogCreation from "../pages/admin/PageBlogCreation";
import PageCategoryCreation from "../pages/admin/PageCategoryCreation";
import PageUsersTable from "../pages/admin/PageUsersTable";
import PageError from "../pages/PageError";

import { RouterValueProvider } from './Context';

const Router = () => {

    const admin = localStorage.getItem('admin');
    const email = localStorage.getItem('email');
    const exp = localStorage.getItem('exp');
    const iat = localStorage.getItem('iat');
    const id = localStorage.getItem('id');
    const name = localStorage.getItem('name');
    const token = localStorage.getItem('token');
    const [resp, setResp] = useState(true);

    const options = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const dados = {
        admin: admin,
        email: email,
        exp: exp,
        iat: iat,
        id: id,
        name: name,
        token: token,
    }

    async function validateToken() {
        try {
            const response = await axios.post(`${BaseUrl}/validateToken`, dados, options);
            if (response.status === 200) {
                setResp(true)
            }
        } catch(err) {
            setResp(false)
        }
    }
    
    validateToken()

    return(
        <RouterValueProvider value={resp}>
            <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/service" element={<PageService />} />
                        <Route exact path="/blog" element={<PageBlog />} />
                        <Route exact path="/detail" element={<PageDetail />} />
                        <Route exact path="/contact" element={<PageContact />} />
                        <Route exact path="/pentest" element={<PagePentest />} />
                        <Route exact path="/auto-task" element={<PageAutoTask/>} />
                        <Route exact path="/web-development" element={<PageWebDevelopment/>} />
                        <Route exact path="/infrastructure" element={<PageInfrastructure/>} />
                        <Route exact path="/signin" element={<PageSignin/>} />
                        <Route exact path="/signup" element={<PageSignup/>} />
                        <Route exact path="/blog-creation" element={resp && admin ? <PageBlogCreation/> : <PageError />} />
                        <Route exact path="/category-creation" element={resp && admin  ? <PageCategoryCreation/> : <PageError />} />
                        <Route exact path="/users-table" element={resp && admin ? <PageUsersTable/> : <PageError />} />
                        <Route path="*" element={<PageError />} />
                    </Routes>
            </BrowserRouter>
        </RouterValueProvider>
   )
}

export default Router;
