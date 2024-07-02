import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Layout from '@/Layout'
import HomeView from '@/views/HomeView'
import MovieView from '@/views/MovieView'
import EmployeeView from '@/views/EmployeeView'
import CartView from '@/views/CartView'
import ProductView from '@/views/ProductView'
import StoreView from '@/views/StoreView'
import ProductDetailView from '@/views/ProductDetailView'



const App = () => {
  return (
    <Routes path='/' element={<Layout />}>
      <Route index element={<HomeView/>}/> 
      <Route path='/cart' element={<CartView />} />
      <Route path='/employee' element={<EmployeeView />} />
      <Route path='/home' element={<HomeView />} />
      <Route path='/movie' element={<MovieView />} />
      <Route path='/product' element={<ProductView />} />
      <Route path='/detail' element={<ProductDetailView />} />
      <Route path='/store' element={<StoreView />} />
    </Routes>
  );
};

export default App;