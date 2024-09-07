import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import Allproducts from './pages/allproducts/AllProducts';
// import ProductCart from './components/productCard/ProductCart';

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allproducts" element={<Allproducts />} />
          <Route path="/order" element={<protectedRoute><Order /></protectedRoute>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={
            <ProtectedRoutesForAdmin>
              <Dashboard />
            </ProtectedRoutesForAdmin>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/addproduct' element={
            <ProtectedRoutesForAdmin>
              <AddProduct />
            </ProtectedRoutesForAdmin>} />

          <Route path='/updateproduct' element={<UpdateProduct />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
  );
}

export default App;

// protected route created for user and admin separately login

//user 
export const protectedRoute = ({ children }) => {
  const user = localStorage.getItem('user')
  // children me kuch bhi rhega -> protectedRoute ko jis me wrap krenge vo hi dikhega nhi to login 
  // page me redirect krdega
  if (user) {
    return children
  }
  else {
    return <Navigate to={'/login'} />
  }
}


//Admin
export const ProtectedRoutesForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'nikhil.garg.2509@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}
