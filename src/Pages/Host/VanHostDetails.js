import React from "react";

import { Link, useParams, useOutletContext } from "react-router-dom"
import styled from "styled-components" 

const StyledDiv = styled.div`
 margin:0 1em 4em;
 padding: 0em 1em 1em;
 background: white;
 height: 35vh;
`

export default function VanHostDetails (){

  const { van } = useOutletContext()

  return (
    <>
      <StyledDiv>

        {van? (
        <div >
          <div className="flex flex-col">
            <h1 className="py-0 font-semibold" >Name: {van.name}</h1>
            <h1 className="font-bold my-2">Category: {van.type}</h1>
            <p> {van.description}</p>
          </div>


          </div>
        ) : <h1>Loading...</h1>}
     



      </StyledDiv>

   </>
  )

}

//usar conditional rendering