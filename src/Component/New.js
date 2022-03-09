import React from 'react';
import '../css/style.css';

// import '../js/script.js'

import featureimage1 from '../image/feature-img-1.png';
import featureimage2 from '../image/feature-img-2.png';
import featureimage3 from '../image/feature-img-3.png';
import product1 from '../image/product-1.png';
import product2 from '../image/product-2.png';
import product3 from '../image/product-3.png';
import product4 from '../image/product-4.png';
import product5 from '../image/product-5.png';
import product6 from '../image/product-6.png';
import product7 from '../image/product-7.png';
import product8 from '../image/product-8.png';
import cartimage1 from '../image/cart-img-1.png';
import cartimage2 from '../image/cart-img-2.png';
import cartimage3 from '../image/cart-img-3.png';
import blog1 from '../image/blog-1.jpg';
import blog2 from '../image/blog-2.jpg';
import blog3 from '../image/blog-3.jpg';
import cat1 from '../image/cat-1.png';
import cat2 from '../image/cat-2.png';
import cat3 from '../image/cat-3.png';
import cat4 from '../image/cat-4.png';


function New() {
    return (
        <div>
            {/* header section starts  */}
            <header className="header">
                <a href="#" className="logo">
                    {" "}
                    <i className="fas fa-shopping-basket" /> groco{" "}
                </a>
                <nav className="navbar">
                    <a href="#home">home</a>
                    <a href="#features">features</a>
                    <a href="#products">products</a>
                    <a href="#categories">categories</a>
                    <a href="#review">review</a>
                    <a href="#blogs">blogs</a>
                </nav>
                <div className="icons">
                    <div className="fas fa-bars" id="menu-btn" />
                    <div className="fas fa-search" id="search-btn" />
                    <div className="fas fa-shopping-cart" id="cart-btn" />
                    <div className="fas fa-user" id="login-btn" />
                </div>
                <form action="" className="search-form">
                    <input type="search" id="search-box" placeholder="search here..." />
                    <label htmlFor="search-box" className="fas fa-search" />
                </form>
                <div className="shopping-cart">
                    <div className="box">
                        <i className="fas fa-trash" />
                        <img src={cartimage1} alt="cart-image-1" />
                        <div className="content">
                            <h3>watermelon</h3>
                            <span className="price">$4.99/-</span>
                            <span className="quantity">qty : 1</span>
                        </div>
                    </div>
                    <div className="box">
                        <i className="fas fa-trash" />
                        <img src={cartimage2} alt="cart-image-2" />
                        <div className="content">
                            <h3>onion</h3>
                            <span className="price">$4.99/-</span>
                            <span className="quantity">qty : 1</span>
                        </div>
                    </div>
                    <div className="box">
                        <i className="fas fa-trash" />
                        <img src={cartimage3} alt="cart-image-3" />
                        <div className="content">
                            <h3>chicken</h3>
                            <span className="price">$4.99/-</span>
                            <span className="quantity">qty : 1</span>
                        </div>
                    </div>
                    <div className="total"> total : $19.69/- </div>
                    <a href="#" className="btn">
                        checkout
                    </a>
                </div>
                <form action="" className="login-form">
                    <h3>login now</h3>
                    <input type="email" placeholder="your email" className="box" />
                    <input type="password" placeholder="your password" className="box" />
                    <p>
                        forget your password <a href="#">click here</a>
                    </p>
                    <p>
                        don't have an account <a href="#">create now</a>
                    </p>
                    <input type="submit" defaultValue="login now" className="btn" />
                </form>
            </header>
            {/* header section ends */}

            {/* home section starts  */}
            <section className="home" id="home">
                <div className="content">
                    <h3>
                        fresh and <span>organic</span> products for your
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero
                        nostrum veniam facere tempore nisi.
                    </p>
                    <a href="#" className="btn">
                        shop now
                    </a>
                </div>
            </section>
            {/* home section ends */}

            {/* features section starts  */}
            <section className="features" id="features">
                <h1 className="heading">
                    {" "}
                    our <span>features</span>{" "}
                </h1>
                <div className="box-container">
                    <div className="box">
                        <img src={featureimage1} alt="feature image" />
                        <h3>fresh and organic</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
                            earum!
                        </p>
                        <a href="#" className="btn">
                            read more
                        </a>
                    </div>
                    <div className="box">
                        <img src={featureimage2} alt="feature image 2" />
                        <h3>free delivery</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
                            earum!
                        </p>
                        <a href="#" className="btn">
                            read more
                        </a>
                    </div>
                    <div className="box">
                        <img src={featureimage3} alt="feature image 3" />
                        <h3>easy payments</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
                            earum!
                        </p>
                        <a href="#" className="btn">
                            read more
                        </a>
                    </div>
                </div>
            </section>
            {/* features section ends */}
            {/* products section starts  */}
            <section className="products" id="products">
                <h1 className="heading">
                    {" "}
                    our <span>products</span>{" "}
                </h1>
                <div className="swiper product-slider">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide box">
                            <img src={product1} alt="product 1" />
                            <h3>fresh orange</h3>
                            <div className="price"> $4.99/- - 10.99/- </div>
                            <div className="stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                            </div>
                            <a href="#" className="btn">
                                add to cart
                            </a>
                        </div>
                        <div className="swiper-slide box">
                            <img src={product2} alt="product 2" />
                            <h3>fresh onion</h3>
                            <div className="price"> $4.99/- - 10.99/- </div>
                            <div className="stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                            </div>
                            <a href="#" className="btn">
                                add to cart
                            </a>
                        </div>
                        <div className="swiper-slide box">
                            <img src={product3} alt="product 3" />
                            <h3>fresh meat</h3>
                            <div className="price"> $4.99/- - 10.99/- </div>
                            <div className="stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                            </div>
                            <a href="#" className="btn">
                                add to cart
                            </a>
                        </div>
                        <div className="swiper-slide box">
                            <img src={product4} alt="product 4" />
                            <h3>fresh cabbage</h3>
                            <div className="price"> $4.99/- - 10.99/- </div>
                            <div className="stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                            </div>
                            <a href="#" className="btn">
                                add to cart
                            </a>
                        </div>
                    </div>
                </div>
                <div className="swiper product-slider">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide box">
                        <img src={product5} alt="product 5" />
                            <h3>fresh potato</h3>
                            <div className="price"> $4.99/- - 10.99/- </div>
                            <div className="stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                            </div>
                            <a href="#" className="btn">
                                add to cart
                            </a>
                        </div>
                        <div className="swiper-slide box">
                        <img src={product6} alt="product 6" />
                            <h3>fresh avocado</h3>
                            <div className="price"> $4.99/- - 10.99/- </div>
                            <div className="stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                            </div>
                            <a href="#" className="btn">
                                add to cart
                            </a>
                        </div>
                        <div className="swiper-slide box">
                            <img src={product7} alt="product 7" />
                            <h3>fresh carrot</h3>
                            <div className="price"> $4.99/- - 10.99/- </div>
                            <div className="stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                            </div>
                            <a href="#" className="btn">
                                add to cart
                            </a>
                        </div>
                        <div className="swiper-slide box">
                            <img src={product8} alt="product 8" />
                            <h3>green lemon</h3>
                            <div className="price"> $4.99/- - 10.99/- </div>
                            <div className="stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                            </div>
                            <a href="#" className="btn">
                                add to cart
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* products section ends */}
            {/* categories section starts  */}
            <section className="categories" id="categories">
                <h1 className="heading">
                    {" "}
                    product <span>categories</span>{" "}
                </h1>
                <div className="box-container">
                    <div className="box">
                        <img src={cat1} alt="cat 1" />
                        <h3>vegitables</h3>
                        <p>upto 45% off</p>
                        <a href="#" className="btn">
                            shop now
                        </a>
                    </div>
                    <div className="box">
                    <img src={cat2} alt="cat 2" />
                        <h3>fresh fruits</h3>
                        <p>upto 45% off</p>
                        <a href="#" className="btn">
                            shop now
                        </a>
                    </div>
                    <div className="box">
                        <img src={cat3} alt="cat 3" />
                        <h3>dairy products</h3>
                        <p>upto 45% off</p>
                        <a href="#" className="btn">
                            shop now
                        </a>
                    </div>
                    <div className="box">
                        <img src={cat4} alt="cat 4" />
                        <h3>fresh meat</h3>
                        <p>upto 45% off</p>
                        <a href="#" className="btn">
                            shop now
                        </a>
                    </div>
                </div>
            </section>
            {/* categories section ends */}
            {/* review section starts  */}
            <section className="review" id="review">
                <h1 className="heading">
                    {" "}
                    customer's <span>review</span>{" "}
                </h1>
                <div className="swiper review-slider">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide box">
                            <img src="image/pic-1.png" alt="" />
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde sunt
                                fugiat dolore ipsum id est maxime ad tempore quasi tenetur.
                            </p>
                            <h3>john deo</h3>
                            <div className="stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                            </div>
                        </div>
                        <div className="swiper-slide box">
                            <img src="image/pic-2.png" alt="" />
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde sunt
                                fugiat dolore ipsum id est maxime ad tempore quasi tenetur.
                            </p>
                            <h3>john deo</h3>
                            <div className="stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                            </div>
                        </div>
                        <div className="swiper-slide box">
                            <img src="image/pic-3.png" alt="" />
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde sunt
                                fugiat dolore ipsum id est maxime ad tempore quasi tenetur.
                            </p>
                            <h3>john deo</h3>
                            <div className="stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                            </div>
                        </div>
                        <div className="swiper-slide box">
                            <img src="image/pic-4.png" alt="" />
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde sunt
                                fugiat dolore ipsum id est maxime ad tempore quasi tenetur.
                            </p>
                            <h3>john deo</h3>
                            <div className="stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* review section ends */}
            {/* blogs section starts  */}
            <section className="blogs" id="blogs">
                <h1 className="heading">
                    {" "}
                    our <span>blogs</span>{" "}
                </h1>
                <div className="box-container">
                    <div className="box">
                        <img src={blog1} alt="blog 1" />
                        <div className="content">
                            <div className="icons">
                                <a href="#">
                                    {" "}
                                    <i className="fas fa-user" /> by user{" "}
                                </a>
                                <a href="#">
                                    {" "}
                                    <i className="fas fa-calendar" /> 1st may, 2021{" "}
                                </a>
                            </div>
                            <h3>fresh and organic vegitables and fruits</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                                expedita.
                            </p>
                            <a href="#" className="btn">
                                read more
                            </a>
                        </div>
                    </div>
                    <div className="box">
                        <img src={blog2} alt="blog 2" />
                        <div className="content">
                            <div className="icons">
                                <a href="#">
                                    {" "}
                                    <i className="fas fa-user" /> by user{" "}
                                </a>
                                <a href="#">
                                    {" "}
                                    <i className="fas fa-calendar" /> 1st may, 2021{" "}
                                </a>
                            </div>
                            <h3>fresh and organic vegitables and fruits</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                                expedita.
                            </p>
                            <a href="#" className="btn">
                                read more
                            </a>
                        </div>
                    </div>
                    <div className="box">
                        <img src={blog3} alt="blog 3" />
                        <div className="content">
                            <div className="icons">
                                <a href="#">
                                    {" "}
                                    <i className="fas fa-user" /> by user{" "}
                                </a>
                                <a href="#">
                                    {" "}
                                    <i className="fas fa-calendar" /> 1st may, 2021{" "}
                                </a>
                            </div>
                            <h3>fresh and organic vegitables and fruits</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                                expedita.
                            </p>
                            <a href="#" className="btn">
                                read more
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* blogs section ends */}
            {/* footer section starts  */}
            <section className="footer">
                <div className="box-container">
                    <div className="box">
                        <h3>
                            {" "}
                            groco <i className="fas fa-shopping-basket" />{" "}
                        </h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
                            saepe.
                        </p>
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f" />
                            <a href="#" className="fab fa-twitter" />
                            <a href="#" className="fab fa-instagram" />
                            <a href="#" className="fab fa-linkedin" />
                        </div>
                    </div>
                    <div className="box">
                        <h3>contact info</h3>
                        <a href="#" className="links">
                            {" "}
                            <i className="fas fa-phone" /> +123-456-7890{" "}
                        </a>
                        <a href="#" className="links">
                            {" "}
                            <i className="fas fa-phone" /> +111-222-3333{" "}
                        </a>
                        <a href="#" className="links">
                            {" "}
                            <i className="fas fa-envelope" /> shaikhanas@gmail.com{" "}
                        </a>
                        <a href="#" className="links">
                            {" "}
                            <i className="fas fa-map-marker-alt" /> mumbai, india - 400104{" "}
                        </a>
                    </div>
                    <div className="box">
                        <h3>quick links</h3>
                        <a href="#" className="links">
                            {" "}
                            <i className="fas fa-arrow-right" /> home{" "}
                        </a>
                        <a href="#" className="links">
                            {" "}
                            <i className="fas fa-arrow-right" /> features{" "}
                        </a>
                        <a href="#" className="links">
                            {" "}
                            <i className="fas fa-arrow-right" /> products{" "}
                        </a>
                        <a href="#" className="links">
                            {" "}
                            <i className="fas fa-arrow-right" /> categories{" "}
                        </a>
                        <a href="#" className="links">
                            {" "}
                            <i className="fas fa-arrow-right" /> review{" "}
                        </a>
                        <a href="#" className="links">
                            {" "}
                            <i className="fas fa-arrow-right" /> blogs{" "}
                        </a>
                    </div>
                    <div className="box">
                        <h3>newsletter</h3>
                        <p>subscribe for latest updates</p>
                        <input type="email" placeholder="your email" className="email" />
                        <input type="submit" defaultValue="subscribe" className="btn" />
                        <img src="image/payment.png" className="payment-img" alt="" />
                    </div>
                </div>
                <div className="credit">
                    {" "}
                    created by <span> mr. web designer </span> | all rights reserved{" "}
                </div>
            </section>
            {/* footer section ends */}




        </div>
    )
}

export default New