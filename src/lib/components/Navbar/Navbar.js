import React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import logo from "../../../media/image/logo.jpg"

export const Navbar = () => {
   return (
      <div className="navbar">
         <div className="nav-logo">
            <Link to="/">
               <img src={logo} alt="logo" />
            </Link>
         </div>
         <ul className="nav-right">
            <Link to="/playGround">
               <li className="nav-playGround js-navItem">PlayGround</li>
            </Link>
            <Link to="/projects">
               <li className="nav-project js-navItem">Projects</li>
            </Link>
            <Link to="/">
               <li className="nav-contact js-navItem">Contact</li>
            </Link>
         </ul>
      </div>
   )
}
