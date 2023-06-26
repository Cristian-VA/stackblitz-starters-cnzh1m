import React from "react";

import { Link, useParams, useLoaderData } from "react-router-dom"
import styled from "styled-components" 

export function loader(){
  return getVans()
}

async function getVans() {
  const res = await fetch("/api/host/vans")
  const data = await res.json()
  return data.vans
}

const StyledDiv = styled.div`
padding: 1.5em 1em;
`

export default function VansHost (){
  const vans = useLoaderData()
 

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
