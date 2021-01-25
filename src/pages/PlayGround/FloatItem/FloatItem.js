import React, { useLayoutEffect } from "react"
import "./FloatItem.css"
import ballon from "../../../media/image/ballon.png"
import astronaut from "../../../media/image/astronaut.png"

export const FloatItem = () => {
   useLayoutEffect(() => {
      const container = document.querySelector(".floatItemContainer")
      const ballon = document.getElementsByClassName("ballon")
      const astronaut = document.getElementsByClassName("astronaut")
      if (container) {
         container.addEventListener("mousemove", (e) => {
            if (ballon && astronaut) {
               ballon[0].style.transition = "none"
               astronaut[0].style.transition = "none"
               ballon[0].style.marginLeft = e.pageX / 10 + "px"
               ballon[0].style.marginTop = e.pageY / 10 + "px"
               astronaut[0].style.marginRight = e.pageX / 10 + "px"
               astronaut[0].style.marginTop = -e.pageY / 10 + "px"
            }
         })

         container.addEventListener("mouseleave", (e) => {
            if (ballon && astronaut) {
               ballon[0].style.transition = "all 0.5s ease"
               astronaut[0].style.transition = "all 0.5s ease"
               ballon[0].style.marginLeft = "0px"
               ballon[0].style.marginTop = "0px"
               astronaut[0].style.marginRight = "0px"
               astronaut[0].style.marginTop = "0px"
            }
         })
      }
   }, [])

   return (
      <div className="floatItemContainer">
         <img src={ballon} alt="ballon" className="ballon floatItem" />
         <img src={astronaut} alt="astronaut" className="astronaut floatItem" />
      </div>
   )
}
