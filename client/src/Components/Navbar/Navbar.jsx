import "./Navbar.css"
import { logout } from "../../authContext/AuthAction.js"
import {useContext, useState} from "react";
import {AuthContext} from "../../authContext/AuthContext.js"
import { HashLink } from "react-router-hash-link"
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {

  const {dispatch} = useContext(AuthContext); // Get the logout function from the AuthContext
  const [slide, setSlide] = useState(false) // State to control slide-in menu

  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
            <h1 className="logo">DriveEase</h1>
        </div>
        <div className="navbarRight">
            {/* Navigation links */}
            <div className="navLinks">
                <HashLink smooth to="/#home" className="navLink">
                  <span className="links">Home</span>
                </HashLink>
                <HashLink smooth to="/#about"className="navLink">
                  <span className="links">About</span>
                </HashLink>
                <HashLink smooth to="/#fleet"className="navLink">
                  <span className="links">Fleet</span>
                </HashLink>
                <HashLink smooth to="/#testimonials"className="navLink">
                  <span className="links">Testimonials</span>
                </HashLink>
                <HashLink smooth to="/#contact"className="navLink">
                  <span className="links">Contact</span>
                </HashLink>
            </div>

            {/* Slide-in menu */}
            {slide && (
                <div className="navVerticalLinks">
                  {/* Close icon */}
                  <div className="closeIconWrapper">
                    <IconButton className="closeIcon" onClick={(e)=>setSlide(false)}>
                      <CloseIcon/>
                    </IconButton>
                  </div>
                  <HashLink smooth to="/#home" className="navLink">
                    <span className="verticallink">Home</span>
                  </HashLink>
                  <HashLink smooth to="/#about" className="navLink">
                    <span className="verticallink">About</span>
                  </HashLink>
                  <HashLink smooth to="/#fleet" className="navLink">
                    <span className="verticallink">Fleet</span>
                  </HashLink>
                  <HashLink smooth to="/#testimonials" className="navLink">
                    <span className="verticallink">Testimonials</span>
                  </HashLink>
                  <HashLink smooth to="/#contact" className="navLink">
                    <span className="verticallink">Contact</span>
                  </HashLink>
                </div>
            )}
            <div className="navbarMenuIconWrapper">
              {/* Menu icon to trigger slide-in menu */}
              <IconButton className="navbarMenuIcon" onClick={(e)=>setSlide(true)}>
                <MenuIcon/>
              </IconButton>
            </div>
            {/* Logout button */}
            <button className="logoutBtn" onClick={(e)=>dispatch(logout())}>LogOut</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
