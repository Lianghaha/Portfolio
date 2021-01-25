import React from "react"
import "./Wave.css"
import boat from "../../../media/image/boat.png"

export const Wave = () => {
   return (
      <div className="waveContaienr">
         <div className="wave wave1"></div>
         <div className="wave wave2"></div>
         <div className="wave wave3"></div>
         <div className="wave wave4"></div>
         <img src={boat} alt="boat" className="boat" />
      </div>
   )
}
