import React from "react";

import { Link, useParams } from "react-router-dom"
import styled from "styled-components" 

const StyledDiv = styled.div`
padding: 1.5em 1em;
`

export default function VansHost (){
  const [vanList, setVansList] = React.useState([])
 
 
  React.useEffect(() => {
     fetch("/api/host/Vans")
         .then(res => res.json())
         .then(data => setVansList(data.vans))
}, [])
  
  console.log(vanList[0])

  return (
    <>
      <StyledDiv>
        <h1 className="text-xl font-bold py-1"> Your Listed Vans</h1>
        <div className="p-2 bg-white">
        
        </div>

      </StyledDiv>

   </>
  )

}
