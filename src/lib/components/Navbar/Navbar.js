import React, { useLayoutEffect } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import logo from "../../../media/image/logoBlue.svg"
//React-icons
import { IoRocketOutline } from "react-icons/io5"
import { RiContactsLine } from "react-icons/ri"
import { IoChatbubbleEllipsesOutline } from "react-icons/io5"
import { useDispatch } from "react-redux"
import { turnOnLoader } from "../../../redux/actions"
import { gsap, Power3 } from "gsap"

export const Navbar = () => {
   const dispatch = useDispatch()

   useLayoutEffect(() => {
      // move top left animation
      // const logo = document.querySelector(".nav-logo")
      // if (logo) {
      //    let logoXCoord =
      //       logo.getBoundingClientRect().left + logo.clientWidth / 2
      //    let logoYCoord =
      //       logo.getBoundingClientRect().top + logo.clientHeight / 2
      gsap
         .timeline()
         .from(".nav-logo", {
            // x: window.innerWidth / 2 - logoXCoord,
            // y: window.innerHeight / 2 - logoYCoord,
            scale: 0.01,
            duration: 0.6,
            ease: Power3.easeIn,
         }) //Navbar
         .from(
            ".js-navItem",
            {
               opacity: 0,
               y: 80,
               x: -120,
               stagger: 0.2,
               duration: 1,
               ease: Power3.easeOut,
            },
            "-=0.2"
         )
   }, [])

   return (
      <div className="navbar">
         <div className="nav-logo">
            <Link to="/" onClick={() => dispatch(turnOnLoader())}>
               <img src={logo} alt="logo" />
            </Link>
         </div>
         <ul className="nav-right">
            <Link to="/projects" onClick={() => dispatch(turnOnLoader())}>
               <li className="nav-project js-navItem">
                  <IoRocketOutline />
                  <p>Projects</p>
               </li>
            </Link>
            <Link to="" onClick={() => dispatch(turnOnLoader())}>
               <li className="nav-skills js-navItem">
                  <RiContactsLine />
                  {/* <p>Skills</p>
                  <p>&</p>
                  <p>About</p> */}
                  <p>Coming</p>
                  <p>Soon</p>
               </li>
            </Link>
            <Link to="" onClick={() => dispatch(turnOnLoader())}>
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
