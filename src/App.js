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

import VansHost,{loader as vansHostLoader} from "./Pages/Host/VansHost"


import VanHostLayout from "./Pages/Host/VanHostLayout"
import VanHostPricing from "./Pages/Host/VanHostPricing"
import VanHostDetails from "./Pages/Host/VanHostDetails"
import VanHostPhotos  from "./Pages/Host/VanHostPhotos"
import  NotFound from "./Pages/Notfound"
import  Login from "./Pages/Login"
import Authrequired from "./Pages/AuthRequired"

import "./server"

const StyledDiv = styled.div`
display:flex; 
flex-direction:column;
`


const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>

            <Route index element={<Home/>}/>
           
            <Route path= "/about" element={<About/>}/>
            <Route path= "/login" element={<Login/>}/>
            <Route path= "/vans" 
            element={<Vans/>} 
            loader={vansLoader}
            errorElement={<Error/>}/>
            <Route path= "/vans/:id" element={<VanDetail/>}/>


          // nested routes con relative routes los que empiezan con / son absolute paths 
         //Protected routes wrap protected routes in a layout with logic
            <Route element={<Authrequired/>}>
                <Route path="host" element={<LayoutHost/>}>

                    <Route 
                    index 
                    element={<Dashboard/>}
                    loader={async () => {
                      return null
                    }}/>

                    <Route 
                    path= "income" 
                    element={<Income/>}
                    loader={async () => {
                    return null
                    }}
                    />

                    <Route 
                    path= "Reviews" 
                    element={<Reviews/>}
                    loader={async () => {
                    return null
                    }}
                    />
                    
                    <Route 
                    path= "Vans" 
                    element={<VansHost/>}
                    loader={vansHostLoader}
                    />  

                    <Route 
                    path= "Vans/:id" 
                    element={<VanHostLayout/>}
                    loader={async () => {
                    return null
                    }}
                    >
                            
                    <Route 
                    path= "Pricing" 
                    element={<VanHostPricing/>}
                    loader={async () => {
                    return null
                    }}
                    />
                            
                    <Route 
                    path= "Photos" 
                    element={<VanHostPhotos/>}
                    loader={async () => {
                    return null
                    }}
                    />

                    <Route 
                    index 
                    element={<VanHostDetails/>}
                    loader={async () => {
                    return null
                    }}
                    />
                </Route>
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

