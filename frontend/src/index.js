import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './landing_page/Home/HomePage';
import {BrowserRouter,Routes,Route,} from 'react-router-dom';
import Pricing from './landing_page/Pricing/Pricing';
import Footer from './landing_page/Footer';
import Navbar from './landing_page/Navbar';
import About from './landing_page/About/About';
import Product from './landing_page/Product/Product';
import Equity from './landing_page/Pricing/Equity';
import Support from './landing_page/Support/Support';
import SignupPage from './landing_page/Signup/SignupPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route path='/' element={<HomePage/>}></Route>
  {/* <Route path='/signup' element={<SignupPage/>}></Route> */}
  <Route path='about' element={<About/>}></Route>
  <Route path='/pricing/*' element ={<Pricing/>}>

  <Route path="equity" element={<Equity/>}></Route>
  </Route>

  <Route path='/products' element ={<Product/>}></Route>
<Route path='/support' element ={<Support/>}></Route>
<Route path='/signup' element ={<SignupPage/>}></Route>
 </Routes>
 <Footer/>
 </BrowserRouter>
);

reportWebVitals();
