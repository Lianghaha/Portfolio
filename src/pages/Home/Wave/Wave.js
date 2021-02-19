import React from "react"
import "./Wave.css"
import Boat from "../../../media/image/Home/Boat.png"

export const Wave = () => {
   return (
      <div className="wave-contaienr">
         <div className="wave wave1"></div>
         <div className="wave wave2"></div>
         <div className="wave wave3"></div>
         <div className="wave wave4"></div>
         <img src={Boat} alt="boat" className="wave-boat" />
      </div>
   )
}
