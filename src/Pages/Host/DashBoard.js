import React from "react";

import { Link, } from "react-router-dom"
import styled from "styled-components" 


const StyledDiv = styled.div`
padding: 1em;
background: rgba(255, 234, 208, 1);

`

const StyledDiv2 = styled.div`
background: rgba(255, 221, 178, 1);
padding: 1.3em 1em;
display:flex;
justify-content: space-between;
`

export default function Dashboard (){
  return (
    <>
      <div className="h-screen">
      <StyledDiv>
        <h1 className="text-3xl font-bold pb-3"> Welcome!</h1>

              <div className="flex justify-between">
                <p>Income Last 30 days</p>
                <p>Details</p>
              </div>
        <h1 className="text-4xl font-bold pb-3 pt-2">$2,260</h1>                         
      </StyledDiv>

      <StyledDiv2>
        <div className="flex gap-3">
          <h1 className="text-xl font-bold"> Review score</h1>
          <p className="my-auto">5.0/0</p>
        </div>
          <h1>Details</h1>
      </StyledDiv2>

        <div className="py-6">
          <h1> Your listed Vans</h1>
        </div>

      </div>

   </>
  )

}
