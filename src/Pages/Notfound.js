import React from "react";

import { Link } from "react-router-dom"
import styled from "styled-components" 


const StyledDiv = styled.div`
height: 79vh;
padding: 1em;
`


export default function Home (){
  return (
    <StyledDiv>
      <div className="md:px-28 md:py-12">
          <p className="text-2xl font-bold text-gray-900"> Sorry, the page you were looking for was not found</p>
          <button className="w-full bg-black py-2 my-4 rounded text-white"> back to home</button>
      </div>
    </StyledDiv>
  )

}
