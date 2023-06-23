import React from "react";

import { Link } from "react-router-dom"
import styled from "styled-components" 
 
const StyledNav = styled.nav`
background: rgba(255, 247, 237, 1);
padding: 1.5em 1em;
display: flex;
justify-content: space-between;
height: 13vh
`


export default function Navbar() {
  return (
      <StyledNav>
        <Link className="font-bold text-lg" to="/">#VANLIFE</Link>
       
        <div >
           <Link className="hover:underline no-underline text-gray-900 text-sm font-semibold pr-4" to="/host">Host</Link>
          <Link className="hover:underline no-underline text-gray-900 text-sm font-semibold pr-4" to="/vans">Vans</Link>
          <Link className="hover:underline no-underline text-gray-900 font-semibold text-sm"  to="/about">About</Link>
        </div>  
      </StyledNav>
    
  )
}
