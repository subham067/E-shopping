import { useNavigate, NavLink } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react'
import '../App.css';
import "../css/Cart.css"
import Footer from './Footer';
import Header from './Header';
import NoteContext from '../contextApi/NoteContext'
import CartSubItem from './CartSubItem';

function Cart() {
  let navigate = useNavigate();
  const Context = useContext(NoteContext)
  const { AllUserData, pData, logedIn, Subtotal, Loder, ChakOutPage, UserCartItem } = Context;
  const [AllDataU, setAllDataU] = useState([])
  const [ItemTotalP, setItemTotalP] = useState(0)


  function GoToPayment() {
    navigate("/Payment")
  }

  useEffect(() => {
    let totalcost = 0
    UserCartItem.map((d) => {
      pData.map((a) => {
        if (a.id == d.id) {
          let num = Number(a.Prize)

          totalcost = totalcost + (num * Number(d.stock))
        }
      })
    })
    setItemTotalP(totalcost)
  }, [UserCartItem])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // document.title =`Cart ${ItemTotalP}` 

  return (

    <>
      <Header />
      <h1 className="heading mt-7"> {" "} Your <span>Cart</span>{" "} </h1>
      {
        logedIn ?

          <div className="container " >
            <div className=" row  ">
              <div className="shopping-cart  col-12 col-md-8" >
                <div className="title">Shopping Bag</div>
                {AllUserData.UserCart.map((a) => <CartSubItem a={a} />)}
              </div>
              <div className="col-12 col-md-4 ">
                <div className="chakout ">
                  <div className="chak">
                    <h3>Subtotal</h3>
                    <h3>Tax (5%)</h3>
                    <h3>Shipping </h3>
                    <hr />
                    <h2>Total</h2>
                  </div>
                  <div className="prize">
                    <h3>${ItemTotalP.toFixed(2)}</h3>
                    <h3>${(ItemTotalP * 0.05).toFixed(2)}</h3>
                    <h3>${(ItemTotalP * 0.05).toFixed(2)}</h3>
                    <hr />
                    <h2>${(ItemTotalP + ItemTotalP * 5 / 100 + ItemTotalP * 5 / 100).toFixed(2)}</h2>
                  </div>
                  <button id='chak_btn' onClick={GoToPayment}>Check out</button>
                </div>



              </div>
            </div>
          </div>
          : <h1 className='mx-auto text-center text-danger'>Please login to see your cart ...</h1>
      }

      <Footer />
    </>


  )
}

export default Cart