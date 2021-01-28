import React from "react"
import "./Home.css"
import { Wave } from "./Wave/Wave"
import { FloatItem } from "./FloatItem/FloatItem"
import { Navbar } from "./Navbar/Navbar"

export const Home = () => {
   return (
      <div className="Home">
         <Navbar />
         <FloatItem />
         <Wave />
      </div>
   )
}
