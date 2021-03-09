import React from "react"
import "./Project4.css"
import { ImCodepen } from "react-icons/im"

export const Project4 = (props) => {
   const externalIcon = props.externalIcon

   return (
      <div className="project4 project-item">
         <div className="project-info">
            <div className="project-title-container js-project-slideIn">
               <div className="project-title">
                  <h1>Codepen</h1>
               </div>
            </div>
            <div className="square card-container square-card-container">
               <div className="square-card card square-card js-project-slideIn">
                  <div className="square-title-icons">
                     <div className="square-title-main">
                        <ImCodepen />
                     </div>
                     <a
                        className="square-title-external"
                        href="https://codepen.io/leonhaha/pen/qBqyPvK"
                     >
                        {externalIcon()}
                     </a>
                  </div>
                  <h3>3D-Cards</h3>
                  <p>
                     The creation of this effect was inspired by a video.
                     However, to apply it on multiple cards, I had to find ways
                     to locate every card's coordinate and solve the scrolling
                     problems.
                  </p>
               </div>
            </div>
            <div className="square card-container square-card-container">
               <div className="square-card card square-card js-project-slideIn">
                  <div className="square-title-icons">
                     <div className="square-title-main">
                        <ImCodepen />
                     </div>
                     <a
                        className="square-title-external"
                        href="https://codepen.io/leonhaha/pen/YzpjreO"
                     >
                        {externalIcon()}
                     </a>
                  </div>
                  <h3>Logo Animation</h3>
                  <p>
                     The Logo was created by myself using <span>Figma</span>,
                     and the
                     <span> GSAP</span> was used to animate the Logo.
                  </p>
               </div>
            </div>
            <div className="square card-container square-card-container">
               <div className="square-card card square-card js-project-slideIn">
                  <div className="square-title-icons">
                     <div className="square-title-main">
                        <ImCodepen />
                     </div>
                     <a
                        className="square-title-external"
                        href="https://codepen.io/leonhaha/pen/PobBKXa"
                     >
                        {externalIcon()}
                     </a>
                  </div>
                  <h3>Animated Letters</h3>
                  <p>
                     Letter animation created by using
                     <span> JavaScript</span>, <span>CSS</span>,{" "}
                     <span>HTML</span>, and minimum help from <span>GSAP </span>
                     (It is also totally possible to use pure CSS to achieve the
                     same stagger effect).
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}
