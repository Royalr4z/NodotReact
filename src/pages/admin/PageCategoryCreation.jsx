import React from "react"
import Header from "../../templates/Header"
import Footer from "../../templates/Footer"
import { Helmet, HelmetProvider } from 'react-helmet-async'
import CategoryInsert from "../../templates/CategoryInsert"

export default function PageCategoryCreation() {
    return (
        <>  
            <HelmetProvider>
                <Helmet>
                    <title>Criação de Categorias | NODOT</title>
                </Helmet>
            </HelmetProvider>
            <Header title="Criação de Categorias" caption="blog" href="blog"/>
            <CategoryInsert/>
            <Footer/>
        </>
    )
}