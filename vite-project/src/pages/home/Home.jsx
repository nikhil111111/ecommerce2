import React, { useContext } from 'react';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext';
import HeroSection from '../../components/herosection/HeroSection';
import Filter from '../../components/filter/Filter';
// import ProductCard from '../../components/productCard/ProductCart';
import Track from '../../components/track/Track';
import Testimonial from '../../components/testimonial/Testimonial';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../../redux/cartSlice';
import ProductCard from '../../components/productCard/ProductCard';
// import ProductCard from '../../components/productCard/ProductCard';
// import Footer from '../../components/footer/Footer';

function Home() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart)

  // console.log(cartItem)

  // const addCart = () => {
  //   dispatch(addToCart("Shirt"))
  // }

  // const deleteCart = () => {
  //   dispatch(deleteFromCart("Shirt"));
  // }
  return (
    <Layout>
      <HeroSection />
      <Filter />
      {/* <ProductCard /> */}
      <ProductCard />
      <Track />
      <Testimonial />
      {/* <Footer /> */}
    </Layout>

  );
}

export default Home;
