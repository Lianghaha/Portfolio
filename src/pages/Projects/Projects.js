import React, { useLayoutEffect, useCallback } from "react"
import "./Projects.css"
import { gsap, Power2 } from "gsap"
import { Navbar } from "../../lib/components/Navbar/Navbar"
import { TechComponent } from "./TechComponent/TechComponent"

//Gif
import desktop from "../../media/image/Projects/Opt-FDP-Group-600.gif"
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

//React-Icon
import { BiLinkExternal } from "react-icons/bi"

export const Projects = () => {
   const animateCards = useCallback((container, card, xDivider, yDivider) => {
      //Moving Animation Event
      container.addEventListener("mousemove", (e) => {
         //card center x Axis
         let x = card.getBoundingClientRect().left + card.clientWidth / 2

         //card center y axis
         let y = card.getBoundingClientRect().top + card.clientHeight / 2

         let xDeg = (x - e.pageX) / xDivider
         let yDeg = (e.pageY - window.pageYOffset - y) / yDivider

         card.style.transform = `rotateY(${xDeg}deg) rotateX(${yDeg}deg)`
         // let xAxis = (window.innerWidth / 2 - e.pageX) / 25
         // let yAxis = (e.pageY - window.innerHeight / 2) / 25
         // card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
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
      gsap
         .timeline()
         .from(
            ".js-project-slideIn",
            {
               delay: 1.8,
               x: -80,
               y: -80,
               stagger: 0.2,
               duration: 1,
               opacity: 0,
               ease: Power2.easeOut,
            },
            "-=1"
         )
         .from(
            ".tech-component",
            {
               marginTop: -30,
               marginLeft: -30,
               // scale: 0.01,
               stagger: 0.15,
               duration: 0.8,
               opacity: 0,
               ease: Power2.easeOut,
            },
            "-=3"
         )

      const verticalCards = document.querySelectorAll(".vertical-card")
      const verticalContainers = document.querySelectorAll(
         ".vertical-card-container"
      )
      const horizontalCards = document.querySelectorAll(".horizontal-card")
      const horizontalContainers = document.querySelectorAll(
         ".horizontal-card-container"
      )

      for (let i = 0; i < verticalContainers.length; i++) {
         animateCards(verticalContainers[i], verticalCards[i], 39, 15)
      }
      for (let i = 0; i < horizontalContainers.length; i++) {
         animateCards(horizontalContainers[i], horizontalCards[i], 10, 25)
      }
   }, [animateCards])

   return (
      <div className="projects">
         <Navbar />
         <div className="content">
            <div className="project-1 project-item">
               <div className="display-container js-project-slideIn">
                  <img src={desktop} alt="" />
               </div>
               <div className="project-title-container js-project-slideIn">
                  <a
                     className="project-title"
                     href="https://www.findtheprophets.com/"
                  >
                     <h1>
                        FindTheProphets<span>.com</span>
                     </h1>
                     <BiLinkExternal />
                  </a>
               </div>

               <div className="description card-container vertical-card-container">
                  <div className="description-card card vertical-card js-project-slideIn">
                     <h3>Description</h3>
                     <p>
                        FindTheProphets.com is a rating website that can help
                        the users find out the credibility of the predictors.
                        Users can search, filter, and rate different
                        predictions. The predictions' score will affect related
                        predictors' score, which indicates how credible a
                        predictor is.
                     </p>
                     <p>
                        Technically, it's a Full Stack React Web Application.
                        The front-end, back-end and the database were all built
                        by myself from scratch.
                     </p>
                  </div>
               </div>

               <div className="description card-container vertical-card-container">
                  <div className="description-card card vertical-card js-project-slideIn">
                     <h3>Why I built this project?</h3>
                     <p>
                        During the pandemic, I saw too many unreliable daunting
                        predictions intended just to attract attention. So I
                        thought it would be a good idea to build a website to
                        counter irresponsible predictors.
                     </p>
                     <p>
                        Technically, I wanted to polish my front-end development
                        skills(CSS, React, JavaScript ES6+), and deepen my
                        understanding of full stack development. After I built
                        this project, I can confidently say that I am capable to
                        build a good looking full stack web application just by
                        myself.
                     </p>
                  </div>
               </div>
               <h2 className="project-subtitle js-project-slideIn">
                  Technologies Used
               </h2>
               <div className="frontend card-container horizontal-card-container">
                  <div className="frontend-card card horizontal-card js-project-slideIn">
                     <h3>Front-End</h3>
                     <TechComponent image={reactIcon} text="React.js" />
                     <TechComponent image={reduxIcon} text="Redux" />
                     <TechComponent image={jsIcon} text="JavaScript ES6+" />
                     <TechComponent image={cssIcon} text="CSS3" />
                     <TechComponent image={htmlIcon} text="HTML5" />
                     <TechComponent image={axiosIcon} text="Axios" />
                  </div>
               </div>
               <div className="backend card-container horizontal-card-container">
                  <div className="backend-card card horizontal-card js-project-slideIn">
                     <h3>Back-End</h3>
                     <TechComponent image={nodeIcon} text="Node.js" />
                     <TechComponent image={expressIcon} text="Express" />
                     <TechComponent image={mySQLIcon} text="MySQL" />
                     <TechComponent image={restAPIIcon} text="RESTful API" />
                  </div>
               </div>
               <div className="other card-container horizontal-card-container">
                  <div className="other-card card horizontal-card js-project-slideIn">
                     <h3>Other</h3>
                     <TechComponent image={gitIcon} text="Git" />
                     <TechComponent image={psIcon} text="Photoshop" />
                     <TechComponent image={herokuIcon} text="Heroku" />
                     <TechComponent image={awsIcon} text="AWS" />
                  </div>
               </div>
            </div>
            <hr />
            <div className="project-2 project-item">
               <div className="project-title-container js-project-slideIn">
                  <a
                     className="project-title"
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
                     <h3>Description</h3>
                     <p>
                        FindTheProphets.com is a rating website that can help
                        the users find out the credibility of the predictors.
                        Users can search, filter, and rate different
                        predictions. The predictions' score will affect related
                        predictors' score, which indicates how credible a
                        predictor is.
                     </p>
                     <p>
                        Technically, it's a Full Stack React Web Application.
                        The front-end, back-end and the database were all built
                        by myself from scratch.
                     </p>
                  </div>
               </div>

               <div className="description card-container vertical-card-container">
                  <div className="description-card card vertical-card js-project-slideIn">
                     <h3>Why I built this project?</h3>
                     <p>
                        During the pandemic, I saw too many unreliable daunting
                        predictions intended just to attract attention. So I
                        thought it would be a good idea to build a website to
                        counter irresponsible predictors.
                     </p>
                     <p>
                        Technically, I wanted to polish my front-end development
                        skills(CSS, React, JavaScript ES6+), and deepen my
                        understanding of full stack development. After I built
                        this project, I can confidently say that I am capable to
                        build a good looking full stack web application just by
                        myself.
                     </p>
                  </div>
               </div>

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
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
