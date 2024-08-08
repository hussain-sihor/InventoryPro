import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Intro';
import Login from './pages/Form';
import Products from './pages/Products';
import Addproduct from './pages/Addproduct';
import Categories from './pages/Categories';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Addorder from './pages/Addorder';
import OrderReview from './pages/OrderReview';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/addproduct' element={<Addproduct/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/addorder' element={<Addorder/>}/>
        <Route path='/orderreview/:id' element={<OrderReview/>}/>
      </Routes>
    </div>
  )
}

export default App

