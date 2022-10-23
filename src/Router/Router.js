import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import FrontPage from '../Component/Frontpage/FrontPage';
import Home from '../Component/Home/Home';
import Shop from '../Component/Item/Item';
import Category from '../Component/Category/Category';
import Cart from '../Component/Cart/Cart';
import Payment from '../Component/Payment/Payment';
import Item from '../Component/Item/Item';

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<FrontPage />} />
        <Route exact path="/home" element={<Home />} />    
        <Route exact path="/category" element={<Category />} />
        <Route exact path="/item" element={<Item />} />
        {/* <Route exact path="/cart" element={<Cart />} /> */}
        <Route exact path="/payment" element={<Payment />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router