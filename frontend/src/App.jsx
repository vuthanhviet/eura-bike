import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import About from './pages/About'
import Bikes from './pages/Bikes'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className='px-3 sm:px-[3vw] md:px-[5vw] lg:px-[7vw]'>
      <ToastContainer  />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/bikes' element={<Bikes/>} /> 
        <Route path='/about' element={<About/>} /> 
        <Route path='/contact' element={<Contact/>} /> 
        <Route path='/product/:productId' element={<Product/>} /> 
        <Route path='/cart' element={<Cart/>} /> 
        <Route path='/login' element={<Login/>} /> 
        <Route path='/place-order' element={<PlaceOrder/>} /> 
        <Route path='/orders' element={<Orders/>} /> 
      </Routes>
      <Footer
      />
    </div>
  )
}

export default App