import React from "react";
import featureimage3 from '../image/feature-img-3.png';
import featureimage2 from '../image/feature-img-2.png';
import mobile1 from '../image/mobile1.jfif';

function Feature() {
    return (
        <>
            <section className="features" id="features">
                <h1 className="heading">
                    {" "}
                    our <span>features</span>{" "}
                </h1>
                <div className="box-container">
                    <div className="box">
                        <img src={mobile1} alt="feature image" />
                        <h3>New Product</h3>
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
        </>
    )
}

export default Feature