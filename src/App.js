import React from "react";
import {   BrowserRouter,  Routes,  Route } from "react-router-dom";
import Home from './Home'
import About from './About'
import Products from './Products'
import Contact from './Contact'
import Cart from './Cart'
import SingleProduct from './SingleProduct'
import ErrorPage from "./ErrorPage";
import {GlobalStyle} from './GlobalStyle'
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";

const App = () => {
  const theme ={
   colors: {
    bg: "#f6f8fa",
    footer_bg: "#0a1435",
    btn: "rgb(98,84,243)",
    border: "rgba(98 , 84, 243, 0.5)",
    hr: "#ffffff",
    gradient:"linear-gradient(0deg , rgb(132 , 144, 255) 0% ,rgb(98 ,189 ,252) 100%)",
    shadow:"rgba(0,0,0,0.02) 0px 1px 3px 0px , rgba(27,31,35,0.15) 0px 0px 0px 1px",
    shadowSupport:"rgba(0 ,0 ,0, 0.16) 0px 1px 4px"
   },
   media:{
    mobile:"786px",
    tab:"998px",
   },
  }

  return (
   <>
   <ThemeProvider theme={theme}>
    <BrowserRouter>
    <GlobalStyle/>
    <Navbar/>
      <Routes>
        <Route exact  path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/products" element={<Products />} /> 
        <Route exact path="/contact" element={<Contact />} /> 
        <Route exact path="/cart" element={<Cart />} /> 
        <Route exact path="/singleproduct/:id" element={<SingleProduct />} /> 
        <Route exact path="/login" element={<Login/>} /> 
        <Route  path="*" element={<ErrorPage />} /> 
      </Routes>
      <Footer/>
    </BrowserRouter>
    </ThemeProvider>
    
   </>
   );
};

export default App;
