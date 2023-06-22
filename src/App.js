import React from "react";
import "./style.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import styled from "styled-components" 
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./Components/Home"
import About from "./Components/About"




const StyledDiv = styled.div`
display: flex;
min-height: 100vh;
flex-direction: column;
justify-content: space-between;
`

export default function App() {
  return (
    <StyledDiv>
    <BrowserRouter>
    
     <Navbar/>
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path= "/about" element={<About/>}/>

    </Routes>

    <Footer/>

    </BrowserRouter>
    </StyledDiv>
  );
}
