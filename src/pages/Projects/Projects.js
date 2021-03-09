import React, { useLayoutEffect, useCallback } from "react"
import "./Projects.css"
import { gsap, Power2 } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Navbar } from "../../lib/components/Navbar/Navbar"
import { TechComponent } from "./TechComponent/TechComponent"
import { Project1 } from "./Project1/Project1"
// Icon
import reactIcon from "../../media/image/Projects/Stack-Icon/React.png"
import jsIcon from "../../media/image/Projects/Stack-Icon/JavaScript.png"
import htmlIcon from "../../media/image/Projects/Stack-Icon/HTML5.png"
import cssIcon from "../../media/image/Projects/Stack-Icon/CSS3.png"
import axiosIcon from "../../media/image/Projects/Stack-Icon/Axios.png"
import reduxIcon from "../../media/image/Projects/Stack-Icon/Redux.png"
import nodeIcon from "../../media/image/Projects/Stack-Icon/Node.png"
import expressIcon from "../../media/image/Projects/Stack-Icon/Express.png"
import restAPIIcon from "../../media/image/Projects/Stack-Icon/RestAPI.png"
import mySQLIcon from "../../media/image/Projects/Stack-Icon/MySQL.png"
import gitIcon from "../../media/image/Projects/Stack-Icon/Git.png"
import psIcon from "../../media/image/Projects/Stack-Icon/PS.png"
import herokuIcon from "../../media/image/Projects/Stack-Icon/Heroku.png"
import awsIcon from "../../media/image/Projects/Stack-Icon/AWS.png"
import gsapIcon from "../../media/image/Projects/Stack-Icon/GSAP.png"
import figmaIcon from "../../media/image/Projects/Stack-Icon/Figma.png"
//React-Icon
import { BiLinkExternal } from "react-icons/bi"
import { HiOutlineFolder } from "react-icons/hi"
import { FiGithub } from "react-icons/fi"
//Goggle Analytic
import ReactGa from "react-ga"

const icons = {
   reactIcon,
   jsIcon,
   htmlIcon,
   cssIcon,
   axiosIcon,
   reduxIcon,
   nodeIcon,
   expressIcon,
   restAPIIcon,
   mySQLIcon,
   gitIcon,
   psIcon,
   herokuIcon,
   awsIcon,
   gsapIcon,
   figmaIcon,
}

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
            <div className="project-2 project-item">
               <div className="project-info">
                  {/* GIF Display */}
                  {/* <div className="display card-container vertical-card-container">
                     <div className="display-card card vertical-card js-project-slideIn">
                        <img src={responsiveGifP} alt="Respomsive Animation" />
                     </div>
                  </div> */}
                  <div className="project-title-container js-project-slideIn">
                     <a
                        className="project-title project-title-hover"
                        href="https://lianghaha.github.io/Portfolio/#/"
                     >
                        <h1>
                           <span>this.</span>Portfolio
                        </h1>
                        <BiLinkExternal />
                     </a>
                  </div>
                  <div className="description card-container vertical-card-container">
                     <div className="description-card card vertical-card js-project-slideIn">
                        <h3>About this project</h3>
                        <p>
                           <span>General: </span>This is a Portfolio website
                           where I can display my projects and other information
                           in a more vivid way.
                        </p>
                        <p>
                           <span>Technical: </span>It is a pure Front-End React
                           Web Application that focuses more on animation and
                           design.
                        </p>
                     </div>
                  </div>
                  <div className="description card-container vertical-card-container">
                     <div className="description-card card vertical-card js-project-slideIn">
                        <h3>Why I built this project?</h3>
                        <p>
                           <span>General: </span>I need a Portfolio website to
                           show my projects and information. I could choose to
                           build a quick and simple one, but I thought if I had
                           to spend time to build one, why not make it more
                           interesting?
                        </p>
                        <p>
                           <span>Technical: </span>Building good-looking UI
                           always makes me excited, and I am especially
                           interested in animation. So I decided to learn more
                           about animation and also some design tools
                           (Photoshop, Figma) through building this website.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="project-stack">
                  <h2 className="project-subtitle js-project-slideIn">
                     Technologies Used
                  </h2>
                  <div className="stack card-container vertical-card-container">
                     <div className="stack-card card vertical-card js-project-slideIn">
                        <TechComponent image={reactIcon} text="React.js" />
                        <TechComponent image={reduxIcon} text="Redux" />
                        <TechComponent image={jsIcon} text="JavaScript ES6+" />
                        <TechComponent image={cssIcon} text="CSS3" />
                        <TechComponent image={htmlIcon} text="HTML5" />
                        <TechComponent image={gitIcon} text="Git" />
                        <TechComponent image={psIcon} text="Photoshop" />
                        <TechComponent image={gsapIcon} text="GSAP Animation" />
                        <TechComponent image={figmaIcon} text="Figma" />
                     </div>
                  </div>
                  <div className="break-line js-project-slideIn"></div>
               </div>
            </div>

            <div className="project-3 project-item">
               <div className="project-info">
                  <div className="project-title-container js-project-slideIn">
                     <div className="project-title">
                        <h1>
                           Other <span>Projects</span>
                        </h1>
                     </div>
                  </div>
                  <div className="square card-container horizontal-card-container">
                     <div className="square-card card horizontal-card js-project-slideIn">
                        <div className="other-project-icons">
                           <div className="other-project-folder">
                              <HiOutlineFolder />
                           </div>
                           <a
                              className="other-project-github"
                              href="https://github.com/Lianghaha/play-redux"
                           >
                              <FiGithub />
                           </a>
                        </div>
                        <h3>play-redux</h3>
                        <p>
                           A simple web app built while I was learning Redux.
                           Practiced integrating <span>Redux with React</span>,
                           adding Redux <span>Middleware</span> and conducting
                           <span> API Calls</span> while using Redux
                        </p>
                        <div className="space-keywords"></div>
                        <div className="other-project-keywords">
                           <p>Redux</p>
                           <p>React</p>
                           <p>JavaScript</p>
                        </div>
                     </div>
                  </div>
                  <div className="square card-container horizontal-card-container">
                     <div className="square-card card horizontal-card js-project-slideIn">
                        <div className="other-project-icons">
                           <div className="other-project-folder">
                              <HiOutlineFolder />
                           </div>
                           <a
                              className="other-project-github"
                              href="https://github.com/Lianghaha/warehouse-management"
                           >
                              <FiGithub />
                           </a>
                        </div>
                        <h3>warehouse-system</h3>
                        <p>
                           A <span>Java</span> program that guides workers and
                           tracks the inventory in the warehouse. Practiced
                           <span> Object-Oriented Programming</span>,
                           <span> MVC model</span> and learned some very useful
                           <span> Design Patterns</span>
                        </p>
                        <div className="space-keywords"></div>
                        <div className="other-project-keywords">
                           <p>Java</p>
                           <p>Design Patterns</p>
                           <p>OOP</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
