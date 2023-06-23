import React from "react";
import "./style.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import styled from "styled-components" 
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Vans from "./Pages/Vans"
import VanDetail from "./Pages/VanDetail"

import "./server"

const StyledDiv = styled.div`
display: flex;

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
      <Route path= "/vans" element={<Vans/>}/>
      <Route path= "/vans/:id" element={<VanDetail/>}/>
    </Routes>

    <Footer/>

    </BrowserRouter>
    </StyledDiv>
  );
}
