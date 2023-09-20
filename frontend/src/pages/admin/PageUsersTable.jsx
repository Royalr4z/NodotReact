import React from "react"
import Header from "../../templates/Header"
import Footer from "../../templates/Footer"
import { Helmet, HelmetProvider } from 'react-helmet-async'
import UsersTable from "../../templates/UsersTable"

export default function PageUsersTable() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Tabela de Usuários | NODOT</title>
                </Helmet>
            </HelmetProvider>
            <Header title="Usuários" caption="blog" href="blog"/>
            <UsersTable/>
            <Footer/>
        </>
    )
}