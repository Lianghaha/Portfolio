import React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import logo from "../../../media/image/logoBlue.svg"
//React-icons
import { IoRocketOutline } from "react-icons/io5"
import { RiContactsLine } from "react-icons/ri"
import { IoChatbubbleEllipsesOutline } from "react-icons/io5"

export const Navbar = () => {
   return (
      <div className="navbar">
         <div className="nav-logo">
            <Link to="/">
               <img src={logo} alt="logo" />
            </Link>
         </div>
         <ul className="nav-right">
            <Link to="/projects">
               <li className="nav-project js-navItem">
                  <IoRocketOutline />
                  <p>Projects</p>
               </li>
            </Link>
            <Link to="">
               <li className="nav-skills js-navItem">
                  <RiContactsLine />
                  {/* <p>Skills</p>
                  <p>&</p>
                  <p>About</p> */}
                  <p>Coming</p>
                  <p>Soon</p>
               </li>
            </Link>
            <Link to="">
               <li className="nav-contact js-navItem">
                  <IoChatbubbleEllipsesOutline />
                  {/* <p>Contact</p> */}
                  <p>Coming</p>
                  <p>Soon</p>
               </li>
            </Link>
         </ul>
      </div>
   )
}
