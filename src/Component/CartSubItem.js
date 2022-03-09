import React, { useContext } from 'react'
import NoteContext from '../contextApi/NoteContext'
import CartItem from './CartItem';

function CartSubItem({ a }) {
    const Context = useContext(NoteContext)
    const { AllUserData, pData, logedIn,changeTotal } = Context;
    return (
        <>
            {pData.map((d) => {
                if (d.id == a) {
                    return (
                        <CartItem d={d} />
                    )
                }
            })}
        </>
    )
}

export default CartSubItem