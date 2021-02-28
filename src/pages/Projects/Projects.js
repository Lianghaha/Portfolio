import React, { useLayoutEffect, useCallback } from "react"
import "./Projects.css"
import { gsap, Power2 } from "gsap"
import { Navbar } from "../../lib/components/Navbar/Navbar"
import { TechComponent } from "./TechComponent/TechComponent"

//Gif
import responsiveGif from "../../media/image/Projects/Opt-Group-800.gif"
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
      // Start Page Animation
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
               stagger: 0.1,
               duration: 1,
               opacity: 0,
               ease: Power2.easeOut,
            },
            "-=3.5"
         )

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
            <div className="project-1 project-item">
               <div className="display-container js-project-slideIn">
                  <img src={responsiveGif} alt="" />
               </div>
               <div className="project-title-container js-project-slideIn">
                  <a
                     className="project-title project-title-hover"
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
                     <h3>About this project</h3>
                     <p>
                        <span>General: </span>FindTheProphets.com is a rating
                        website that can help the users find out the credibility
                        of the predictors. Users can search, filter, and rate
                        different predictions. The predictions' score will
                        affect related predictors' score, which indicates how
                        credible a predictor is.
                     </p>
                     <p>
                        <span>Technical: </span>It is a Full Stack React Web
                        Application. The front-end, back-end, and database were
                        all built by myself from scratch.
                     </p>
                  </div>
               </div>

               <div className="description card-container vertical-card-container">
                  <div className="description-card card vertical-card js-project-slideIn">
                     <h3>Why I built this project?</h3>
                     <p>
                        <span>General: </span>During the pandemic, I saw too
                        many unreliable daunting predictions intended just to
                        attract attention. So I thought it would be a good idea
                        to build a website to counter irresponsible predictors.
                     </p>
                     <p>
                        <span>Technical: </span>I wanted to polish my front-end
                        development skills (CSS, React, JavaScript ES6+), and
                        deepen my understanding of full stack development. After
                        I built this project, I can confidently say that I am
                        capable of building good-looking full stack web
                        applications just by myself.
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
            <div className="break-line js-project-slideIn"></div>
            <div className="project-2 project-item">
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
                        <span>General: </span>This is a Portfolio website where
                        I can display my projects and other information in a
                        prettier and more animated way.
                     </p>
                     <p>
                        <span>Technical: </span>It is a pure Front-End React Web
                        Application that focuses more on animation and design.
                     </p>
                  </div>
               </div>

               <div className="description card-container vertical-card-container">
                  <div className="description-card card vertical-card js-project-slideIn">
                     <h3>Why I built this project?</h3>
                     <p>
                        <span>General: </span>I need a Portfolio website to show
                        my projects and information. I could choose to build a
                        quick and simple one, but I thought if I had to spend
                        time to build one, why not make it more interesting?
                     </p>
                     <p>
                        <span>Technical: </span>Building good-looking UI always
                        makes me excited, and I am especially interested in
                        animation. So I decided to learn more about animation
                        and some design tools (Photoshop, Figma) through
                        building this website.
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
                     <TechComponent image={figmaIcon} text="Figma" />
                  </div>
               </div>
               <div className="break-line js-project-slideIn"></div>
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
   )
}
