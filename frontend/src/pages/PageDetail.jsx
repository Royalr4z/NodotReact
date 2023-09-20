import React from "react"
import Header from "../templates/Header"
import BlogContent from "../templates/BlogContent"
import Footer from "../templates/Footer"

import { Helmet, HelmetProvider } from 'react-helmet-async'

export default function PageDetail() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Blog | NODOT</title>
                </Helmet>
            </HelmetProvider>
            <Header title="Detalhe do Blog" caption="Blogs" href="blog"/>
            <BlogContent/>
            <Footer/>
        </>
    )
}