import React from "react";

import { Link, useParams, useOutletContext } from "react-router-dom"
import styled from "styled-components" 

const StyledDiv = styled.div`
 margin:0 1em;
 padding: 0em 1em;
 background: white;
`

export default function VanHostDetails (){

  const { van } = useOutletContext()
console.log(van)
  return (
    <>
      <StyledDiv>
        this is details
      </StyledDiv>

   </>
  )

}
