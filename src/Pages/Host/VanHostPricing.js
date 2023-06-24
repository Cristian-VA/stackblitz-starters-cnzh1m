import React from "react";

import { Link, useParams, useOutletContext } from "react-router-dom"
import styled from "styled-components" 

const StyledDiv = styled.div`
 margin:0 1em 4em;
 padding: 0em 1em 1em;
 background: white;
 height: 30vh;
`

export default function VanHostPhotos (){

  const { van } = useOutletContext()

  return (
    <>
      <StyledDiv>

        {van? (
        <div >
          <h1 className="my-4 text-xl font-semibold">${van.price}/day</h1>
        </div>
        ) : <h1>Loading...</h1>}
     



      </StyledDiv>

   </>
  )

}