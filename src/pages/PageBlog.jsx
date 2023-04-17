import React from "react"
import Header from "../templates/Header"
import Footer from "../templates/Footer"
import Blog from "../templates/Blog"
import { Helmet, HelmetProvider } from 'react-helmet-async'

const params = new URLSearchParams(window.location.search);
const categoryUrl = params.get('category');
const title = categoryUrl || 'Blog Recente'

export default function PageBlog() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Blog Recente | NODOT</title>
                </Helmet>
            </HelmetProvider>
            <Header title={title} caption="Blogs" href="blog"/>
            <Blog/>
            <Footer/>
        </>
    )
}