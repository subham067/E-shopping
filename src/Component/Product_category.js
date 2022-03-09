import React from "react";

import mobile from '../image/mobile.jpg';
import laptop from '../image/laptop.jpg';
import tv from '../image/tv.jpg';
import airpods from '../image/airpods.jpg';


function Product_category(){
    return(
        <>
            {/* categories section starts  */}
            <section className="categories" id="categories">
                <h1 className="heading">
                    {" "}
                    product <span>categories</span>{" "}
                </h1>
                <div className="box-container">
                    <div className="box">
                        <img src={mobile} alt="cat 1" />
                        <h3>mobile</h3>
                        <p>upto 45% off</p>
                        <a href="#" className="btn">
                            shop now
                        </a>
                    </div>
                    <div className="box">
                    <img src={laptop} alt="cat 2" />
                        <h3>laptop</h3>
                        <p>upto 45% off</p>
                        <a href="#" className="btn">
                            shop now
                        </a>
                    </div>
                    <div className="box">
                        <img src={tv} alt="cat 3" />
                        <h3>TV</h3>
                        <p>upto 45% off</p>
                        <a href="#" className="btn">
                            shop now
                        </a>
                    </div>
                    <div className="box">
                        <img src={airpods} alt="cat 4" />
                        <h3>airpods</h3>
                        <p>upto 45% off</p>
                        <a href="#" className="btn">
                            shop now
                        </a>
                    </div>
                </div>
            </section>
            {/* categories section ends */}
        </>
    )
}

export default Product_category