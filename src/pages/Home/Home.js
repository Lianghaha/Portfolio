import React, { useLayoutEffect } from "react"
import "./Home.css"
import { gsap, Power3, Elastic, Back } from "gsap"
import { Wave } from "./Wave/Wave"
import { FloatItem } from "./FloatItem/FloatItem"
import { Navbar } from "../../lib/components/Navbar/Navbar"
import { Greeting } from "./Greeting/Greeting"
import { Avatar } from "./Avatar/Avatar"

export const Home = () => {
   useLayoutEffect(() => {
      const logo = document.querySelector(".nav-logo")
      if (logo) {
         let logoXCoord =
            logo.getBoundingClientRect().left + logo.clientWidth / 2
         let logoYCoord =
            logo.getBoundingClientRect().top + logo.clientHeight / 2

         // gsap
         //    .timeline()
         //    .from(".nav-logo", {
         //       x: window.innerWidth / 2 - logoXCoord,
         //       y: window.innerHeight / 2 - logoYCoord,
         //       scale: 2,
         //       duration: 0.6,
         //       ease: Power3.easeIn,
         //    })
         //    //Navbar
         //    .from(
         //       ".js-navItem",
         //       {
         //          opacity: 0,
         //          y: 30,
         //          x: -50,
         //          stagger: 0.3,
         //          duration: 1.6,
         //          ease: Power3.easeOut,
         //       },
         //       "-=0"
         //    )
         //    //Ballon
         //    .from(
         //       ".js-ballon",
         //       {
         //          display: "none",
         //          marginTop: 220,
         //          duration: 2,
         //          ease: Back.easeOut.config(3),
         //       },
         //       "-=1.5"
         //    )
         //    //Avatar
         //    .from(
         //       ".avatar-circle",
         //       {
         //          opacity: 0,
         //          x: 550,
         //          rotation: 360,
         //          transformOrigin: "50% 55%",
         //          duration: 1,
         //          ease: Back.easeOut.config(2.6),
         //       },
         //       "-=1.5"
         //    )
         //    .from(
         //       "#Avataaar_2",
         //       {
         //          display: "none",
         //          y: 500,
         //          duration: 1.2,
         //          ease: Elastic.easeOut.config(0.5, 1),
         //       },
         //       "-=0.5"
         //    )
         //    //
         //    .from(
         //       ".js-astronaut",
         //       {
         //          display: "none",
         //          marginTop: -200,
         //          duration: 3,
         //          ease: Elastic.easeOut,
         //       },
         //       "-=1.2"
         //    )
         //    //Greeting
         //    .from(
         //       ".js-greeting-letter",
         //       {
         //          stagger: 0.08,
         //          duration: 1,
         //          display: "none",
         //       },
         //       "-=2.5"
         //    )
         //    .from(
         //       ".js-greeting-slogan",
         //       {
         //          y: 10,
         //          duration: 0.2,
         //          opacity: 0,
         //       },
         //       "-=0.5"
         //    )
         //    .from(
         //       ".wave-container",
         //       {
         //          opacity: 0,
         //          duration: 3,
         //       },
         //       "-=1.5"
         //    )
      }
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
