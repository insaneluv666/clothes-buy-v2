import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import styled from "styled-components"

import Header from "./components/Header"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Profile from "./pages/Profile"
import Footer from "./components/Footer"
import NotFound from "./pages/NotFound"



function App() {
  return (
    <AppWrapper>
      <Router>
        <Header />
        <MainWrapper>
            <Routes>

              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/product" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFound />}/>
            </Routes>

          </MainWrapper>
        <Footer />
      </Router>
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  min-height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`
const MainWrapper = styled.div`
  min-height: calc(100vh - 80px - 172px);
`



export default App
