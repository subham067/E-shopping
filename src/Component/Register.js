import React,{useContext}  from 'react';
import Footer from './Footer';
import Header from './Header';
import '../css/Register.css';
import {Link,useNavigate } from 'react-router-dom';
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
        .required(),
    full_name: yup.string().required(),
    mobile:yup.number()
    .min(1000000000,"Phone Number Must Be 10 digit")
    .max(9999999999,"Phone Number Must Be 10 digit")
    .required(),
});

function Register() {
    let navigate = useNavigate();
    const Context  = useContext(NoteContext)
    const { Register } = Context;
    function changePage() {
        navigate("/")
        swal("Register successful", "", "success")
    }
    return (
        <>
           <Header/>
            <div className="main-w3layouts wrapper">
            <h1 className="heading mt-7">
                    {" "}
                    please  <span>Register</span>{" "}
                </h1>
                <div className="main-agileinfo">
                    <div className="agileits-top">
                    <Formik validationSchema={schema} initialValues={{
                        full_name:"",
                        email:"",
                        mobile:"",
                        password:""         
                        
                        }} 
                        onSubmit={a=>Register(a.full_name,a.email,a.mobile,a.password,changePage)}>
                        <Form>
                            <label htmlFor="text" className='labelText' style={{fontSize:"2rem"}}>Full Name</label>
                            <Field
                                className="text" style={{ color: "#000" }}
                                type="text"
                                name="full_name"
                                placeholder="Full Name"
                                required=""
                            />
                            <span style={{color: "Red", fontSize: "16px"}}><ErrorMessage name="full_name" /> </span><br />
                            <label htmlFor="text" className='labelText' style={{fontSize:"2rem"}}>Enter Email</label>
                            <Field
                                className="text" style={{ color: "#000" }}
                                type="email"
                                name="email"
                                placeholder="Email"
                                required=""
                            />
                            <span style={{color: "Red", fontSize: "16px"}}><ErrorMessage name="email" /> </span><br />
                            <label htmlFor="text" className='labelText' style={{fontSize:"2rem"}}> Mobile Number</label>                       
                            <Field
                                className="text" style={{ color: "#000" }}
                                type="number"
                                name="mobile"
                                placeholder="MobileNumber"
                                required=""
                            />
                            <span style={{color: "Red", fontSize: "16px"}}><ErrorMessage name="mobile" /> </span><br />
                            <label htmlFor="text" className='labelText' style={{fontSize:"2rem"}}> password</label>
                            <Field
                                className="text " style={{ color: "#000" }}
                                type="password"
                                name="password"
                                placeholder="Password"
                                required=""
                            />
                            <span style={{color: "Red", fontSize: "16px"}}><ErrorMessage name="password" /> </span><br />
                            <div className="wthree-text">
                                <label className="anim">
                                    <Field type="checkbox" className="checkbox" required="" />
                                    <span style={{color:"black"}}>I Agree To The Terms &amp; Conditions</span>
                                </label>
                                <div className="clear"> </div>
                            </div>
                            
                            <input type="submit" defaultValue="SIGNUP" />
                        </Form>
                        </Formik>
                        <p style={{color:"black"}}>
                            Don't have an Account? <Link to="../Login"> Login Now!</Link>
                        </p>
                    </div>
                </div>
              
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
            <Footer/>
        </>

    )
}

export default Register