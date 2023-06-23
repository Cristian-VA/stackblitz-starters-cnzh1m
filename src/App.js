import React from "react";
import "./style.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import styled from "styled-components" 
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Vans from "./Pages/Van/Vans"
import VanDetail from "./Pages/Van/VanDetail"
import Layout from "./Components/Layout"

import LayoutHost from "./Pages/Host/LayoutHost"
import Dashboard from "./Pages/Host/DashBoard"



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
    
    <Routes>
      
        <Route element={<Layout/>}>

            <Route path="/" element={<Home/>}/>
            <Route path= "/about" element={<About/>}/>
            <Route path= "/vans" element={<Vans/>}/>
            <Route path= "/vans/:id" element={<VanDetail/>}/>

                <Route element={<LayoutHost/>}>
                <Route path= "/host" element={<Dashboard/>}/>
                </Route>
        </Route>

    </Routes>

    </BrowserRouter>
    </StyledDiv>
  );
}
