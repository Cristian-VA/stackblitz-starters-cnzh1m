import React from "react";

import { Link, useRouteError } from "react-router-dom"
import styled from "styled-components" 
 
const StyledFooter = styled.footer`
height: 78.3vh;


`


export default function Error() {
  const error = useRouteError()
  console.log(error)
  return (
    <StyledFooter>
      <h1>error</h1>
  </StyledFooter>
    
  )
}
