import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Layout from "../pages/Layout";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import {useEffect, useState} from "react";
function Router() {
  const[cart,setCart]=useState([])
  useEffect(() => {
    cart.length !==0 && localStorage.setItem("cart",JSON.stringify(cart))
  },[cart])

  useEffect(()=>{
    const cartItems=JSON.parse(localStorage.getItem("cart"))
    cartItems && setCart(cartItems)
  },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout cart={cart} setCart={setCart}><Home cart={cart} setCart={setCart}/></Layout>}/>
        <Route path="*" element={<Layout ><NotFound/></Layout>}/>
        <Route path="/shop" element={<Layout cart={cart} setCart={setCart}><Shop cart={cart} setCart={setCart}/></Layout>}/>
        <Route path="/cart" element={<Layout cart={cart} setCart={setCart}><Cart cart={cart} setCart={setCart}/></Layout>}/>
        <Route path="/login" element={<Layout><Login/></Layout>}/>
        <Route path="/signup" element={<Layout><Signup/></Layout>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
