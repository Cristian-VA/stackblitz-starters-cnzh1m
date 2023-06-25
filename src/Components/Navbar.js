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


const active ="underline text-gray-900 text-sm  font-bold pr-4 my-auto"
const notActive ="hover:underline no-underline text-gray-900 text-sm  font-semibold pr-4 my-auto"

export default function Navbar() {
  return (
      <StyledNav>
        <Link className="font-bold text-lg my-auto" to="/">#VANLIFE</Link>
       
        <div className="flex" >
           <NavLink 
           className= {({isActive}) => isActive ? active : notActive }
           to="/host">Host</NavLink>
         
          <NavLink  className= {({isActive}) => isActive ? active : notActive } 
          to="/vans">Vans</NavLink>
        
          <NavLink  className= {({isActive}) => isActive ? active : notActive }  
          to="/about">About</NavLink>

          <NavLink  className= {({isActive}) => isActive ? active : notActive }  
          to="/login"><img className="w-6" src="https://stackblitz.com/files/stackblitz-starters-cnzh1m/github/Cristian-VA/stackblitz-starters-cnzh1m/main/src/images/Icon.png"/></NavLink>

        </div>  
      </StyledNav>
    
  )
}
