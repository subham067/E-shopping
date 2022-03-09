import React, { useContext } from 'react'
import NoteContext from '../contextApi/NoteContext'
import Footer from './Footer'
import Header from './Header'
import SubWistList from './SubWistList'

function WishList() {
    const Context = useContext(NoteContext)
    const { logedIn, AllUserData } = Context;
    return (
        <>
            <Header />
            <h1 className="heading mt-7"> {" "} Your <span>wishlist</span>{" "} </h1>
            
            {AllUserData.USerWistList.length==0 ?
            <h1 className="text-center text-danger">Please Add Something in Your WishList</h1>
            : <div className="features container ">
                <div className=" box-container">
                    {AllUserData.USerWistList.map((a) => <SubWistList a={a} />)}
                </div>
            </div>}
            <Footer />
        </>
    )
}

export default WishList