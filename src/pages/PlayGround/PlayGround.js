import React, { useLayoutEffect } from "react"
import "./PlayGround.css"
import { Wave } from "./Wave/Wave"

export const PlayGround = () => {
   useLayoutEffect(() => {
      const body = document.querySelector("body")
      const moveItems = document.getElementsByClassName("moveItem")
      if (body) {
         body.addEventListener("mousemove", (e) => {
            for (var i = 0; i < moveItems.length; i++) {
               if (moveItems[i]) {
                  moveItems[i].style.marginLeft = -e.pageX / 50 + "px"
                  moveItems[i].style.marginTop = -e.pageY / 50 + "px"
               }
            }
         })
      }
   }, [])

   return (
      <div className="playGround">
         <div className="moveItem"></div>
         <div className="moveItem red"></div>
         <div className="moveItem blue"></div>
         <Wave />
      </div>
   )
}
