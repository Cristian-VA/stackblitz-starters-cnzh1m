import React from "react";

import { Link } from "react-router-dom"
import styled from "styled-components" 


const StyledDiv = styled.div`
height: 77.8vh;
padding: 1em;
display: flex;
flex-direction: column;
`


export default function Login() {
  const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })

  function handleSubmit(e) {
      e.preventDefault()
      console.log(loginFormData)
  }

  function handleChange(e) {
      const { name, value } = e.target
      setLoginFormData(prev => ({
          ...prev,
          [name]: value
      }))
  }
  return (
    <StyledDiv>
         <h1 className="text-center text-2xl font-bold mb-6">Sign in to your account</h1>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                    className="px-4 py-2 rounded"
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                    className="px-4 py-2 rounded mb-6"
                />
                <button className="w-full bg-orange-400 text-orange-50 py-2 rounded">Log in</button>
            </form>
    </StyledDiv>
  )

}
