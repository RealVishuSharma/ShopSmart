import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './home/page';
import CartPage from './cart/page';
import ProductsPage from './products/page';
import CartApi from './cart/cartapi';
import ProductDetailPage from './products/productDetails';
import LoginPage from './login/page';
import SignupPage from './signup/page';
function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={< HomePage/>} />
        <Route path="/cart" element={< CartPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path='/products/details' element= {<ProductDetailPage/>} />
        <Route path="/cart/api" element={<CartApi/>} />
        <Route path = "/login" element={<LoginPage/>} />
        <Route path = "/signup" element={<SignupPage/>} />

        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>

     </BrowserRouter>
    </>
  )
}

export default App
