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

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path ="/" element={App}>

        </Route>
        
      </Routes>
    </Router>
    
  </React.StrictMode>
);
