import React, { useContext, useEffect, useState ,useRef} from 'react';
import NoteContext from '../contextApi/NoteContext'
import "../css/Payment.css"
import Footer from './Footer'
import Header from './Header'
import PaymentSubItem from './PaymentSubItem';
import swal from 'sweetalert';
import { Link,useNavigate } from 'react-router-dom'

function Payment() {
    const Context = useContext(NoteContext)
    let navigate = useNavigate();
    const { UserCartItem, pData, AllUserData,Payment,AddAddress } = Context;
    const [ItemTotalP, setItemTotalP] = useState(0)
    const [AddressData, setAddressData] = useState({ State: "", City: "", Pincode: "", Address: "" })
    const AddModal = useRef(null);

    
    
    function GoToOrder() {
        let PendingOrder = []
        if (AllUserData.UserAddress == "") {
            // alert("please Add Your Address")
            swal("please Add Your Address", "", "warning")
        } else {
            const NewDate = new Date();
            UserCartItem.map((d,f) => {
                pData.map((a ,e) => {
                    if (a.id == d.id) {
                        let s =new Date()
                        var total = Number(d.stock) * Number(a.Prize)

                        let porder = {
                            productId: d.id,
                            UserId: AllUserData.UaerId,
                            productName: a.name,
                            Address: AllUserData.UserAddress,
                            stock: d.stock,
                            OrderDate: NewDate.toLocaleString(),
                            price: total,
                            OrderId: s.getSeconds() * s.getMilliseconds() * s.getMinutes() * s.getHours() + s.toLocaleString() + e + f
                        }
                        PendingOrder.push(porder)
                    }
                })
            })


            Payment(PendingOrder)
            .then(()=>{
                navigate("/")
                swal("Order successful", " ", "success")
            })
        }


    }
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    useEffect(() => {
        let totalcost = 0
        UserCartItem.map((d) => {
            pData.map((a) => {
                if (a.id == d.id) {
                    let num = Number(a.Prize)
                    var total = Number(d.stock) * Number(a.Prize)
                    totalcost = totalcost + (num * Number(d.stock))
                    let porder = {
                        productId: d.id,
                        stock: d.stock,
                        date: new Date(),
                        price: total
                    }
                
                }
            })
        })
        setItemTotalP(totalcost)
    }, [UserCartItem])
    return (
        <>
            <Header />
            <main className="page payment-page mt-7">
                <section className="payment-form dark payment">
                    <div className="container">
                        <div className="block-heading">
                            <h1 className="heading">
                                {" "}
                                Checkout <span>Page</span>{" "}
                            </h1>

                        </div>
                        <form>
                            <div className="products">
                                <h3 className="title">Product</h3>
                                {UserCartItem.map((d) => {
                                    return (
                                        <PaymentSubItem d={d} />
                                    )
                                })}

                                {/* <div className="item">
                                    <span className="price">$120</span>
                                    <p className="item-name">Product 2</p>
                                    <p className="item-description">Lorem ipsum dolor sit amet</p>
                                </div> */}
                                <div className="total">
                                    Total<span className="price">${ItemTotalP}</span>
                                </div>
                            </div>
                            <div className="card-details">
                                <h3 className="title">Payment Details</h3>
                                <div className="row">
                                    <div className="form-group col-sm-12">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault1"
                                                defaultChecked="true"
                                            />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                Cash on Delivery
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input disabled
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault2"
                                                defaultChecked=""
                                            />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                UPI
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input disabled
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault2"
                                                defaultChecked=""
                                            />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                Wallets
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input disabled
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault2"
                                                defaultChecked=""
                                            />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                Credit / Debit / ATM Card
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input disabled
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault2"
                                                defaultChecked=""
                                            />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                Net banking
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input disabled
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault2"
                                                defaultChecked=""
                                            />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                EMI (Easy Installments)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-details">
                                <h3 className="title">Address Details</h3>
                                <div className="row">
                                    <div className="card">
                                        {AllUserData.UserAddress == "" ?
                                            <div className="card-body">
                                                <h5 className="card-title">{AllUserData.UserName}</h5>
                                                <p className="card-text">
                                                    please Add Your Address
                                                </p>
                                               

                                            </div> :
                                            <div className="card-body">
                                                <h5 className="card-title">{AllUserData.UserName}</h5>
                                                <p className="card-text">
                                                    {AllUserData.UserAddress.Address}, {AllUserData.UserAddress.City}<br />
                                                    Pin:    {AllUserData.UserAddress.Pincode}<br />
                                                    State :     {AllUserData.UserAddress.State}
                                                </p>
                                               
                                             
                                            </div>
                                        }

                                    </div>

                                    <div className="form-group col-sm-12 col-md-12">
                                        <div type="button" className="btn btn-primary btn-block" onClick={() => GoToOrder()}>
                                            Proceed
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Payment