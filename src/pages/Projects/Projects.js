import React, { useLayoutEffect, useCallback } from "react"
import "./Projects.css"
import { gsap, Power2 } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Navbar } from "../../lib/components/Navbar/Navbar"
import { Project1 } from "./Project1/Project1"
import { Project2 } from "./Project2/Project2"
import { Project3 } from "./Project3/Project3"
import { icons } from "./Stack-Icons-Resources"
//React-Icons
import { BiLinkExternal } from "react-icons/bi"
import { HiOutlineFolder } from "react-icons/hi"
//Goggle Analytic
import ReactGa from "react-ga"

//GSAP Scroll Trigger
gsap.registerPlugin(ScrollTrigger)

export const Projects = () => {
   const animateCards = useCallback((container, card, verIndex, horIndex) => {
      //Moving Animation Event
      container.addEventListener("mousemove", (e) => {
         //Card Center x Axis
         let x = card.getBoundingClientRect().left + card.clientWidth / 2

         //Card Center y axis
         let y = card.getBoundingClientRect().top + card.clientHeight / 2

         let xDeg = (x - e.pageX) / verIndex
         let yDeg = (e.pageY - window.pageYOffset - y) / horIndex

         card.style.transform = `rotateY(${xDeg}deg) rotateX(${yDeg}deg)`
      })
      //Animate In
      container.addEventListener("mouseenter", (e) => {
         card.style.transition = "none"
      })
      //Animate Out
      container.addEventListener("mouseleave", (e) => {
         card.style.transition = "all 0.5s ease"
         card.style.transform = `rotateY(0deg) rotateX(0deg)`
      })
   }, [])

   useLayoutEffect(() => {
      ReactGa.pageview(window.location.href)

      // Start Page Animation
      gsap.from(".project-1 .project-info .js-project-slideIn", {
         delay: 1,
         x: -80,
         y: -80,
         stagger: 0.2,
         duration: 1,
         opacity: 0,
         ease: Power2.easeOut,
      })

      //Poject-1 Stack Cards
      gsap.from(".project-1 .project-stack .js-project-slideIn", {
         scrollTrigger: {
            trigger: ".project-1 .project-stack",
            start: "top 50%",
         },
         x: -80,
         y: -80,
         stagger: 0.2,
         duration: 1,
         opacity: 0,
         ease: Power2.easeOut,
      })

      //Poject-1 Stack tech-components
      gsap.from(".project-1 .project-stack .tech-component", {
         scrollTrigger: {
            trigger: ".project-1 .project-stack",
            start: "top 50%",
         },

         marginTop: -30,
         marginLeft: -30,
         stagger: 0.1,
         duration: 1,
         opacity: 0,
         ease: Power2.easeOut,
      })

      //Poject-2 Info Cards
      gsap.from(".project-2 .project-info .js-project-slideIn", {
         scrollTrigger: {
            trigger: ".project-2 .project-info",
            start: "top 30%",
         },
         x: -80,
         y: -80,
         stagger: 0.2,
         duration: 1,
         opacity: 0,
         ease: Power2.easeOut,
      })

      //Poject-2 Stack Cards
      gsap.from(".project-2 .project-stack .js-project-slideIn", {
         scrollTrigger: {
            trigger: ".project-2 .project-stack",
            start: "top 30%",
         },
         x: -80,
         y: -80,
         stagger: 0.2,
         duration: 1,
         opacity: 0,
         ease: Power2.easeOut,
      })

      //Poject-2 Stack tech-components
      gsap.from(".project-2 .project-stack .tech-component", {
         scrollTrigger: {
            trigger: ".project-2 .project-stack",
            start: "top 30%",
         },

         marginTop: -30,
         marginLeft: -30,
         stagger: 0.1,
         duration: 1,
         opacity: 0,
         ease: Power2.easeOut,
      })

      //Poject-3 Info Cards
      gsap.from(".project-3 .project-info .js-project-slideIn", {
         scrollTrigger: {
            trigger: ".project-3 .project-info",
            start: "top 5%",
         },
         x: -80,
         y: -80,
         stagger: 0.2,
         duration: 1,
         opacity: 0,
         ease: Power2.easeOut,
      })

      // 3D Card Effect
      const verticalCards = document.querySelectorAll(".vertical-card")
      const verticalContainers = document.querySelectorAll(
         ".vertical-card-container"
      )
      const horizontalCards = document.querySelectorAll(".horizontal-card")
      const horizontalContainers = document.querySelectorAll(
         ".horizontal-card-container"
      )

      let verCardVerIndex = 50
      let verCardHorIndex = 8
      const horCardHorIndex = 39
      const horCardVerIndex = 15

      // Adjust Card Effect According to screen Width
      if (window.innerWidth < 600) {
         verCardVerIndex = 20
         verCardHorIndex = 30
      } else if (window.innerWidth > 2000) {
         verCardVerIndex = 70
         verCardHorIndex = 8
      }

      for (let i = 0; i < verticalContainers.length; i++) {
         animateCards(
            verticalContainers[i],
            verticalCards[i],
            verCardVerIndex,
            verCardHorIndex
         )
      }

      for (let i = 0; i < horizontalContainers.length; i++) {
         animateCards(
            horizontalContainers[i],
            horizontalCards[i],
            horCardVerIndex,
            horCardHorIndex
         )
      }
   }, [animateCards])

   return (
      <div className="projects">
         <Navbar />
         <div className="content">
            <Project1 icons={icons} titleIcon={BiLinkExternal} />
            <Project2 icons={icons} titleIcon={BiLinkExternal} />
            <Project3 folderIcon={HiOutlineFolder} />
         </div>
      </div>
   )
}
