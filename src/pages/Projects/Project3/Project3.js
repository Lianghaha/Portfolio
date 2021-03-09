import React from "react"
import "./Project3.css"
import { FiGithub } from "react-icons/fi"

export const Project3 = (props) => {
   const folderIcon = props.folderIcon

   return (
      <div className="project3 project-item">
         <div className="project-info">
            <div className="project-title-container js-project-slideIn">
               <div className="project-title">
                  <h1>
                     Other <span>Projects</span>
                  </h1>
               </div>
            </div>
            <div className="square card-container square-card-container">
               <div className="square-card card square-card js-project-slideIn">
                  <div className="square-title-icons">
                     <div className="square-title-main">{folderIcon()}</div>
                     <a
                        className="square-title-external"
                        href="https://github.com/Lianghaha/play-redux"
                     >
                        <FiGithub />
                     </a>
                  </div>
                  <h3>play-redux</h3>
                  <p>
                     A simple web app built while I was learning Redux.
                     Practiced integrating <span>Redux with React</span>, adding
                     Redux <span>Middleware</span> and conducting
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
            <div className="square card-container square-card-container">
               <div className="square-card card square-card js-project-slideIn">
                  <div className="square-title-icons">
                     <div className="square-title-main">{folderIcon()}</div>
                     <a
                        className="square-title-external"
                        href="https://github.com/Lianghaha/warehouse-management"
                     >
                        <FiGithub />
                     </a>
                  </div>
                  <h3>warehouse-system</h3>
                  <p>
                     A <span>Java</span> program that guides workers and tracks
                     the inventory in the warehouse. Practiced
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
            <div className="break-line js-project-slideIn"></div>
         </div>
      </div>
   )
}
