import { useState } from "react";
import Layout from "./Layouts/Layouts";
import Products from "./components/Products";
import "./App.css";

function App() {

  return (
    <>
      <Layout>
        <Products />
      </Layout>
    </>
  );
}

export default App;
