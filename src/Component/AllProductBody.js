import React, { useContext,useEffect } from 'react'
import { Link } from "react-router-dom";
import "../css/style2.css"
import Footer from './Footer'
import Header from './Header'
import product1 from '../image/product-1.png';
import NoteContext from '../contextApi/NoteContext'
import CategoryComp from './CategoryComp';
import SingleProduct from './SingleProduct';
// import Slider from "";

function AllProductBody() {
    const Context = useContext(NoteContext)
    const { AllData, AddToCart, AddToWistList } = Context;
    const Category = ["Mobile", "Laptop", "TV", "Headphone", "Smart Watch ", "PenDrive", "Router", "Camera", "Printer", "Monitor"]
 
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <Header />
            <h1 className="heading"> {" "} our <span>products</span>{" "} </h1>
            <h1 className="heading heading2 "> {" "} our <span>products</span>{" "} </h1>
            <div class="navbar2 magic-shadow "> 
                <div class=" flex justify-center flex-wrap">
              
                <a className='active' >All Products</a>
                    {Category.map((a) => <CategoryComp a={a} />)}
                   

                </div>
            </div>
            <div className="features container ">
                <div className=" box-container">
                    {AllData.map(data => {

                        return (
                            <SingleProduct data={data} />
                        )
                    })}


                </div>
            </div>
            <Footer />
        </>
    )
}

export default AllProductBody