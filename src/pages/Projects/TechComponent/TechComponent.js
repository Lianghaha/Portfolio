import React, { useEffect } from "react"
import "./TechComponent.css"
import { gsap } from "gsap"

export const TechComponent = (props) => {
   const { image, text } = props

   useEffect(() => {}, [])

   return (
      <div className="tech-component">
         <div className="image-container">
            <img src={image ? image : ""} alt={text ? text : ""} />
         </div>
         <p>{text ? text : ""}</p>
      </div>
   )
}
