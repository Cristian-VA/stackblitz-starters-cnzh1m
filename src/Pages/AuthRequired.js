import React from "react"
import { Outlet, Navigate } from "react-router-dom"

export default function AuthRequired() {
 const authenticated = false
 if (authenticated){
   return (
   <>
   <h1> Please sign in</h1>
   <Outlet/>
  </>
)
 } else{
   return <Navigate 
   to="login"
   state={{message: "Please Log in first"}}/>
 }
}

//pasar un state para displayear un msg para esa pestaña Y USAR USELOCATION