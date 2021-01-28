import React, { useEffect } from "react"
import "./Projects.css"

export const Projects = () => {
   useEffect(() => {
      //Movement Animation to happen
      const card = document.querySelector(".card")
      const container = document.querySelector(".cardContainer")

      //Moving Animation Event
      container.addEventListener("mousemove", (e) => {
         let xAxis = (window.innerWidth / 2 - e.pageX) / 25
         let yAxis = (e.pageY - window.innerHeight / 2) / 25
         card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
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
   return (
      <div className="Projects">
         <div className="cardContainer">
            <div className="card"></div>
         </div>
      </div>
   )
}
