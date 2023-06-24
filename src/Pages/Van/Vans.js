import React from "react";
import styled from "styled-components" 
import { Link, useSearchParams } from "react-router-dom"




const StyledDiv = styled.div`
display: grid;
grid-template-columns:  1fr 1fr ; 
gap: 1em;
padding: 1em;

`

const StyledButton= styled.button`
 font-size: 9px;
 margin-top: 3px;
 background:rgba(225, 118, 84, 1);
 color: white;
 padding: 0.3em 0.6em;
 border-radius: 5px;
`

export default function Vans() {

  const [vans, setVans] = React.useState([])
  const [searchParams, setSearchParams] = useSearchParams()

  console.log(searchParams.get("type"))
 const typeFilter = searchParams.get("type")
  React.useEffect(() => {
     fetch("/api/vans")
         .then(res => res.json())
         .then(data => setVans(data.vans))
}, [])
  


  const vanElements = vans.map((van,index) =>{
    return (
      <div key={index} className="flex flex-col ">
        <Link  to={`/vans/:${van.id}`}>
       <img className="rounded" src={van.imageUrl} alt=""/>
         <div className="flex justify-between mt-1">
           <h1 className="text-xs font-bold">{van.name}</h1>
           <p className="text-xs font-bold">${van.price}</p>
         </div>
 
         <div className="flex  justify-between my-0">
           <StyledButton className="capitalize" style=
         {
           van.type==="rugged"?
           { background: "rgba(17, 94, 89, 1)"}: 
           van.type==="luxury"?
           {background: "rgba(22, 22, 22, 1)"}:
           {background: "rgba(225, 118, 84, 1)"}
         }
           > 
           {van.type}</StyledButton>
           <h1 className="text-xs font-semibold">/day</h1>
         </div>
         </Link>
      </div>
    )
 })

  return (
    <div>
      <h1 className="text-center font-bold"> Explore our Van options</h1>
    <StyledDiv >
      {vanElements}
  </StyledDiv>
  </div>
  )
}