import React, { useEffect } from "react"
import "./Home.css"
import { Wave } from "./Wave/Wave"
import { FloatItem } from "./FloatItem/FloatItem"
import { Navbar } from "./Navbar/Navbar"
import { gsap } from "gsap"

export const Home = () => {
   useEffect(() => {
      // gsap.from(".navItem", {
      //    opacity: 0,
      //    y: -200,
      //    stagger: 0.5,
      //    ease: Bounce.easeOut,
      // })

      // keyframes: [
      //    { scaleX: 1, scaleY: 1, scaleZ: 1 },
      //    { scaleX: 1.25, scaleY: 0.75, scaleZ: 1 },
      //    { scaleX: 0.75, scaleY: 1.25, scaleZ: 1 },
      //    { scaleX: 1.15, scaleY: 0.85, scaleZ: 1 },
      //    { scaleX: 0.95, scaleY: 1.05, scaleZ: 1 },
      //    { scaleX: 1.05, scaleY: 0.95, scaleZ: 1 },
      //    { scaleX: 1, scaleY: 1, scaleZ: 1 },
      // ]

      // gsap.from(".greetingLetter", {
      //    defaults: { stagger: 1 },
      //    duration: 3,
      //    ,
      // })

      gsap.from(".greetingLetter", {
         stagger: 0.1,
         duration: 1,
         display: "none",
      })

      const elements = document.getElementsByClassName("greetingLetter")

      for (let i = 0; i <= elements.length; i++) {
         if (elements[i]) {
            elements[i].addEventListener("animationend", function (e) {
               elements[i].classList.remove("animated")
               elements[i].classList.remove("bounceIn")
            })

            elements[i].addEventListener("mouseover", function (e) {
               elements[i].classList.add("animated")
            })
         }
      }
   }, [])
   return (
      <div className="Home">
         <Navbar />
         <div className="greetingContainer">
            <div className="animatedLetters">
               <span className="greetingLetter bounceIn">H</span>
               <span className="greetingLetter bounceIn">i</span>
               <span className="greetingLetter bounceIn">,</span>
               <br />
               <span className="greetingLetter bounceIn">I</span>
               <span className="greetingLetter bounceIn">'</span>
               <span className="greetingLetter bounceIn space">m</span>
               <span className="greetingLetter bounceIn">L</span>
               <span className="greetingLetter bounceIn">i</span>
               <span className="greetingLetter bounceIn">a</span>
               <span className="greetingLetter bounceIn">n</span>
               <span className="greetingLetter bounceIn">g</span>
               <span className="greetingLetter bounceIn">,</span>
               <br />
               <span className="greetingLetter bounceIn space">A</span>
               <span className="greetingLetter bounceIn">W</span>
               <span className="greetingLetter bounceIn">e</span>
               <span className="greetingLetter bounceIn space">b</span>
               <span className="greetingLetter bounceIn">D</span>
               <span className="greetingLetter bounceIn">e</span>
               <span className="greetingLetter bounceIn">v</span>
               <span className="greetingLetter bounceIn">e</span>
               <span className="greetingLetter bounceIn">l</span>
               <span className="greetingLetter bounceIn">o</span>
               <span className="greetingLetter bounceIn">p</span>
               <span className="greetingLetter bounceIn">e</span>
               <span className="greetingLetter bounceIn">r</span>
               <span className="greetingLetter bounceIn">!</span>
            </div>
            <p className="moreInfo">
               I bring beautiful ideas to life, and I love what I do.
            </p>
         </div>
         <FloatItem />
         <Wave />
      </div>
   )
}
