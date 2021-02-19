import React, { useEffect, useCallback } from "react"
import "./Projects.css"
import tempImg from "../../media/image/Projects/testgif.gif"
import { gsap } from "gsap"
import { Navbar } from "../../lib/components/Navbar/Navbar"
import { TechComponent } from "./TechComponent/TechComponent"

export const Projects = () => {
   const animateCards = useCallback((container, card, xDivider, yDivider) => {
      //Moving Animation Event
      container.addEventListener("mousemove", (e) => {
         //card center x Axis
         let x = card.getBoundingClientRect().left + card.clientWidth / 2

         //card center y axis
         let y = card.getBoundingClientRect().top + card.clientHeight / 2

         let xDeg = (x - e.pageX) / xDivider
         let yDeg = (e.pageY - window.pageYOffset - y) / yDivider

         card.style.transform = `rotateY(${xDeg}deg) rotateX(${yDeg}deg)`
         // let xAxis = (window.innerWidth / 2 - e.pageX) / 25
         // let yAxis = (e.pageY - window.innerHeight / 2) / 25
         // card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
      })
      //Animate In
      container.addEventListener("mouseenter", (e) => {
         card.style.transition = "none"
      })
      //Animate Out
      container.addEventListener("mouseleave", (e) => {
         card.style.transition = "all 0.5s ease"
         card.style.transform = `rotateY(0deg) rotateX(0deg)`
      })
   }, [])

   useEffect(() => {
      // gsap.from(".js-project-slideIn", {
      //    x: -80,
      //    y: -80,
      //    stagger: 0.2,
      //    duration: 1,
      //    opacity: 0,
      // })

      //Movement Animation to happen
      // const cards = document.querySelectorAll(".card")
      // const containers = document.querySelectorAll(".card-container")
      const verticalCards = document.querySelectorAll(".vertical-card")
      const verticalContainers = document.querySelectorAll(
         ".vertical-card-container"
      )
      const horizontalCards = document.querySelectorAll(".horizontal-card")
      const horizontalContainers = document.querySelectorAll(
         ".horizontal-card-container"
      )

      for (let i = 0; i < verticalContainers.length; i++) {
         animateCards(verticalContainers[i], verticalCards[i], 39, 15)
      }
      for (let i = 0; i < horizontalContainers.length; i++) {
         animateCards(horizontalContainers[i], horizontalCards[i], 10, 25)
      }
   }, [animateCards])

   return (
      <div className="projects">
         <Navbar />
         <div className="content">
            <div className="project-1">
               <h1 className="js-project-slideIn">
                  FindTheProphets<span>.com</span>
               </h1>
               <div className="display card-container vertical-card-container">
                  <div className="display-card card vertical-card js-project-slideIn">
                     <img src={tempImg} alt="" />
                  </div>
               </div>
               <div className="description card-container vertical-card-container">
                  <div className="description-card card vertical-card js-project-slideIn">
                     <h2>Description</h2>
                     <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                     </p>
                     <h2>Why I built this project?</h2>
                     <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                     </p>
                  </div>
               </div>
               <div className="frontend card-container horizontal-card-container">
                  <div className="frontend-card card horizontal-card js-project-slideIn">
                     <TechComponent image="123" text="456" />
                  </div>
               </div>
               <div className="backend card-container horizontal-card-container">
                  <div className="backend-card card horizontal-card js-project-slideIn"></div>
               </div>
               <div className="other card-container horizontal-card-container">
                  <div className="other-card card horizontal-card js-project-slideIn"></div>
               </div>
            </div>
         </div>
      </div>
   )
}
