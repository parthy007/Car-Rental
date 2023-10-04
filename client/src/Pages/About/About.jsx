import "./About.css"
import Jeep from "../../assets/jeep.png"
import Sign from "../../assets/sign.png"
import Anniversary from "../../assets/anniversarylogo.png"
import Blob from "../../assets/blob.svg"

const About = () => {
  return (
    <div className="about" id="about">
      <div className="aboutWrapper">
        {/* Left section of the About component */}
        <div className="aboutLeft">
            <div className="aboutImgContainer">
              {/* Image of the car */}
                <img src={Jeep} alt="" className="aboutCar"/>
                {/* Svg design element */}
                <img src={Blob} alt="" className="aboutBlob"/>
            </div>
        </div>
        {/* Right section of the About component */}
        <div className="aboutRight">
            {/* About Us title */}
            <div className="aboutTitle">About Us</div>
            {/* Main heading */}
            <h1 className="aboutHeading">Feel the Best Experience With Us</h1>
            {/* Description */}
            <div className="aboutDesc">
                At DriveEase Car  Rentals, we're not just a car rental service; we're a family-driven venture started by passionate car enthusiasts. Founded by Parth, a lifelong traveler with a penchant for exceptional service, we aim to share our love for road adventures with you. Every vehicle we offer is handpicked, ensuring the utmost safety and comfort for your journey. With DriveEase, you're not just a customer; you're a valued member of our road-tripping family. Join us in exploring the world, one scenic drive at a time.
            </div>
            {/* Signature and Anniversary section */}
            <div className="aboutSignWrapper">
                <div className="signWrapper">
                    {/* Signature image */}
                    <img src={Sign} alt="" className="aboutSign"/>
                    {/* Name */}
                    <div className="aboutName">Parth</div>
                </div>
                {/* Anniversary logo */}
                <img src={Anniversary} alt="" className="anniversary" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
