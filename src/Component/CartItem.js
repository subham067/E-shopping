import React,{useState,useEffect,useContext} from 'react'
import NoteContext from '../contextApi/NoteContext'
import swal from 'sweetalert';

function CartItem({ d }) {
    const Context = useContext(NoteContext)
    const { changeTotal,MinTotal,RemoveCart,UpdateTotal,Loder,UserCartItem,ChakOutPage } = Context;
    const [RemoveAllItem ,setRemoveAllItem] = useState(true)
    const[total,useTotal] = useState(1)
    let num = Number(d.Stock)
    let Remove = Number(d.Prize)
   
function PlausBtn() {
        useTotal(a => a+1)
        changeTotal(d.Prize,d.id)
}
function MinBtn() {
    useTotal(a => a-1)
    MinTotal(Remove,d.id)
}
function RemoveItem() {
    let r = Remove * total
    MinTotal(r )
    RemoveCart(d.id)
}
    var newstr = d.name.substring(0, 23);
    function OnChangeFun() {
        let tttt = 1
        UserCartItem.map((a)=>{
            if (a.id == d.id) {
                tttt= a.stock
            }
        })
        useTotal(tttt)
        ChakOutPage()
    }
    useEffect(()=>{
        OnChangeFun()
    },[])
    return (
        <>{RemoveAllItem? 
            <div className="item1 item3">
                <div className="buttons  " onClick={RemoveItem }>
                    <span className="delete-btn" />
                </div>
                <div className="image2">
                    <img
                        src={d.img1}
                        alt=""
                    />
                </div>
                <div className="description">
                    {newstr}
                    <span>{d.Category}</span>
                </div>
                <div className="quantity">
                    <button className="plus-btn" type="button" name="button" onClick={()=> {if (total > num-1) {  swal("No more stock available ", "", "warning")}else{ PlausBtn()}}}>
                        <img
                            src="https://designmodo.com/demo/shopping-cart/plus.svg"
                            alt=""
                        />
                    </button>

                    <div>{total}</div>
                    <button className="minus-btn" type="button" name="button"  onClick={()=> {if (total < 2) { }else{ MinBtn()}}}>
                        <img
                            src="https://designmodo.com/demo/shopping-cart/minus.svg"
                            alt=""
                        />
                    </button>
                </div>
                <div className="total-price">${d.Prize}</div>

            </div>
            : ""}
        </>
    )
}

export default CartItem