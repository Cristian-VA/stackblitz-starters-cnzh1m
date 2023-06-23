import React from "react";

import { Link, NavLink } from "react-router-dom"
import styled from "styled-components" 
 
const StyledNav = styled.nav`
background: rgba(255, 247, 237, 1);
padding: 1.5em 1em;
display: flex;
justify-content: space-between;
height: 13vh
`


const active ="underline text-gray-900 text-sm  font-bold pr-4"
const notActive ="hover:underline no-underline text-gray-900 text-sm  font-semibold pr-4"

export default function Navbar() {
  return (
      <StyledNav>
        <Link className="font-bold text-lg" to="/">#VANLIFE</Link>
       
        <div >
           <NavLink 
           className= {({isActive}) => isActive ? active : notActive }
           to="/host">Host</NavLink>
         
          <NavLink  className= {({isActive}) => isActive ? active : notActive } 
          to="/vans">Vans</NavLink>
        
          <NavLink  className= {({isActive}) => isActive ? active : notActive }  
          to="/about">About</NavLink>
        </div>  
      </StyledNav>
    
  )
}
