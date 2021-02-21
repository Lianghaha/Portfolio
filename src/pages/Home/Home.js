import React, { useLayoutEffect, useState } from "react"
import "./Home.css"
import { gsap, Power3, Elastic, Back } from "gsap"
import { Wave } from "./Wave/Wave"
import { FloatItem } from "./FloatItem/FloatItem"
import { Navbar } from "../../lib/components/Navbar/Navbar"
import { Greeting } from "./Greeting/Greeting"
import { Avatar } from "./Avatar/Avatar"

export const Home = () => {
   useLayoutEffect(() => {
      //Navbar animation
      gsap
         .timeline()
         //Navbar
         .from(".js-navItem", {
            opacity: 0,
            y: 30,
            x: -50,
            stagger: 0.3,
            duration: 1.6,
            ease: Power3.easeOut,
         })
         //Ballon
         .from(
            ".js-ballon",
            {
               display: "none",
               marginTop: 220,
               duration: 3,
               ease: Back.easeOut.config(3),
            },
            "-=1.5"
         )
         //Avatar
         .from(
            "svg",
            {
               opacity: 0,
               x: 550,
               rotation: 360,
               transformOrigin: "50% 55%",
               duration: 1.5,
               ease: Back.easeOut.config(2.6),
            },
            "-=2.8"
         )
         .from(
            "#Avataaar_2",
            {
               display: "none",
               y: 500,
               duration: 1.2,
               ease: Elastic.easeOut.config(0.5, 1),
            },
            "-=1.25"
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
            "-=1"
         )
         //Greeting
         .from(
            ".js-greeting-letter",
            {
               stagger: 0.08,
               duration: 1,
               display: "none",
            },
            "-=2"
         )
         .from(
            ".js-greeting-slogan",
            {
               y: 10,
               duration: 0.5,
               opacity: 0,
            },
            "-=0.5"
         )

      gsap.timeline()
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
