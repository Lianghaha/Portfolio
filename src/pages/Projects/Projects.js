import React, { useEffect } from "react"
import "./Projects.css"
import tempImg from "../../media/image/testgif.gif"
import { Navbar } from "../../lib/components/Navbar/Navbar"
import { gsap } from "gsap"

export const Projects = () => {
   useEffect(() => {
      gsap.from(
         ".card",
         {
            stagger: 0.3,
            duration: 1.6,
            opacity: 0,
         },
         "-=2"
      )
      //Movement Animation to happen
      const cards = document.querySelectorAll(".card")
      const containers = document.querySelectorAll(".card-container")

      for (let i = 0; i < containers.length; i++) {
         //Moving Animation Event
         containers[i].addEventListener("mousemove", (e) => {
            //card center x Axis
            let x =
               cards[i].getBoundingClientRect().left + cards[i].clientWidth / 2

            //card center y axis
            let y =
               cards[i].getBoundingClientRect().top + cards[i].clientHeight / 2

            let xDeg = (x - e.pageX) / 30
            let yDeg = (e.pageY - window.pageYOffset - y) / 20

            cards[i].style.transform = `rotateY(${xDeg}deg) rotateX(${yDeg}deg)`
            // let xAxis = (window.innerWidth / 2 - e.pageX) / 25
            // let yAxis = (e.pageY - window.innerHeight / 2) / 25
            // card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
         })
         //Animate In
         containers[i].addEventListener("mouseenter", (e) => {
            cards[i].style.transition = "none"
         })
         //Animate Out
         containers[i].addEventListener("mouseleave", (e) => {
            cards[i].style.transition = "all 0.5s ease"
            cards[i].style.transform = `rotateY(0deg) rotateX(0deg)`
         })
      }
   }, [])
   return (
      <div className="projects">
         <Navbar />
         <div className="content">
            <div className="project-1">
               <h1>Find The Prophets</h1>
               <div className="display card-container">
                  <div className="display-card card">
                     <img src={tempImg} alt="" />
                  </div>
               </div>
               <div className="description card-container">
                  <div className="description-card card">
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
                  <div className="frontend-card card horizontal-card"></div>
               </div>
               <div className="backend card-container horizontal-card-container">
                  <div className="backend-card card horizontal-card"></div>
               </div>
               <div className="backend card-container horizontal-card-container">
                  <div className="backend-card card horizontal-card"></div>
               </div>
            </div>
         </div>
      </div>
   )
}
