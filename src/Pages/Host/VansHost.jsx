import React from "react";

import { Link, useParams } from "react-router-dom"
import styled from "styled-components" 

const StyledDiv = styled.div`
padding: 1.5em 1em;
`

export default function VansHost (){

  const [vans, setVans] = React.useState([])
 
 
  React.useEffect(() => {
     fetch("/api/host/vans")
         .then(res => res.json())
         .then(data => setVans(data.vans))
}, [])

  console.log(vans)


  const vansElements = vans.map((van, index)=>{
    return (
      <Link to={`:${van.id}`}>
      <div class="flex bg-white p-4 my-5 gap-4">
        <img className="rounded w-28" src={van.imageUrl} alt=""/>

        <div className="my-auto">
          <h1 className="text-xl font-semibold">{van.name}</h1>
          <p>${van.price}/day</p>
        </div>
      </div>
      </Link>

    )
  })

  return (
    <>
      <StyledDiv>
        <h1 className="text-2xl font-bold py-1"> Your Listed Vans</h1>
  
        {vansElements}
        

      </StyledDiv>

   </>
  )

}
