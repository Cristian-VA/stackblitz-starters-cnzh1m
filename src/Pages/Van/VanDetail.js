import React from "react";
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import styled from "styled-components" 

const vansArray= [
  {
    id: ":1", name: "Modest Explorer", price: 60, description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", type: "simple"
  }, 
  {id: ":2", name: "Beach Bum", price: 80, description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png", type: "rugged"
}, 
{
  id: ":3", name: "Reliable Red", price: 100, description: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png", type: "luxury"
}, 
{
  id: ":4", name: "Dreamfinder", price: 65, description: "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png", type: "simple"
}, 
{
  id: ":5", name: "The Cruiser", price: 120, description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png", type: "luxury"
}, 
{
  id: ":6", name: "Green Wonder", price: 70, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "rugged"}]
 
  const  StyledH1 = styled.h1`
  padding: 0.5em;
  margin: 30px 0 15px;
  width: 100px;
  text-align: center;
  border-radius: 8px;
  color: rgba(255, 247, 237, 1);
  `


export default function VanDetail() {
 let params = useParams()
  const [van, setVan] = React.useState(null)



  React.useEffect(() => {
    if (params.id === ":1"){
      setVan(vansArray[0])
    } else if (params.id === ":2"){
      setVan(vansArray[1])
    }else if (params.id === ":3"){
      setVan(vansArray[2])
    }else if (params.id === ":4"){
      setVan(vansArray[3])
    }else if (params.id === ":5"){
      setVan(vansArray[4])
    }else if (params.id === ":6"){
      setVan(vansArray[5])
    }
}, [params.id])

//React.useEffect(() => {
//  fetch(`/api/vans/${params.id}`)
//      .then(res => res.json())
//      .then(data => setVan(data.vans))
//}, [params.id])


console.log(van)



  return (
    <div className="flex flex-col" >
        <Link className="text-sm p-4 underline" to="/Vans">Back to all vans</Link>
      {van? (
      <div className="p-4">
        <img src={van.imageUrl} alt=""/>
     
        <StyledH1 style=
         {
           van.type==="rugged"?
           { background: "rgba(17, 94, 89, 1)"}: 
           van.type==="luxury"?
           {background: "rgba(22, 22, 22, 1)"}:
           {background: "rgba(225, 118, 84, 1)"}
         }>{van.type}</StyledH1>
        <h1 >{van.name}</h1>
        <p className="font-bold">{`${van.price}/day`}</p>
        <p>{van.description}</p>
      </div> 
      ) : <h2> Loading..</h2>}
  </div>
    
  )
}