import "./Navbar.css"
import { logout } from "../../authContext/AuthAction.js"
import {useContext, useState} from "react";
import {AuthContext} from "../../authContext/AuthContext.js"
import { HashLink } from "react-router-hash-link"
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {

  const {dispatch} = useContext(AuthContext);
  const [slide, setSlide] = useState(false)

  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
            <h1 className="logo">DriveEase</h1>
        </div>
        <div className="navbarRight">
            <div className="navLinks">
                <HashLink smooth to="/#home">
                  <span className="links">Home</span>
                </HashLink>
                <HashLink smooth to="/#about">
                  <span className="links">About</span>
                </HashLink>
                <HashLink smooth to="/#fleet">
                  <span className="links">Fleet</span>
                </HashLink>
                <HashLink smooth to="/#testimonials">
                  <span className="links">Testimonials</span>
                </HashLink>
                <HashLink smooth to="/#contact">
                  <span className="links">Contact</span>
                </HashLink>
            </div>
            {slide && (
                <div className="navVerticalLinks">
                  <div className="closeIconWrapper">
                    <IconButton className="closeIcon" onClick={(e)=>setSlide(false)}>
                      <CloseIcon/>
                    </IconButton>
                  </div>
                  <HashLink smooth to="/#home">
                    <span className="verticallink">Home</span>
                  </HashLink>
                  <HashLink smooth to="/#about">
                    <span className="verticallink">About</span>
                  </HashLink>
                  <HashLink smooth to="/#fleet">
                    <span className="verticallink">Fleet</span>
                  </HashLink>
                  <HashLink smooth to="/#testimonials">
                    <span className="verticallink">Testimonials</span>
                  </HashLink>
                  <HashLink smooth to="/#contact">
                    <span className="verticallink">Contact</span>
                  </HashLink>
                </div>
            )}
            <div className="navbarMenuIconWrapper">
              <IconButton className="navbarMenuIcon" onClick={(e)=>setSlide(true)}>
                <MenuIcon/>
              </IconButton>
            </div>
            <button className="logoutBtn" onClick={(e)=>dispatch(logout())}>LogOut</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
