import React,{useContext, useEffect,useState}  from 'react';
import NoteContext from '../contextApi/NoteContext'



function PaymentItem({a,d}) {
    const Context  = useContext(NoteContext)
    const { UserCartItem,pData } = Context;
    const [ItemTotalP, setItemTotalP] = useState(0)
    var newstr  = a.name.substring(0,23);
    var total =Number(d.stock) * Number(a.Prize)
  return (
    <div className="item">
    <span className="price">${total}</span>
    <p className="item-name">{newstr}</p>
    <p className="item-description">Quantity  : {d.stock}</p>
</div>
  )
}

export default PaymentItem