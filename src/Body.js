import React from 'react'
import Header from './Component/Header';
import Home from './Component/Home';
import Feature from './Component/Feature';
import New from './Component/New';
import Product from './Component/Product';
import Product_category from './Component/Product_category';
import Review from './Component/Review';
import Blog from './Component/Blog';
import Footer from './Component/Footer';
import Cart from './Component/Cart';
function Body() {
  return (
  <>
  <Header />
      <Home />
      <Feature />
      <Product />
      <Product_category />
      <Review />
      <Blog />
      <Footer />
  </>
  )
}

export default Body