import React, { useLayoutEffect } from "react"
import "./FloatItem.css"
import Ballon from "../../../media/image/Home/Ballon.png"
import Astronaut from "../../../media/image/Home/Astronaut.png"
import { objAllTrue } from "../../../lib/utils"

export const FloatItem = () => {
   useLayoutEffect(() => {
      // const container = document.querySelector("body")
      // const ballon = document.querySelector(".js-ballon")
      // const astronaut = document.querySelector(".js-astronaut")
      const dom = {
         container: document.querySelector("body"),
         ballon: document.querySelector(".js-ballon"),
         astronaut: document.querySelector(".js-astronaut"),
      }
      if (objAllTrue(dom)) {
         const { container, ballon, astronaut } = dom
         container.addEventListener("mousemove", (e) => {
            ballon.style.marginLeft = e.pageX / 30 + "px"
            ballon.style.marginTop = e.pageY / 30 + "px"
            astronaut.style.marginLeft = -e.pageX / 30 + "px"
            astronaut.style.marginTop = -e.pageY / 30 + "px"
            ballon.style.transition = "none"
            astronaut.style.transition = "none"
         })
         container.addEventListener("mouseleave", (e) => {
            ballon.style.transition = "all 0.5s ease"
            astronaut.style.transition = "all 0.5s ease"
            ballon.style.marginLeft = "0px"
            ballon.style.marginTop = "0px"
            astronaut.style.marginLeft = "0px"
            astronaut.style.marginTop = "0px"
         })
      }
   }, [])

   return (
      <div className="float-items">
         <img src={Ballon} alt="ballon" className="js-ballon float-item" />
         <img
            src={Astronaut}
            alt="astronaut"
            className="js-astronaut float-item"
         />
      </div>
   )
}
