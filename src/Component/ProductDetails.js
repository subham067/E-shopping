import React, { useRef, useState, useContext, useEffect } from "react";
import Footer from './Footer'
import Header from './Header'
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import NoteContext from '../contextApi/NoteContext'

import SingleProduct from './SingleProduct';

function ProductDetails({ data }) {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const Context = useContext(NoteContext)
    const { pData, AddToCart } = Context;
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
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [data])
    return (
        <>
            <Header />

            <div className="container">
                <h1 className="heading mt-7">
                    {" "}
                    Product <span>details</span>{" "}
                </h1>
                <div className="row pDaidel">
                    <div className="col-sm-12 col-lg-6">

                        <Swiper
                            style={{
                                "--swiper-navigation-color": "#fff",
                                "--swiper-pagination-color": "#fff",
                            }}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2 imgSlider2"
                        >
                            <SwiperSlide className="imgSliderdiv">
                                <img src={data.img1} />
                            </SwiperSlide>
                            <SwiperSlide className="imgSliderdiv">
                                <img src={data.img2} />
                            </SwiperSlide>
                            <SwiperSlide className="imgSliderdiv">
                                <img src={data.img3} />
                            </SwiperSlide>

                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={3}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper ImgSlider"
                        >
                            <SwiperSlide>
                                <img src={data.img1} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={data.img2} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={data.img3} />
                            </SwiperSlide>

                        </Swiper>
                    </div>
                    <div className="col-sm-12 col-lg-6 position-relative">
                        <h2 className="mt-5 w-75">{data.name}</h2>
                        <h1 className="mt-5 text-bold">₹ {data.Prize}</h1>
                        <h4 className="mt-5 w-75">
                            {data.Desc}
                        </h4>
                        <h2 className="text-success">Stock Left -{data.Stock}</h2>
                        <div className="btnAll"> <a className="btn" onClick={() => AddToCart(data.id)}>
                            add to cart
                        </a>
                            {/* <a href="#" className="btn mx-5">
                                Order Now
                            </a> */}
                        </div>

                    </div>

                </div>
            </div>
            <section className="products" id="products">
                <h1 className="heading">
                    {" "}
                    Releted <span>products</span>{" "}
                </h1>
                <Swiper
                    slidesPerView={4}
                    {...Array}
                    className="mySwiper  product-slider"
                >
                    {pData.map((d) => {
                        if (d.Category === data.Category) {
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

            <Footer />
        </>
    )
}

export default ProductDetails;