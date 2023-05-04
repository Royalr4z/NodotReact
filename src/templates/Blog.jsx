import React, { useState, useEffect } from "react";
import { BaseUrl } from "../BaseUrl";
import axios from 'axios';
import imgBlog4 from '../img/blog-4.jpg'
import imgBlog2 from '../img/blog-2.jpg'
import Error from './Error'

export default function Blog() {

    const itensPerPage = 6;

    let counter = 1

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const params = new URLSearchParams(window.location.search);
    const categoryUrl = params.get('category');
    const paginationUrl = params.get('pg');

    if (categoryUrl && paginationUrl <= 0 && paginationUrl !== null ) {
        window.location.href = `./blog?pg=1&category=${categoryUrl}` 
    } if (!categoryUrl && paginationUrl <= 0 && paginationUrl !== null ) {
        window.location.href = `./blog?pg=1` 
    } 

    function Load(pagination = 1) {
        
        useEffect(() => {
            let url = ''
            if (!categoryUrl) {
                url = `${BaseUrl}/blogs?page=${pagination <= 0 ? pagination = 1 : pagination}&limit=${itensPerPage}`
                 
            } else {
                url = `${BaseUrl}/Blogs/category?page=${pagination <= 0 ? pagination = 1 : pagination}&limit=${itensPerPage}&category=${categoryUrl}`
            }
            setLoading(true);
            axios.get(`${url}`)
              .then(response => response.data)
              .then(data => {
                const totalPages = data.pagination.totalPages;

                if (totalPages !== 0) {
                    if (pagination > totalPages) {
                        window.location.href = `./blog?pg=${totalPages}`
                    }
                } else {
                    setLoading(true);
                }

                const blogData = data.blog.map(blog => {
                    if (!blog.imageUrl) {
                        blog.imageUrl = imgBlog2;
                    }
                    setLoading(false);
                    return blog;
                });

                setBlogs(blogData);
              })
              .catch(err => console.log('Error 500'))
          }, [categoryUrl, counter]);
    }

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(`${BaseUrl}/blogs/orderby`)
        .then(response => {
            const updatedPosts = response.data.blog.map(post => {
            if (!post.imageUrl) {
                post.imageUrl = imgBlog2;
            }
            return post;
            });
            setPosts(updatedPosts);
        })
        .catch(err => err);
    }, []);

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(`${BaseUrl}/category`)
          .then(response => {
            setCategories(response.data);
          })
          .catch(err => err);
      }, []);               

    const Next = () => {
        if (paginationUrl !== null ){
            let currentPage = Number(paginationUrl)
            currentPage++
            window.location.href = `./blog?pg=${currentPage}`
        } else {
            window.location.href = `./blog?pg=2`
        }
        
    }

    const Previous = () => {
        if (paginationUrl === null || paginationUrl < 1) {
            return
        }
        
        let currentPage = Number(paginationUrl)
        currentPage--
        window.location.href = `./blog?pg=${currentPage}`
    }

    const NextFilter = () => {
        if (paginationUrl !== null ){
            let currentPage = Number(paginationUrl)
            currentPage++
            window.location.href = `./blog?pg=${currentPage}&category=${categoryUrl}`
        } else {
            window.location.href = `./blog?pg=2&category=${categoryUrl}`
        }
        
    }

    const PreviousFilter = () => {
        if (paginationUrl === null || paginationUrl < 1) {
            return
        }
        
        let currentPage = Number(paginationUrl)
        currentPage--
        window.location.href = `./blog?pg=${currentPage}&category=${categoryUrl}`
    }

    if(!paginationUrl) {
        Load()
    } if(paginationUrl) {
        Load(paginationUrl)
    }

    return(
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                {/* <!-- Blog list Start --> */}
                <div className="col-lg-8">

                    <div className="row g-5">
                    {loading && <Error status="500"/>}
                    {!loading && blogs.map((blog, index) => {
                            return (
                            <div key={`blog-${blog.id}`} className="col-md-6 wow slideInUp mb-4" data-wow-delay="0.1s" id={`item-${blog.id}`}>
                                <div className="blog-item bg-light rounded overflow-hidden">
                                <div className="blog-img position-relative overflow-hidden">
                                    <img className="img-fluid border-1 border-top border-start border-end border-gray" src={blog.imageUrl} alt={`imagem-${blog.title}`} style={{ height: '25vh', width: '100vh' }} />
                                    <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href={`blog?category=${blog.categoryName}`}>
                                    {blog.categoryName}
                                    </a>
                                </div>
                                <div className="p-4 border-2 border border-gray">
                                    <div className="d-flex mb-3">
                                    <small className="me-3"><i className="far fa-user text-primary me-2"></i>{blog.userName}</small>
                                    <small><i className="far fa-calendar-alt text-primary me-2"></i>{blog.date}</small>
                                    </div>
                                    <h4 className="mb-3">{blog.title}</h4>
                                    <p>{blog.subtitle}</p>
                                    <a className="text-uppercase" href={`detail?id=${blog.id}`}>
                                    Leia Mais <i className="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                                </div>
                            </div>
                            );
                    })}
                    </div>
                    {loading ? <></> : 
                    <div className="col-12 wow slideInUp" data-wow-delay="0.1s">
                        <nav aria-label="Page navigation">
                          <ul className="pagination pagination-lg m-0">
                            <li className="page-item">
                                <a onClick={categoryUrl ? PreviousFilter : Previous} className="page-link border border-primary rounded-end-circle" 
                                aria-label="Previous" style={{cursor: 'pointer'}} href="#">
                                  <span aria-hidden="true">&laquo;</span>
                                  <span className="sr-only">Previous</span>
                                </a>
                            </li>

                                <div className="d-flex align-items-center text-primary" 
                                style={{cursor: 'pointer'}}  id="pagination-number">
                                </div>

                            <li className="page-item" >
                                <a onClick={categoryUrl ? NextFilter : Next} className="page-link border border-primary rounded-end-circle"
                                aria-label="Next" style={{cursor: 'pointer'}} href="#">
                                  <span aria-hidden="true">&raquo;</span>
                                  <span className="sr-only">Next</span>
                                </a>
                            </li>
                          </ul>
                        </nav>
                    </div>}
                </div>
                {/* <!-- Blog list End --> */}
    
                {/* <!-- Sidebar Start --> */}
                <div className="col-lg-4">
    
                    {/* <!-- Category Start --> */}
                    <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                        <div className="section-title section-title-sm position-relative pb-3 mb-4">
                            <h3 className="mb-0">Categorias</h3>
                        </div>
                            <div className="link-animated d-flex flex-column justify-content-start" id="category-filter">
                                <a className={!categoryUrl ? 'h5 fw-semi-bold bg-dark text-light rounded py-2 px-3 mb-2' : 'h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2'} 
                                href="blog"><i className="bi bi-arrow-right me-2"></i>N/A</a>
                                {categories.map(category => (
                                    <a key={`category-${category.id}`}  href={`blog?category=${category.name}`} 
                                    className={categoryUrl === category.name ? 'h5 fw-semi-bold bg-dark text-light rounded py-2 px-3 mb-2' :'h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2'}>
                                    <i className="bi bi-arrow-right me-2"></i>
                                    {category.name}
                                    </a>
                                ))}
                            </div>
                    </div>
                    {/* <!-- Category End --> */}
    
                    {/* <!-- Recent Post Start --> */}
                    <div className="mb-5 wow slideInUp" data-wow-delay="0.1s" id="recent-post-itens">
                        <div className="section-title section-title-sm position-relative pb-3 mb-4">
                            <h3 className="mb-0">Postagem recente</h3>
                        </div>
                        {posts.map(post => (
                            <a key={`post-${post.id}`} href={`detail?id=${post.id}`} 
                            className="d-flex rounded overflow-hidden mb-3 bg-light border border-2 border-primary" style={{ borderRadius: '200px' }}>
                                <img className="img-fluid" src={post.imageUrl} style={{ width: '100px', height: '100px', objectFit: 'cover' }} alt="" />
                                <span className="h5 fw-semi-bold d-flex align-items-center px-3 mb-0 text-dark">{post.title}</span>
                            </a>
                        ))}
                    </div>
                    {/* <!-- Recent Post End --> */}
    
                    {/* <!-- Image Start --> */}
                    <div className="mb-5 wow slideInUp border border-3 border-primary" data-wow-delay="0.1s">
                        <img src={imgBlog4} alt="" className="img-fluid rounded"/>
                    </div>
                    {/* <!-- Image End --> */}
    
                    {/* <!-- Tags Start --> */}
                    <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                        <div className="section-title section-title-sm position-relative pb-3 mb-4">
                            <h3 className="mb-0">Tags</h3>
                        </div>
                        <div className="d-flex flex-wrap m-n1">
                        {categories.map(category => (
                            <a key={`tag-${category.id}`} href={`blog?category=${category.name}`} 
                            className={categoryUrl === category.name ? 'btn btn-primary m-1' : 'btn btn-light m-1'}>
                            {category.name}
                            </a>
                        ))}
                        </div>
                    </div>
                    {/* <!-- Tags End --> */}
                </div>
                {/* <!-- Sidebar End --> */}
            </div>
        </div>
    </div>
    )
}