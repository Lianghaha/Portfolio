import React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import logo from "../../../media/image/logo.jpg"

export const Navbar = () => {
   return (
      <div className="navbarContainer">
         <div className="navbar">
            <div className="logo">
               <Link to="/">
                  <img src={logo} alt="logo" />
               </Link>
            </div>
            <ul className="navRight">
               <Link to="/PlayGround">
                  <li className="navPlayGround navItem">PlayGround</li>
               </Link>
               <Link to="/Projects">
                  <li className="navProject navItem">Projects</li>
               </Link>
               <Link to="/">
                  <li className="navContact navItem">Contact</li>
               </Link>
            </ul>
         </div>
      </div>
   )
}
