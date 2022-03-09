import React,{useContext} from 'react'
import { Link } from "react-router-dom";
import NoteContext from '../contextApi/NoteContext'
import  "../css/style2.css"
function SingleProduct({data}) {
    const Context  = useContext(NoteContext)
    const { AllData,AddToCart ,AddToWistList} = Context;
    var newstr  = data.name.substring(0,15);
    
    return(
        <div className=" box box2 ">       
            <div  className="fas fa-heart" id="cart-btn"  onClick={()=> AddToWistList(data.id)}/>           
        <img src={data.img1} alt="cat 1" />
        <h3 style={{   maxWidth: "50ch" }}>{newstr}</h3>
        <h4><span style={{fontWeight: "bold"}}>₹</span>{data.Prize}</h4>

        <a  className="btn2" onClick={()=>AddToCart(data.id)}>
        add to cart   
        </a>
       
        <Link to={"/product/" + data.id}> <a  className="btn2"> get details</a></Link>
        
    </div>
    )
}

export default SingleProduct