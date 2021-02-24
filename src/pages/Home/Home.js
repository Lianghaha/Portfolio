import React, { useLayoutEffect } from "react"
import "./Home.css"
import { gsap, Elastic, Back } from "gsap"
import { Wave } from "./Wave/Wave"
import { FloatItem } from "./FloatItem/FloatItem"
import { Navbar } from "../../lib/components/Navbar/Navbar"
import { Greeting } from "./Greeting/Greeting"
import { Avatar } from "./Avatar/Avatar"

export const Home = () => {
   useLayoutEffect(() => {
      gsap
         .timeline()
         .from(
            ".js-ballon",
            {
               delay: 2.2,
               display: "none",
               marginTop: 220,
               opacity: 0,
               duration: 2,
               ease: Back.easeOut.config(3),
            },
            "-=1"
         )
         //Avatar
         .from(
            ".avatar-circle",
            {
               opacity: 0,
               x: 550,
               rotation: 360,
               transformOrigin: "50% 55%",
               duration: 1,
               ease: Back.easeOut.config(2.6),
            },
            "-=1.5"
         )
         .from(
            "#Avataaar_2",
            {
               display: "none",
               y: 500,
               duration: 1.2,
               ease: Elastic.easeOut.config(0.5, 1),
            },
            "-=0.5"
         )
         //
         .from(
            ".js-astronaut",
            {
               display: "none",
               marginTop: -200,
               duration: 3,
               ease: Elastic.easeOut,
            },
            "-=1.2"
         )
         //Greeting
         .from(
            ".js-greeting-letter",
            {
               stagger: 0.08,
               duration: 1,
               display: "none",
            },
            "-=2.5"
         )
         .from(
            ".js-greeting-slogan",
            {
               y: 10,
               duration: 0.2,
               opacity: 0,
            },
            "-=0.5"
         )
         .from(
            ".greeting-emoji",
            {
               opacity: 0,
               duration: 0.3,
            },
            "-=0"
         )
         .from(
            ".wave-container",
            {
               opacity: 0,
               duration: 5,
            },
            "-=5"
         )
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
