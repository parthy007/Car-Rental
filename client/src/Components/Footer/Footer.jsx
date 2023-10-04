import "./Footer.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footerTop">
            <div className="footerTopLeft">
                <h1 className="footerTopLeftTitle">DriveEase.</h1>
                <div className="footerTopLeftDesc">
                    Discover freedom on wheels with our premier car rental service. From compact cars to spacious SUVs, we provide top-notch vehicles for your every journey. Drive with confidence and convenience!
                </div>
            </div>
            <div className="footerTopRight">
                <div className="footerTopRightWrapper">
                    <h3 className="footerTopRightTitle">
                        Our Links
                    </h3>
                    <div className="footerTopPageLinks">
                        <HashLink className="footerLink"  smooth to="/#home">
                            <span className="link">Home</span>
                        </HashLink>
                        <HashLink className="footerLink"  smooth to="/#about">
                            <span className="link">About</span>
                        </HashLink>
                        <HashLink className="footerLink"  smooth to="/#fleet">
                            <span className="link">Fleet</span>
                        </HashLink>
                        <HashLink className="footerLink"  smooth to="/#testimonials">
                            <span className="link">Testimonials</span>
                        </HashLink>
                        <HashLink className="footerLink"  smooth to="/#contact">
                            <span className="link">Contact</span>
                        </HashLink>
                    </div>
                </div>
                <div className="footerTopRightWrapper secondTopRight">
                    <h3 className="footerTopRightTitle">
                        Other Links
                    </h3>
                    <div className="footerTopPageLinks">
                        <HashLink className="footerLink" >
                            <span className="link">FAQ</span>
                        </HashLink>
                        <HashLink className="footerLink" >
                            <span className="link">Support</span>
                        </HashLink>
                        <HashLink className="footerLink" >
                            <span className="link">Privacy</span>
                        </HashLink>
                        <HashLink className="footerLink" >
                            <span className="link">Terms & Conditions</span>
                        </HashLink>
                        <HashLink className="footerLink" >
                            <span className="link">Gallery</span>
                        </HashLink>
                    </div>
                </div>
            </div>
        </div>
        <div className="footerBottom">
            <div className="footerBottomLeft">
                <div className="footerBottomLeftFirst location">
                    <h3 className="footerBottomLeftTitle">
                        Location
                    </h3>
                    <div className="footerBottomLeftDesc">
                
                        <div className="footerBottomIconWrapper">
                            <LocationOnIcon/>
                        </div>
                        <div className="footerBottomText">
                            Banglore
                        </div>
    
                    </div>
                </div>
                <div className="footerBottomLeftSecond">
                    <h3 className="footerBottomLeftTitle">
                        Mail
                    </h3>
                    <div className="footerBottomLeftDesc">

                        <div className="footerBottomIconWrapper">
                            <MailIcon/>
                        </div>
                        <div className="footerBottomText">
                            info@gmail.com
                        </div>

                    </div>
                </div>
            </div>
            <div className="footerBottomRight">
                <div className="footerBottomRightFirst">
                    <h3 className="footerBottomRightTitle">
                        Call
                    </h3>
                    <div className="footerBottomRightDesc">
                        <div className="footerBottomIconWrapper">
                            <CallIcon/>
                        </div>
                        <div className="footerBottomText">
                            1800-101-1616
                        </div>
                    </div>
                </div>
                <div className="footerBottomRightSecond">
                    <h3 className="footerRights">Copyright&copy;<i>DriveEase.</i>All rights reserved.</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
