import React, { useEffect } from "react"
import "./Home.css"
import { gsap, Power3 } from "gsap"
import { Wave } from "./Wave/Wave"
import { FloatItem } from "./FloatItem/FloatItem"
import { Navbar } from "./Navbar/Navbar"
import { Greeting } from "./Greeting/Greeting"
import { Avatar } from "./Avatar/Avatar"

export const Home = () => {
   useEffect(() => {
      //Navbar animation
      gsap
         .timeline()
         .from(".js-navItem", {
            opacity: 0,
            y: 30,
            x: -50,
            stagger: 0.3,
            duration: 1.6,
            ease: Power3.easeOut,
         })
         .from(
            ".js-greeting-letter",
            {
               stagger: 0.1,
               duration: 1,
               display: "none",
            },
            "-=0.7"
         )
         .from(".js-greeting-slogan", {
            duration: 2,
            opacity: 0,
         })
   }, [])
   return (
      <div className="home">
         <Navbar />
         <Greeting />
         <Avatar />
         <FloatItem />
         <Wave />
      </div>
   )
}
