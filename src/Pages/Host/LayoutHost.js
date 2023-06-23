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
          <Link to="/host/income">Income</Link>
          <Link to="/host/Vans">Vans</Link>
          <Link to="/host/Reviews">Reviews</Link>
      </StyledDiv>
      <Outlet/>
   </>
  )

}
