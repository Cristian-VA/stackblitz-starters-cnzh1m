import React from "react";
import styled from "styled-components" 
import { Link, useSearchParams, useLoaderData } from "react-router-dom"


export function loader(){
  return getVans()
}



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

async function getVans() {
  const res = await fetch("/api/vans")
  const data = await res.json()
  return data.vans
}


export default function Vans() {

  const [vans, setVans] = React.useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const [loading, setLoading] = React.useState(false)
  
  const data = useLoaderData()
  console.log(data)


 const typeFilter = searchParams.get("type")

 const displayedVans= typeFilter ?
 vans.filter(item => item.type.toLowerCase() ===typeFilter)
 : vans


 //conditional rendeing con state
 React.useEffect(() => {
  async function loadVans() {
      setLoading(true)
      const data = await getVans()
      setVans(data)
      setLoading(false)
  }
  
  loadVans()
}, [])
  


  const vanElements = displayedVans.map((van,index) =>{
    return (
      <div key={index} className="flex flex-col ">
        <Link  to={`:${van.id}`} state={{ search: searchParams.toString() }}>
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

//conditional rendeing con state

 if (loading) {
  return <h1 className="h-screen">Loading...</h1>
}
  return (
    <div className="min-h-screen">
      <h1 className="text-center font-bold"> Explore our Van options</h1>

      <div className="p-4 flex gap-4 ">
        <button className="bg-orange-100 py-1 px-4 rounded text-gray-600 font-semibold" 
        onClick ={()=> setSearchParams({type:"simple"})}
        >{typeFilter === "simple"? "Selected" : "Simple"}</button>
        <button className="bg-orange-100 py-1 px-4 rounded text-gray-600 font-semibold" 
        onClick ={()=> setSearchParams({type:"rugged"})}
        >{typeFilter === "rugged"? "Selected" : "Rugged"}</button>
        <button className="bg-orange-100 py-1 px-4 rounded text-gray-600 font-semibold" 
        onClick ={()=> setSearchParams({type:"luxury"})}
        >{typeFilter === "luxury"? "Selected" : "Luxury"}</button>

        {typeFilter && 
            <button className=" py-1 px-4 rounded text-gray-900 " 
            onClick ={()=> setSearchParams({})}
            >Clear </button>
          }

      </div> 

    <StyledDiv >
      {vanElements}
  </StyledDiv>
  </div>
  )
}