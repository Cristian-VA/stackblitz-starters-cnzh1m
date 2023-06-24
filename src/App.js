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


import VanHostLayout from "./Pages/Host/VanHostLayout"
import VanHostPricing from "./Pages/Host/VanHostPricing"
import VanHostDetails from "./Pages/Host/VanHostDetails"
import VanHostPhotos  from "./Pages/Host/VanHostPhotos"


import "./server"

const StyledDiv = styled.div`
display:flex; 
flex-direction:column;
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
                    <Route index element={<Dashboard/>}/>
                    <Route path= "income" element={<Income/>}/>
                      <Route path= "Reviews" element={<Reviews/>}/>
                      <Route path= "Vans" element={<VansHost/>}/>  

                        <Route path= "Vans/:id" element={<VanHostLayout/>}>
                            <Route path= "Pricing" element={<VanHostPricing/>}/>
                            <Route path= "Photos" element={<VanHostPhotos/>}/>
                            <Route path= "Details" element={<VanHostDetails/>}/>
                        </Route>
                      
                </Route>
        </Route>

    </Routes>

    </BrowserRouter>
    </StyledDiv>
  );
}

