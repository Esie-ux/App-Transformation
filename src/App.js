import './App.css';
import './Assets/css/style.css';
import './Assets/css/bootstrap.min.css';


import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Shop from './Pages/Shop';
import Thankyou from './Pages/Thankyou';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Blog' element={<Blog/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
        <Route path='/Checkout' element={<Checkout/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Services' element={<Services/>}></Route>
        <Route path='/Services' element={<Services/>}></Route>
        <Route path='/Shop' element={<Shop/>}></Route>
        <Route path='/Thankyou' element={<Thankyou/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
