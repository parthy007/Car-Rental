import "./Home.css"
import Porche from "../../assets/porche.png"
import Blob from "../../assets/blob.svg"
import { HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="homeWrapper">
        <div className="homeLeft">
          <div className="homeWelcome">---Welcome to India</div>
          <h1 className="homeTitle">Rent The Best Cars From Us</h1>
          <div className="homeDesc">
            Discover the freedom of the open road with DriveEase Car Rentals. Our extensive fleet of top-quality vehicles is at your fingertips with easy online booking and competitive rates, your dream road trip is just a click away.
          </div>
          <div className="homeButtons">
            <HashLink smooth to="/#fleet" className="homeBookBtnLink">
              <button className="homeBookBtn">Book Ride</button>
            </HashLink>
            <button className="homeCallBtn">Call Us</button>
          </div>
        </div>
        <div className="homeRight">
          <div className="imgContainer">
            <img src={Porche} alt="porche" className="homeCar"/>
            <img src={Blob} alt="" className="homeBlob"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
