/*
import { useState } from "react";
import Layout from "./Layouts/Layouts";
import Products from "./components/Products";
*/
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from './pages/ProductDetail';
import Home from './pages/Home';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}>{console.log(App)}</Route>
          <Route exact path="/products/:id" element={<ProductDetail />}></Route>
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
