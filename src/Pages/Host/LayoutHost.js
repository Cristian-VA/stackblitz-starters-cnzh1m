import React from "react";

import { Link, Outlet, NavLink } from "react-router-dom"
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
         <NavLink className={({isActive})=> isActive? active: notActive }  to="/host/dashboard">Dashboard</NavLink>
          <NavLink className={({isActive})=> isActive? active: notActive} to="/host/income">Income</NavLink>
          <NavLink className={({isActive})=> isActive? active: notActive} to="/host/Vans">Vans</NavLink>
          <NavLink className={({isActive})=> isActive? active: notActive} to="/host/Reviews">Reviews</NavLink>
      </StyledDiv>
      <Outlet/>
     
   </>
  )

}
