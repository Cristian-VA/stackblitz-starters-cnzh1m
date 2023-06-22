import React from "react";

import { Link } from "react-router-dom"
import styled from "styled-components" 
 
const StyledFooter = styled.footer`

background: rgba(37, 37, 37, 1);
width: 100%;
text-align: center;
padding: 1.5em;
color:rgba(170, 170, 170, 1);
font-size: 13px;


`


export default function Navbar() {
  return (
    <StyledFooter>
    Ⓒ 2022 #VANLIFE
  </StyledFooter>
    
  )
}
