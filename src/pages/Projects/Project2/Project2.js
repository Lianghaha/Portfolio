import React from "react"
import "./Project2.css"
import { TechComponent } from "../TechComponent/TechComponent"

export const Project2 = (props) => {
   const icons = props.icons
   const titleIcon = props.titleIcon

   return (
      <div className="project-2 project-item">
         <div className="project-info">
            <div className="project-title-container js-project-slideIn">
               <a
                  className="project-title project-title-hover"
                  href="https://lianghaha.github.io/Portfolio/#/"
               >
                  <h1>
                     <span>this.</span>Portfolio
                  </h1>
                  {titleIcon()}
               </a>
            </div>
            <div className="description card-container vertical-card-container">
               <div className="description-card card vertical-card js-project-slideIn">
                  <h3>About this project</h3>
                  <p>
                     <span>General: </span>This is a Portfolio website where I
                     can display my projects and other information in a more
                     vivid way.
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
                     <span>General: </span>I need a Portfolio website to show my
                     projects and information. I could choose to build a quick
                     and simple one, but I thought if I had to spend time to
                     build one, why not make it more interesting?
                  </p>
                  <p>
                     <span>Technical: </span>Building good-looking UI always
                     makes me excited, and I am especially interested in
                     animation. So I decided to learn more about animation and
                     also some design tools (Photoshop, Figma) through building
                     this website.
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
                  <TechComponent image={icons.reactIcon} text="React.js" />
                  <TechComponent image={icons.reduxIcon} text="Redux" />
                  <TechComponent image={icons.jsIcon} text="JavaScript ES6+" />
                  <TechComponent image={icons.cssIcon} text="CSS3" />
                  <TechComponent image={icons.htmlIcon} text="HTML5" />
                  <TechComponent image={icons.gitIcon} text="Git" />
                  <TechComponent image={icons.psIcon} text="Photoshop" />
                  <TechComponent image={icons.gsapIcon} text="GSAP Animation" />
                  <TechComponent image={icons.figmaIcon} text="Figma" />
               </div>
            </div>
            <div className="break-line js-project-slideIn"></div>
         </div>
      </div>
   )
}
