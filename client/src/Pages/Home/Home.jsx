import "./Home.css"
import Porche from "../../assets/porche.png"
import Blob from "../../assets/blob.svg"
import { HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="homeWrapper">
        {/* Left section of the Home component */}
        <div className="homeLeft">
          {/* Welcome message */}
          <div className="homeWelcome">---Welcome to India</div>
          {/* Main title */}
          <h1 className="homeTitle">Rent The Best Cars From Us</h1>
          {/* Description */}
          <div className="homeDesc">
            Discover the freedom of the open road with DriveEase Car Rentals. Our extensive fleet of top-quality vehicles is at your fingertips with easy online booking and competitive rates, your dream road trip is just a click away.
          </div>
          {/* Buttons for booking and calling */}
          <div className="homeButtons">
            {/* Button for booking that takes you to the ride page */}
            <HashLink smooth to="/#fleet" className="homeBookBtnLink">
              <button className="homeBookBtn">Book Ride</button>
            </HashLink>
            {/* Alert Button for calling */}
            <button className="homeCallBtn" onClick={()=>alert("Call on 1800-101-1616")}>Call Us</button>
          </div>
        </div>

        {/* Right section of the Home component */}
        <div className="homeRight">
          <div className="imgContainer">
            {/* Image of the car */}
            <img src={Porche} alt="porche" className="homeCar"/>
            {/* Svg design element */}
            <img src={Blob} alt="" className="homeBlob"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
