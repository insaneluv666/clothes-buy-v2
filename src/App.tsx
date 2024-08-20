import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import styled from "styled-components"

import Header from "./components/Header"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Profile from "./pages/Profile"
import Footer from "./components/Footer"



function App() {
  return (
      <Router>
        <Header />
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/product" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />

          </Routes>
        <Footer />
      </Router>
  )
}




export default App
