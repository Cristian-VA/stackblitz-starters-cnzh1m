import React from "react";

import { Link, Outlet } from "react-router-dom"
import styled from "styled-components" 

const StyledDiv = styled.div`
display:flex;
justify-content: space-between;
padding: 1.5em 1em;
padding-right: 8em;
color: rgba(77, 77, 77, 1);
font-weight: 500;

`

export default function LayoutHost (){
  return (
    <>
      <StyledDiv>
         <Link className="hover:underline hover:text-gray-900"  to="/host">Dashboard</Link>
          <Link className="hover:underline hover:text-gray-900" to="/host/income">Income</Link>
          <Link className="hover:underline hover:text-gray-900" to="/host/Vans">Vans</Link>
          <Link className="hover:underline hover:text-gray-900" to="/host/Reviews">Reviews</Link>
      </StyledDiv>
      <Outlet/>
   </>
  )

}
