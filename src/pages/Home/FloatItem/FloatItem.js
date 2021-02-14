import React, { useLayoutEffect } from "react"
import "./FloatItem.css"
import ballon from "../../../media/image/ballon.png"
import astronaut from "../../../media/image/astronaut.png"

export const FloatItem = () => {
   useLayoutEffect(() => {
      const container = document.querySelector("body")
      const ballon = document.getElementsByClassName("js-ballon")
      const astronaut = document.getElementsByClassName("js-astronaut")
      if (container) {
         container.addEventListener("mousemove", async (e) => {
            if (ballon[0] && astronaut[0]) {
               ballon[0].style.marginLeft = e.pageX / 7 + "px"
               ballon[0].style.marginTop = e.pageY / 10 + "px"
               astronaut[0].style.marginLeft = -e.pageX / 7 + "px"
               astronaut[0].style.marginTop = -e.pageY / 10 + "px"
               ballon[0].style.transition = "none"
               astronaut[0].style.transition = "none"
            }
         })

         container.addEventListener("mouseleave", (e) => {
            if (ballon[0] && astronaut[0]) {
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
      <div className="float-items">
         <img src={ballon} alt="ballon" className="js-ballon float-item" />
         <img
            src={astronaut}
            alt="astronaut"
            className="js-astronaut float-item"
         />
      </div>
   )
}
