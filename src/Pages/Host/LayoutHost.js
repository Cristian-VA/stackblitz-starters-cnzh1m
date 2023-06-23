import React from "react";

import { Link, Outlet } from "react-router-dom"
import styled from "styled-components" 

const StyledDiv = styled.div`

`

export default function LayoutHost (){
  return (
    <>
      <StyledDiv>
         <Link  to="/host">Dashboard</Link>
          <Link to="/vans">Income</Link>
          <Link to="/about">Vans</Link>
          <Link to="/about">Reviews</Link>
      </StyledDiv>
      <Outlet/>
   </>
  )

}
