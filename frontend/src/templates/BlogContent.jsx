import React, { useState, useEffect }  from "react"
import { BaseUrl } from '../BaseUrl'
import axios from 'axios'
import imgBlog4 from '../img/blog-4.jpg'
import imgBlog2 from '../img/blog-2.jpg'

export default function BlogContent() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const [state, setState] = useState({
        posts: [],
        blogData: {},
        categories: []
    });

    const { posts, blogData, categories } = state;

    useEffect(() => {
        // Obtendo os blogs pelo id
        axios.get(`${BaseUrl}/blogs/${id}`)
        .then(response => {
            const blogs = response.data;
            if ( blogs.title === undefined || blogs.imageUrl === undefined ||
                blogs.content === undefined || blogs.userName === undefined ) 
                {window.location.href = './blog'}
            if (id) {
                const titleBlog = document.getElementById('title-blog');
                titleBlog.classList.remove('text-danger');
                setState(prevState => ({ ...prevState, blogData: blogs}));
            } else {
                window.location.href = './blog';
            }
        })
        .catch(err => window.location.href = './blog')

        // Obtendo os blogs de Forma Ordenada
        axios.get(`${BaseUrl}/blogs/orderby`)
        .then(response => {
            const updatedPosts = response.data.blog.map(post => {
            if (!post.imageUrl) {
                post.imageUrl = imgBlog2;
            }
            return post;
            });
            setState(prevState => ({ ...prevState, posts: updatedPosts}));
        })
        .catch(err => console.log(err));

        // Obtendo as Categorias
        axios.get(`${BaseUrl}/category`)
          .then(response => {
            setState(prevState => ({ ...prevState, categories: response.data}));
          })
          .catch(err => console.log(err));
    }, [id]);

    return (
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-8">
                    {/* <!-- Blog Detail Start --> */}
                        <div className="mb-5">
                            <img className="img-fluid w-100 rounded-3 border border-gray mb-0" 
                            src={blogData.imageUrl ? blogData.imageUrl : 
                            'https://gumlet.assettype.com/newslaundry%2F2020-12%2F79605f3f-caeb-4d5b-965b-0feba01f911b%2FRetraction_in_2020_AI.jpg?auto=format%2Ccompress&fit=max&format=webp&w=480&dpr=2.6'} alt=""/>
                            <hr className="text-dark mt-5 mb-4"/>
                            <div className="d-flex justify-content-between my-2">
                                <div className="d-flex align-self-stretch">
                                        <i className="bi bi-person text-danger m-1 mx-2 fs-5"></i>
                                    <span className="text-dark m-1 fs-5">
                                        {blogData.userName ? blogData.userName : '----'}
                                    </span>
                                </div>
                                <div className="d-flex align-self-stretch">
                                        <i className="bi bi-calendar text-danger m-1 mx-2 fs-5"></i>
                                    <span className="text-dark m-1 fs-5">
                                        {blogData.date ? blogData.date : '----'}
                                    </span>
                                </div>
                                <a className="text-white bg-primary rounded-3 py-1 px-4 fs-5" href={`blog?category=${blogData.categoryName}`}>
                                    {blogData.categoryName ? blogData.categoryName : '----'}
                                </a>
                            </div>
                            <h1 className="d-flex justify-content-center text-primary my-5 display-4 text-danger" id="title-blog">
                            {blogData.title ? blogData.title : 'Error 404'}</h1>
                            <div className="text-dark lead" 
                            dangerouslySetInnerHTML={{ __html: blogData.content }}>
                            </div>
                        </div>
                    {/* <!-- Blog Detail End --> */}
                </div>
    
                {/* <!-- Sidebar Start --> */}
                <div className="col-lg-4">
                    {/* <!-- Category Start --> */}
                    <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                        <div className="section-title section-title-sm position-relative pb-3 mb-4">
                            <h3 className="mb-0">Categorias</h3>
                        </div>
                        <div className="link-animated d-flex flex-column justify-content-start" id="category-filter">
                            <div className="link-animated d-flex flex-column justify-content-start" id="category-filter">
                            <a className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="blog"><i className="bi bi-arrow-right me-2"></i>N/A</a>
                            {categories.map(category => (
                                    <a key={`tag-${category.id}`}   href={`blog?category=${category.name}`} className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2">
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
                            <a key={`tag-${category.id}`}  href={`blog?category=${category.name}`} className="btn btn-light m-1">
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
    </div>
    )
}