import React from "react"
import Header from "../../templates/Header"
import Footer from "../../templates/Footer"
import { Helmet, HelmetProvider } from 'react-helmet-async'
import BlogInsert from "../../templates/BlogInsert"

export default function PageBlogCreation() {
    return (
        <>  
            <HelmetProvider>
                <Helmet>
                    <title>Criação do Blog | NODOT</title>
                </Helmet>
            </HelmetProvider>
            <Header title="Criação do Blog" caption="blog" href="blog"/>
            <BlogInsert/>
            <Footer/>
        </>
    )
}