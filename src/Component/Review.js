import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import pic1 from '../image/pic-1.png';
import pic2 from '../image/pic-2.png';
import pic3 from '../image/pic-3.png';
import pic4 from '../image/pic-4.png';
import Header from "./Header";
import Footer from "./Footer";

function Review() {
    const Array =  {
            loop:true,
            spaceBetween: 20,
            autoplay: {
                delay: 7500,
                disableOnInteraction: true,
            },
            centeredSlides: true,
            breakpoints: {
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1020: {
                slidesPerView: 3,
              },
            },
        }
    return (
        <>
            {/* <Header /> */}
            {/* review section starts  */}
            <section className="review" id="review">
                <h1 className="heading">
                    {" "}
                    customer's <span>review</span>{" "}
                </h1>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    {...Array}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="swiper review-slider"
                >
                    
                    
                    {/* <div className="swiper review-slider"> */}
                        {/* <div className="swiper-wrapper"> */}
                            <SwiperSlide className="swiper-slide box">
                                <img src={pic1} alt="pic 1" />
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
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide box">
                                <img src={pic2} alt="pic 2" />
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
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide box">
                                <img src={pic3} alt="pic 3" />
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
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide box">
                                <img src={pic4} alt="pic 4" />
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
                            </SwiperSlide>
                        {/* </div> */}
                   
                    
                </Swiper>
            </section>
            {/* review section ends */}

            {/* <Footer /> */}
        </>
    )
}

export default Review