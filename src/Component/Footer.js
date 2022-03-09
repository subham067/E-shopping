import React from "react";
import { Link } from "react-router-dom";
import swal from 'sweetalert';


function Footer() {
    function submit(e) {
        e.preventDefault()
        swal("Welcome!", "You are subscribed!", "success");
    }

    return (
        <React.Fragment>
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
                            {/* <a href="https://www.facebook.com/" target="_blank" className="facebookk fab fa-facebook-f " /> */}
                            <Link to="https://www.facebook.com/" target="_blank" className="facebook fab fa-facebook-f "></Link>
                            <Link to="https://twitter.com/"target="_blank" className="twitter fab fa-twitter "></Link>
                            <Link to="https://www.facebook.com/"target="_blank" className="instagram fab fa-instagram "></Link>
                            <Link to="https://www.facebook.com/"target="_blank" className="linkedin fab fa-linkedin "></Link>
                            <Link to="https://www.facebook.com/"target="_blank" className="whatsapp fab fa-whatsapp "></Link>
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
                            <i className="fas fa-envelope" /> test@gmail.com{" "}
                        </a>
                        <a href="#" className="links">
                            {" "}
                            <i className="fas fa-map-marker-alt" /> Kolkata, West Bengal{" "}
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
                        <h3>Newsletter</h3>
                        <p>Subscribe for latest updates</p>
                        <form onSubmit={submit}>
                            <input type="email" placeholder="Enter Your Email id" className="email" required />
                            <input type="submit" className="btn"/>
                        </form>
                        <img src="image/payment.png" className="payment-img" alt="" />
                    </div>
                </div>
                <div className="credit">
                    {" "}
                    created by <span> Subham Ghosh, Sohom Saha </span> | all rights reserved{" "}
                </div>
            </section>
            {/* footer section ends */}
        </React.Fragment>
    )
}

export default Footer 