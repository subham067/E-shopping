import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import NoteContext from '../contextApi/NoteContext'
import OrderItem from './OrderItem'

function Order() {
    const Context = useContext(NoteContext)
    const { AllUserData, logedIn } = Context;
    const Navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <Header />
            <h1 className="heading mt-7">  Your <span>Order</span> </h1>
            {logedIn ?
                <>
                    <div className="container orderPage d-none d-md-block	d-lg-block">
                        <div className="shopping-cart  " >
                            <div className="item1 item1order">

                                <div className="description ">
                                    <h3>Item Name</h3>
                                </div>
                                <div className="total-price">quantity</div>
                                <div className="buttons" >
                                    <h3>Total Price</h3>
                                </div>
                                <div className="buttons" >
                                    {/* <h4>Order Date</h4><br /> */}
                                    <h3>Order Date</h3>
                                </div>

                                <div className="total-price">Status</div>

                            </div>
                        </div>
                        {AllUserData.PendingOrder.map((d) => {
                            let NameArr = d.productName.split(" ")
                        
                            return (
                                <div className="shopping-cart  " >
                                    <div className="item1">

                                        <div className="description ">
                                            {NameArr[0] + " " + NameArr[1] + " " + NameArr[2] + " " + NameArr[3] + " " + NameArr[4] + " " + NameArr[5] + " " + NameArr[6] + " " + NameArr[7]}
                                            {/* <span>Mobile</span> */}
                                        </div>
                                        <div className="total-price">{d.stock}</div>
                                        <div className="buttons" >
                                            <h3>{d.price.toFixed(2)}</h3>
                                        </div>
                                        <div className="buttons" >
                                            {/* <h4>Order Date</h4><br /> */}
                                            <h3>{d.OrderDate.split(",")[0]}</h3>
                                        </div>

                                        <div className="total-price text-danger">pending</div>

                                    </div>
                                </div>
                            )
                        })}
                        {AllUserData.UserOrder.map((d) => {
                            let NameArr = d.productName.split(" ")
                            return (
                                <div className="shopping-cart  " >
                                    <div className="item1">

                                        <div className="description descriptionOrder">
                                            {NameArr[0] + " " + NameArr[1] + " " + NameArr[2] + " " + NameArr[3] + " " + NameArr[4] + " " + NameArr[5] + " " + NameArr[6] + " " + NameArr[7]}
                                           
                                        </div>
                                        <div className="total-price">{d.stock}</div>
                                        <div className="buttons" >
                                            <h3>{d.price.toFixed(2)}</h3>
                                        </div>
                                        <div className="buttons" >
                                            <h3>{d.OrderDate.split(",")[0]}</h3>
                                        </div>

                                        <div className="total-price text-success">success</div>

                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <div className="accordion 	d-md-none" id="accordionExample">
                    {AllUserData.PendingOrder.map((d) => <OrderItem d={d} s="pending" />)}
                    {AllUserData.UserOrder.map((d) => <OrderItem d={d} s="success" />)}




                        {/* <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                >
                                    Accordion Item #2
                                </button>
                            </h2>
                            <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden
                                    by default, until the collapse plugin adds the appropriate classes that
                                    we use to style each element. These classes control the overall
                                    appearance, as well as the showing and hiding via CSS transitions. You
                                    can modify any of this with custom CSS or overriding our default
                                    variables. It's also worth noting that just about any HTML can go within
                                    the <code>.accordion-body</code>, though the transition does limit
                                    overflow.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    Accordion Item #3
                                </button>
                            </h2>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden
                                    by default, until the collapse plugin adds the appropriate classes that
                                    we use to style each element. These classes control the overall
                                    appearance, as well as the showing and hiding via CSS transitions. You
                                    can modify any of this with custom CSS or overriding our default
                                    variables. It's also worth noting that just about any HTML can go within
                                    the <code>.accordion-body</code>, though the transition does limit
                                    overflow.
                                </div>
                            </div>
                        </div> */}
                    </div>

                </>
                : ""}

            <Footer />
        </>
    )
}

export default Order