
import React,{useContext, useEffect,useState}  from 'react';
import NoteContext from '../contextApi/NoteContext'
import PaymentItem from './PaymentItem';

function PaymentSubItem({d}) {
    const Context  = useContext(NoteContext)
    const { UserCartItem,pData } = Context;
    const [ItemTotalP, setItemTotalP] = useState(0)
  return (
    <>
    {pData.map((a)=>{
        return(
            <>
            {a.id == d.id? <PaymentItem d={d} a={a} /> : ""}
            </>
        )
    })

    }
    </>
  )
}

export default PaymentSubItem