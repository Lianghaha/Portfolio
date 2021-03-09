import React from "react"
import "./Project1.css"
import { TechComponent } from "../TechComponent/TechComponent"
//Gif
import responsiveGifFTP from "../../../media/image/Projects/Opt-FTP-800.gif"

export const Project1 = (props) => {
   const icons = props.icons
   const titleIcon = props.titleIcon

   return (
      <div className="project1 project-item">
         <div className="project-info">
            <div className="display-container js-project-slideIn">
               <img src={responsiveGifFTP} alt="Respomsive Animation" />
            </div>
            <div className="project-title-container js-project-slideIn">
               <a
                  className="project-title project-title-hover"
                  href="https://www.findtheprophets.com/"
               >
                  <h1>
                     FindTheProphets<span>.com</span>
                  </h1>
                  {titleIcon()}
               </a>
            </div>
            <div className="description card-container vertical-card-container">
               <div className="description-card card vertical-card js-project-slideIn">
                  <h3>About this project</h3>
                  <p>
                     <span>General: </span>FindTheProphets.com is a rating
                     website that can help the users find out the credibility of
                     the predictors. Users can search, filter, and rate
                     different predictions. The predictions' score will affect
                     related predictors' score, which indicates how credible a
                     predictor is.
                  </p>
                  <p>
                     <span>Technical: </span>It is a Full Stack React Web
                     Application. The front-end, back-end, and database were all
                     built by myself from scratch.
                  </p>
               </div>
            </div>
            <div className="description card-container vertical-card-container">
               <div className="description-card card vertical-card js-project-slideIn">
                  <h3>Why I built this project?</h3>
                  <p>
                     <span>General: </span>During the pandemic, I saw too many
                     unreliable daunting predictions intended just to attract
                     attention. So I thought it would be a good idea to build a
                     website to counter irresponsible predictors.
                  </p>
                  <p>
                     <span>Technical: </span>I wanted to polish my front-end
                     development skills (CSS, React, JavaScript ES6+), and
                     deepen my understanding of full stack development. After I
                     built this project, I can confidently say that I am capable
                     of building good-looking full stack web applications just
                     by myself.
                  </p>
               </div>
            </div>
         </div>
         <div className="project-stack">
            <h2 className="project-subtitle js-project-slideIn">
               Technologies Used
            </h2>
            <div className="frontend card-container horizontal-card-container">
               <div className="frontend-card card horizontal-card js-project-slideIn">
                  <h3>Front-End</h3>
                  <TechComponent image={icons.reactIcon} text="React.js" />
                  <TechComponent image={icons.reduxIcon} text="Redux" />
                  <TechComponent image={icons.jsIcon} text="JavaScript ES6+" />
                  <TechComponent image={icons.cssIcon} text="CSS3" />
                  <TechComponent image={icons.htmlIcon} text="HTML5" />
                  <TechComponent image={icons.axiosIcon} text="Axios" />
               </div>
            </div>
            <div className="backend card-container horizontal-card-container">
               <div className="backend-card card horizontal-card js-project-slideIn">
                  <h3>Back-End</h3>
                  <TechComponent image={icons.nodeIcon} text="Node.js" />
                  <TechComponent image={icons.expressIcon} text="Express" />
                  <TechComponent image={icons.mySQLIcon} text="MySQL" />
                  <TechComponent image={icons.restAPIIcon} text="RESTful API" />
               </div>
            </div>
            <div className="other card-container horizontal-card-container">
               <div className="other-card card horizontal-card js-project-slideIn">
                  <h3>Other</h3>
                  <TechComponent image={icons.gitIcon} text="Git" />
                  <TechComponent image={icons.psIcon} text="Photoshop" />
                  <TechComponent image={icons.herokuIcon} text="Heroku" />
                  <TechComponent image={icons.awsIcon} text="AWS" />
               </div>
            </div>
            <div className="break-line js-project-slideIn"></div>
         </div>
      </div>
   )
}
