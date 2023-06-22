import React from "react";

import { Link } from "react-router-dom"

 



export default function About() {
  return (
    <div  className="md:flex">
    <img className=" max-h-80 w-full" src="https://stackblitz.com/files/stackblitz-starters-cnzh1m/github/Cristian-VA/stackblitz-starters-cnzh1m/main/src/images/about.png" alt=""/>
  <div className="px-8">
    <h1 className="md:pt-0 pt-6 pb-4 font-bold">Don’t squeeze in a sedan when you could relax in a van.</h1>
    <p className="text-xs md:p-0">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
    (Hitch costs extra 😉)</p>

    <p className="text-xs py-4 md:py-0">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

    <div className="my-6 p-6  bg-orange-200">
      <p className="font-bold text-sm mb-4">Your destination is waiting. Your van is ready.</p>
    
    <button className="p-2 bg-black text-gray-100 text-xs rounded">Explore our vans</button>

    </div>
  </div>
  </div>
    
  )
}