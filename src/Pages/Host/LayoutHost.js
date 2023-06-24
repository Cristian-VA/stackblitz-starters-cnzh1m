import React from "react";

import {  Outlet, NavLink } from "react-router-dom"
import styled from "styled-components" 

const StyledDiv = styled.div`
display:flex;
justify-content: space-between;
padding: 1.5em 1em;
padding-right: 8em;
color: rgba(77, 77, 77, 1);
font-weight: 500;
gap: 1em;

`

export default function LayoutHost (){

const notActive ="hover:underline hover:text-gray-900"
const active = "underline text-gray-900"

  return (
    <>
      <StyledDiv>
         <NavLink 
         end 
         className=
         {({isActive})=> isActive? active: notActive } 
          to=".">
            Dashboard
            </NavLink>

          <NavLink className={({isActive})=> isActive? active: notActive} to="income">Income</NavLink>
          <NavLink className={({isActive})=> isActive? active: notActive} to="Vans">Vans</NavLink>
          <NavLink className={({isActive})=> isActive? active: notActive} to="Reviews">Reviews</NavLink>
      </StyledDiv>
      <Outlet/>
     
   </>
  )

}

//como los elementos en este nav estn nesteados solo se pone  el link final debido a la estructura en App
//relative links (no es necesario poner todo el path debido a que estan nesteados) en el index se puede poner solo un punto en el dashbord y . te pone en el route en el que e