import React from "react";

import { Link } from "react-router-dom"
import styled from "styled-components" 
 
const StyledDiv = styled.div`
background-image: url("https://stackblitz.com/files/stackblitz-starters-cnzh1m/github/Cristian-VA/stackblitz-starters-cnzh1m/main/src/images/Home.png");
width:100%;
height: 75.15vh;
background-size: cover;
border: 0px;
padding: 4em 2em;
`


export default function Home (){
  return (
    <StyledDiv>
      <div className="md:px-28 md:py-12">
          <p className="text-2xl font-bold text-white">You got the travel plans, we got the travel vans. </p>
          <p className="py-4 text-gray-200 font-light">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
          <button className="w-full bg-orange-400 py-1 my-4 rounded"> Find your van</button>
      </div>
    </StyledDiv>
  )

}
