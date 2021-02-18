import React, { useEffect } from "react"
import "./Greeting.css"

export const Greeting = () => {
   useEffect(() => {
      const greetingLetters = document.getElementsByClassName(
         "js-greeting-letter"
      )

      for (let i = 0; i <= greetingLetters.length; i++) {
         if (greetingLetters[i]) {
            greetingLetters[i].addEventListener("animationend", function (e) {
               greetingLetters[i].classList.remove("js-hover-rubberBand")
               greetingLetters[i].classList.remove("js-bounceIn")
            })

            greetingLetters[i].addEventListener("mouseover", function (e) {
               greetingLetters[i].classList.add("js-hover-rubberBand")
            })
         }
      }
   }, [])
   return (
      <div className="greeting">
         <div className="greeting-animatedLetters">
            <span className="js-greeting-letter js-bounceIn">H</span>
            <span className="js-greeting-letter js-bounceIn">i</span>
            <span className="js-greeting-letter js-bounceIn">,</span>
            <br />
            <span className="js-greeting-letter js-bounceIn">I</span>
            <span className="js-greeting-letter js-bounceIn">'</span>
            <span className="js-greeting-letter js-bounceIn space">m</span>
            <span className="js-greeting-letter js-bounceIn">L</span>
            <span className="js-greeting-letter js-bounceIn">i</span>
            <span className="js-greeting-letter js-bounceIn">a</span>
            <span className="js-greeting-letter js-bounceIn">n</span>
            <span className="js-greeting-letter js-bounceIn">g</span>
            <span className="js-greeting-letter js-bounceIn">,</span>
            <br />
            <span className="js-greeting-letter js-bounceIn space">A</span>
            <span className="js-greeting-letter js-bounceIn">W</span>
            <span className="js-greeting-letter js-bounceIn">e</span>
            <span className="js-greeting-letter js-bounceIn space">b</span>
            <span className="js-greeting-letter js-bounceIn">D</span>
            <span className="js-greeting-letter js-bounceIn">e</span>
            <span className="js-greeting-letter js-bounceIn">v</span>
            <span className="js-greeting-letter js-bounceIn">e</span>
            <span className="js-greeting-letter js-bounceIn">l</span>
            <span className="js-greeting-letter js-bounceIn">o</span>
            <span className="js-greeting-letter js-bounceIn">p</span>
            <span className="js-greeting-letter js-bounceIn">e</span>
            <span className="js-greeting-letter js-bounceIn">r</span>
            <span className="js-greeting-letter js-bounceIn">!</span>
            <br />
            <p className="js-greeting-slogan">
               I bring beautiful ideas to life, and I love what I do.
            </p>
         </div>
      </div>
   )
}
