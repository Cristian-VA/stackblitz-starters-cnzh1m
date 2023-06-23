import React from "react";
import "./style.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import styled from "styled-components" 
import Home from "./Pages/Home"
import About from "./Pages/About"
import Vans from "./Pages/Van/Vans"
import VanDetail from "./Pages/Van/VanDetail"
import Layout from "./Components/Layout"

import LayoutHost from "./Pages/Host/LayoutHost"
import Dashboard from "./Pages/Host/DashBoard"
import Income from "./Pages/Host/Income"
import Reviews from "./Pages/Host/Reviews"

import VansHost from "./Pages/Host/VansHost"
import VanHostDetails from "./Pages/Host/VanHostDetails"

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

            <Route index element={<Home/>}/>
            <Route path= "/about" element={<About/>}/>
            <Route path= "/vans" element={<Vans/>}/>
            <Route path= "/vans/:id" element={<VanDetail/>}/>


          // nested routes con relative routes los que empiezan con / son absolute paths 
                <Route path="host" element={<LayoutHost/>}>
                    <Route path= "dashboard" element={<Dashboard/>}/>
                    <Route path= "income" element={<Income/>}/>
                    <Route path= "Reviews" element={<Reviews/>}/>
                      <Route path= "Vans" element={<VansHost/>}/>
                      <Route path= "Vans/:id" element={<VanHostDetails/>}/>
                      
                </Route>
        </Route>

    </Routes>

    </BrowserRouter>
    </StyledDiv>
  );
}

