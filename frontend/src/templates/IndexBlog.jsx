import React, { useState, useEffect } from "react";
import { BaseUrl } from "../BaseUrl";
import axios from 'axios';
import Loading from "./Loading";
import imgBlog2 from '../img/blog-2.jpg';

export default function IndexBlog() {

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${BaseUrl}/blogs/orderby`)
            .then(response => {
                const blogsData = response.data.blog;
                setBlogs(blogsData);
                setLoading(false);
            })
            .catch(error => {
                setLoading(true)
            });
    }, []);


    return (
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                    <h5 className="fw-bold text-primary text-uppercase">Blog mais recente</h5>
                    <h1 className="mb-0">Leia os artigos mais recentes de nossa postagem no blog</h1>
                </div>
                <div className="row g-5">
                    {loading ? <Loading/> : blogs.map((blog, index) => {
                            return (
                                <div className="col-lg-4 wow slideInUp" key={`item-${index}`}>
                                    <div className="blog-item bg-light rounded overflow-hidden">
                                        <div className="blog-img position-relative overflow-hidden">
                                            <img className="img-fluid border-1 border-top border-start border-end border-gray" src={blog.imageUrl || imgBlog2} alt="" style={{ height: '25vh', width: '100vh' }} />
                                            <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href={`blog?category=${blog.categoryName}`}>
                                                {blog.categoryName}
                                            </a>
                                        </div>
                                        <div className="p-4 border-2 border border-gray">
                                            <div className="d-flex mb-3">
                                                <small className="me-3">
                                                    <i className="far fa-user text-primary me-2" />
                                                    {blog.userName}
                                                </small>
                                                <small>
                                                    <i className="far fa-calendar-alt text-primary me-2" />
                                                    {blog.date}
                                                </small>
                                            </div>
                                            <h4 className="mb-3">{blog.title}</h4>
                                            <p id="blogSubtitle"style={{
                                                display: '-webkit-box',
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                WebkitLineClamp: '2', /* Altere o número máximo de linhas com base no estado */}}>
                                            {blog.subtitle}</p>
                                            <a className="text-uppercase" href={`detail?id=${blog.id}`}>
                                                Leia Mais <i className="bi bi-arrow-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                    })}
                </div>
            </div>
        </div>
    )
}