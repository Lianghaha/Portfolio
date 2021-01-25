import React from "react"
import "./PlayGround.css"
import { Wave } from "./Wave/Wave"
import { FloatItem } from "./FloatItem/FloatItem"

export const PlayGround = () => {
   return (
      <div className="playGround">
         <FloatItem />
         <Wave />
      </div>
   )
}
