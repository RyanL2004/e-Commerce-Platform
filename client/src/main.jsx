import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
<client></client>
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProductDetail from './pages/ProductDetail';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path ="/" element={<App />}> {console.log(App)} </Route>
        <Route exact path ="/detail" element={<ProductDetail/>}> </Route>
        
      </Routes>
    </Router>
    
  </React.StrictMode>
);
