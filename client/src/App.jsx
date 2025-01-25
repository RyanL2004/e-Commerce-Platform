/*
import { useState } from "react";
import Layout from "./Layouts/Layouts";
import Products from "./components/Products";
*/
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProductDetail from './pages/ProductDetail';
import Home from './pages/Home';
import { Login } from "./pages/Auth/Login";
import { Register } from "./pages/Auth/Register";
import Checkout from "./pages/Checkout";
import { useSelector } from "react-redux";
import PlaceOrder from "./pages/Auth/PlaceOrder";
import OrderConfirmation from "./pages/OrderConfirm";
import OrderHistory from "./pages/OrderHistory";

function App() {
  const userLoginReducer = useSelector((state) => state.userLoginReducer)
  const { userInfo } = userLoginReducer

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}>{console.log(App)}</Route>
          <Route exact path="/products/:id" element={<ProductDetail />}></Route>
          <Route exact path="/login" element={userInfo ? <Navigate to="/"/> : <Login /> }></Route>
          <Route exact path="/register" element={userInfo? <Navigate to="/"/> : <Register />}></Route>
          <Route exact path= "/order/:id" element={<OrderConfirmation />}></Route>
          <Route exact path="/orderhistory" element={<OrderHistory />}></Route>
          <Route exact path="/checkout" element={<Checkout />}></Route>
          <Route exact path="/placeorder" element={<PlaceOrder />}></Route>
        </Routes>
        <Checkout />
        
      </Router>

      {/*
      <Layout>
        <Products />
      </Layout>
      */}
    </>
  );
}

export default App;
