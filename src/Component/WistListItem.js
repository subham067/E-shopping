import React,{useContext} from 'react'
import { Link } from "react-router-dom";
import NoteContext from '../contextApi/NoteContext'

function WistListItem({d}) {
    const Context  = useContext(NoteContext)
    const { AllData,AddToCart ,AddToWistList,Removewishlist} = Context;
    var newstr  = d.name.substring(0,15);
  return (
    <div className=" box box2 ">
                   
                        <div  className="fas fa-heart wistList" id="cart-btn1" onClick={()=> Removewishlist(d.id)}  />
                       
                    <img src={d.img1} alt="cat 1" />
                    <h3 style={{   maxWidth: "50ch" }}>{newstr}</h3>
                    <h4><span style={{fontWeight: "bold"}}>₹</span>{d.Prize}</h4>

                    <a  className="btn2" onClick={()=>AddToCart(d.id)}>
                    add to cart   
                    </a>
                   
                    <Link to={"/product/" + d.id}> <a  className="btn2"> get details</a></Link>
                    
                </div>
  )
}

export default WistListItem