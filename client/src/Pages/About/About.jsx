import "./About.css"
import Jeep from "../../assets/jeep.png"
import Sign from "../../assets/sign.png"
import Anniversary from "../../assets/anniversarylogo.png"
import Blob from "../../assets/blob.svg"

const About = () => {
  return (
    <div className="about" id="about">
      <div className="aboutWrapper">
        <div className="aboutLeft">
            <div className="aboutImgContainer">
                <img src={Jeep} alt="" className="aboutCar"/>
                <img src={Blob} alt="" className="aboutBlob"/>
            </div>
        </div>
        <div className="aboutRight">
            <div className="aboutTitle">About Us</div>
            <h1 className="aboutHeading">Feel the Best Experience With Us</h1>
            <div className="aboutDesc">
                At DriveEase Car  Rentals, we're not just a car rental service; we're a family-driven venture started by passionate car enthusiasts. Founded by Parth, a lifelong traveler with a penchant for exceptional service, we aim to share our love for road adventures with you. Every vehicle we offer is handpicked, ensuring the utmost safety and comfort for your journey. With DriveEase, you're not just a customer; you're a valued member of our road-tripping family. Join us in exploring the world, one scenic drive at a time.
            </div>
            <div className="aboutSignWrapper">
                <div className="signWrapper">
                    <img src={Sign} alt="" className="aboutSign"/>
                    <div className="aboutName">Parth</div>
                </div>
                <img src={Anniversary} alt="" className="anniversary" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
