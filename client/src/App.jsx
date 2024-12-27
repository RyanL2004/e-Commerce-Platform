import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Navbar from './Layouts/Navbar';
import Footer from './Layouts/Footer';
import Products from './Layouts/Products';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Products />
    <Footer />


    </>
  )
}

export default App
