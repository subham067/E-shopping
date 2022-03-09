import React, { useContext } from "react";

import product1 from '../image/product-1.png';
import product2 from '../image/product-2.png';
import product3 from '../image/product-3.png';
import product4 from '../image/product-4.png';
import product5 from '../image/product-5.png';
import product6 from '../image/product-6.png';
import product7 from '../image/product-7.png';
import product8 from '../image/product-8.png';
import NoteContext from '../contextApi/NoteContext'
import SingleProduct from './SingleProduct';

import { Swiper, SwiperSlide } from 'swiper/react';


function Product() {
    const Context = useContext(NoteContext)
    const { pData } = Context;
    const Array = {
        loop: true,
        spaceBetween: 20,
        autoplay: {
            delay: 500,
            disableOnInteraction: true,
        },
        // centeredSlides: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1020: {
                slidesPerView: 4,
            },
        },
    }
    return (
        <>
            <section className="products" id="products">
                <h1 className="heading">
                    {" "}
                    our <span>products</span>{" "}
                </h1>
                <Swiper
                    {...Array}

                    className="mySwiper  product-slider"
                >
                    {pData.map((d) => {
                        if (d.Category === "Mobile") {
                            var newstr = d.name.substring(0, 5);
                            return (
                                <SwiperSlide className="swiper-slide ">
                                    <SingleProduct data={d} />
                                </SwiperSlide>
                            )
                        }
                    })}


                </Swiper>
                <Swiper

                    {...Array}

                    className="mySwiper  product-slider"
                >

                    {pData.map((d) => {
                        if (d.Category === "TV") {
                            var newstr = d.name.substring(0, 15);
                            return (
                                <SwiperSlide className="swiper-slide ">
                                    <SingleProduct data={d} />
                                </SwiperSlide>
                            )
                        }
                    })}


                </Swiper>
            </section>
        </>
    )
}

export default Product