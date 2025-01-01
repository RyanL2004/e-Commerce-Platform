/*
import { useState } from "react";
import Layout from "./Layouts/Layouts";
import Products from "./components/Products";
*/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from './pages/ProductDetail';
import Home from './pages/Home';
import { Login } from "./pages/Auth/Login";
import { Register } from "./pages/Auth/Register";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}>{console.log(App)}</Route>
          <Route exact path="/products/:id" element={<ProductDetail />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
        </Routes>
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
