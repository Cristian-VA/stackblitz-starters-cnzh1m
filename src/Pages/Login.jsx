import React from "react";

import { Link } from "react-router-dom"
import styled from "styled-components" 


const StyledDiv = styled.div`
height: 77.8vh;
padding: 1em;
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
         <h1>Sign in to your account</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button>Log in</button>
            </form>
    </StyledDiv>
  )

}
