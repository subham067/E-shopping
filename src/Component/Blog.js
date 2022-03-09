import React from "react";

import blog1 from '../image/blog-1.jpg';
import blog2 from '../image/blog-2.jpg';
import blog3 from '../image/blog-3.jpg';
import Blog_sub from "./Blog_sub";

import mobile from '../image/mobile.jpg';
import laptop from '../image/laptop.jpg';
import tv from '../image/tv.jpg';
import airpods from '../image/airpods.jpg';
import Header from "./Header";
import Footer from "./Footer";


function Blog(){
    const Data = [
        {
            image: mobile,
            name: "by User",
            time: "01-01-2022",
            title: "Best Mobile",
            desc: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veniam, Expedita",
            Read_More: ""
        },
        {
            image: laptop,
            name: "by User",
            time: "01-01-2022",
            title: "Best Laptop",
            desc: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veniam, Expedita",
            Read_More: ""
        },
        {
            image: tv,
            name: "by User",
            time: "01-01-2022",
            title: "Best TV",
            desc: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veniam, Expedita",
            Read_More: ""
        }]
    return(
        <>
        {/* <Header /> */}
        {/* blogs section starts  */}
        <section className="blogs" id="blogs">
                <h1 className="heading">
                    {" "}
                    our <span>blogs</span>{" "}
                </h1>
                <div className="box-container">
                    {Data.map(d=>{
                        return(
                            <Blog_sub d={d}/>
                        )
                    })}
                    
                </div>
            </section>
            {/* blogs section ends */}
            {/* <Footer /> */}
        </>
    )
}

export default Blog