import React, { useContext } from 'react'

import Cart from './Component/Cart';
import Register from './Component/Register'
import AllProductBody from './Component/AllProductBody';
import { HashRouter  as Router, Route, Routes } from "react-router-dom";
import Body from './Body';
import NoteContext from './contextApi/NoteContext'
import ProductDetails from './Component/ProductDetails';
import Login from './Component/Login'
import WishList from './Component/WishList';
import Payment from './Component/Payment'
import Order from './Component/Order';
import Review from './Component/Review';
import Blog from './Component/Blog';
import Allreview from './Component/Allreview';
import Allblog from './Component/Allblog';


function App() {
  const Context = useContext(NoteContext)
  const { pData } = Context;
  return (

    <Router>
      <Routes>
        <Route path="/login" caseSensitive={false} element={<Login />} />
        <Route path="/register" caseSensitive={false} element={<Register />} />

        {pData.map((item) => {
          return (
            <Route path={"/product/" + item.id} caseSensitive={false} element={<ProductDetails data={item} />} />
          )                                                      
        })
        }                                                
        <Route path="/Payment" caseSensitive={false} element={<Payment />} />
        <Route path="/cart" caseSensitive={false} element={<Cart />} />
        <Route path="/wishlist" caseSensitive={false} element={<WishList />} />                                   
        <Route path="/Product" caseSensitive={false} element={<AllProductBody />} />
        <Route path="/Order" caseSensitive={false} element={<Order />} />
        <Route path="/Review" caseSensitive={false} element={<Allreview />} />
        <Route path="/Blog" caseSensitive={false} element={<Allblog />} />

        <Route path="/" caseSensitive={false} element={<Body />} />
      </Routes>
    </Router>


  );
}

export default App;
