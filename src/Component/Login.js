import React,{useContext} from 'react';
import Footer from './Footer';
import Header from './Header';
// import '../css/Login.css'
import { Link,useNavigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import NoteContext from '../contextApi/NoteContext'
import swal from 'sweetalert';

let schema = yup.object({
    password: yup.string().required(),
    // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    // "Must Contain one Character, one Uppercase, one Lowercasse, one Number and one Special character")

    email: yup.string()
        .matches(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/, "Write clearly email")
        .required()
});

function Login() {
    let navigate = useNavigate();
    const Context  = useContext(NoteContext)
    const { Login } = Context;
    function Alogin() {
        navigate("/")
        swal("login successful", "", "success")
    }
    return (
        <>
            <Header />
            <div className="main-w3layouts wrapper">
                <h1 className="heading mt-7">
                    {" "}
                    please <span>Login</span>{" "}
                </h1>
                <div className="main-agileinfo">
                    <div className="agileits-top">
                        <Formik validationSchema={schema} initialValues={{
                            email: "",
                            password: ""
                        }}
                            onSubmit={a=>{Login(a.email,a.password,Alogin)}
                                 }>
                            <Form>
                                <label htmlFor="text" className='labelText' style={{ fontSize: "2rem" }}>Your Email</label>
                                <Field
                                    className="text" style={{ color: "#000" }}
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required=""
                                />
                                <span style={{ color: "Red", fontSize: "16px"}}><ErrorMessage name="email" /> </span>
                                <br />
                                <br />
                                <label htmlFor="text" className='labelText' style={{ fontSize: "2rem" }}>Your Password</label>
                                <Field
                                    className="text" style={{ color: "#000" }}
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    required=""
                                />
                                <span style={{ color: "Red", fontSize: "16px" }}><ErrorMessage name="password" /></span>
                                <br />
                                <div className="wthree-text">
                                    <label className="anim">
                                        <input type="checkbox" className="checkbox" required="" />
                                        <span style={{ color: "black" }}>I Agree To The Terms &amp; Conditions</span>
                                    </label>
                                    <div className="clear"> </div>
                                </div>
                                <input type="submit" defaultValue="SIGNUP" />
                            </Form>
                        </Formik>
                        <p style={{ color: "black" }}>
                            Are you New? <Link to="../Register"> Register Now!</Link>
                        </p>
                    </div>
                </div>
                {/* copyright */}

                {/* //copyright */}
                <ul className="colorlib-bubbles">
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                </ul>
            </div>
            {/* //main */}
            <Footer />
        </>

    )
}

export default Login