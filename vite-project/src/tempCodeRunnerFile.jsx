import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './components/layout/Layout';

import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/myState';
import Signup from './pages/registration/Signup';
import Login from './pages/registration/Login';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/page/AddProduct';
import UpdateProduct from './pages/admin/page/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import ProductCart from './components/productCard/ProductCart';

function App() {
  return (
    <MyState>
    <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/productinfo/:id" element={<ProductInfo />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/addproduct' element={<AddProduct />} />
            <Route path='/updateproduct' element={<UpdateProduct />} />
            <Route path="/*" element={<NoPage />} />
          </Routes>
          <ToastContainer />
    </Router>
    </MyState>
  );
}

export default App;