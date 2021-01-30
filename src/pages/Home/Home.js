import React, { useEffect } from "react"
import "./Home.css"
import { gsap } from "gsap"
import { Wave } from "./Wave/Wave"
import { FloatItem } from "./FloatItem/FloatItem"
import { Navbar } from "./Navbar/Navbar"
import { Greeting } from "./Greeting/Greeting"

export const Home = () => {
   useEffect(() => {
      //Navbar animation
      gsap.from(".js-navItem", {
         opacity: 0,
         y: 30,
         x: -50,
         stagger: 0.2,
         duration: 1,
      })

      //Greeting letter animation
      gsap.from(".js-greeting-letter", {
         stagger: 0.1,
         duration: 1,
         display: "none",
      })
   }, [])
   return (
      <div className="home">
         <Navbar />
         <Greeting />
         <FloatItem />
         <Wave />
      </div>
   )
}
