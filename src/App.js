import React from "react";
import "./style.css";
import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import styled from "styled-components" 
import Home from "./Pages/Home"
import About from "./Pages/About"
import Vans, {loader as vansLoader} from "./Pages/Van/Vans"
import VanDetail from "./Pages/Van/VanDetail"

import Layout from "./Components/Layout"
import Error from "./Components/Error"

import LayoutHost from "./Pages/Host/LayoutHost"
import Dashboard from "./Pages/Host/DashBoard"
import Income from "./Pages/Host/Income"
import Reviews from "./Pages/Host/Reviews"

import VansHost from "./Pages/Host/VansHost"


import VanHostLayout from "./Pages/Host/VanHostLayout"
import VanHostPricing from "./Pages/Host/VanHostPricing"
import VanHostDetails from "./Pages/Host/VanHostDetails"
import VanHostPhotos  from "./Pages/Host/VanHostPhotos"
import  NotFound from "./Pages/Notfound"

import "./server"

const StyledDiv = styled.div`
display:flex; 
flex-direction:column;
`


const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>

            <Route index element={<Home/>}/>
           
            <Route path= "/about" element={<About/>}/>
            <Route path= "/vans" 
            element={<Vans/>} 
            loader={vansLoader}
            errorElement={<Error/>}/>
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
                            <Route index element={<VanHostDetails/>}/>
                        </Route>
                       
                </Route>
                <Route path="*" element={<NotFound/>}/>
        </Route>
    

))


export default function App() {
  return (
    <StyledDiv>
    <RouterProvider router={router}/>
    </StyledDiv>
  );
}

